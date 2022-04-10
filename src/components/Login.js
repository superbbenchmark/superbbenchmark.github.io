import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useHistory } from "react-router-dom";

const clientId =
    "796679159105-6335p2q2ub5pr15lnf3g2cqkhnucmvkl.apps.googleusercontent.com";

const Login = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const onSuccess = async (res) => {
        // console.log(res);
        // console.log(res.tokenId);
        try {
            const responseData = await axios.post("/api/user/login", {
                id_token: res.tokenId,
            });
            auth.login(responseData.data.access_token, null, responseData.data.isAdmin, responseData.data.email);
            history.push("/");
        } catch (err) {
            console.log(err.response);
        }
    };

    const onFailure = async () => {};

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            clientId={clientId}
            buttonText="Sign in with Google"
            theme="dark"
            responseType="id_token"
            isSignedIn={true}
            uxMode="redirect"
        />
    );
};
export default Login;
