import { useState, useCallback, useEffect } from "react";
import { useGoogleLogout } from "react-google-login";

let logoutTimer;

const clientId =
    "796679159105-6335p2q2ub5pr15lnf3g2cqkhnucmvkl.apps.googleusercontent.com";

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [email, setEmail] = useState(null);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();

    const onFailure = () => {};
    const onLogoutSuccess = () => {};
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    const login = useCallback((token, expirationDate, isAdmin, email) => {
        const tokenExpirationDate =
            expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        isAdmin = isAdmin || false;
        email = email || null;

        setToken(token);
        setTokenExpirationDate(tokenExpirationDate);
        setIsAdmin(isAdmin);
        setEmail(email);
        localStorage.setItem(
            "data",
            JSON.stringify({
                token: token,
                expiration: tokenExpirationDate.toISOString(),
                isAdmin: isAdmin,
                email: email,
            })
        );
    }, []);

    const logout = useCallback(() => {
        signOut();
        setToken(null);
        setTokenExpirationDate(null);
        setIsAdmin(false);
        setEmail(null);
        localStorage.removeItem("data");
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime =
                tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data"));
        if (
            storedData &&
            storedData.token &&
            new Date(storedData.expiration) > new Date() &&
            storedData.email
        ) {
            login(storedData.token, new Date(storedData.expiration), storedData.isAdmin, storedData.email);
        }
        else {
            logout()
        }
    }, [login]);

    return { token, isAdmin, email, login, logout };
};
