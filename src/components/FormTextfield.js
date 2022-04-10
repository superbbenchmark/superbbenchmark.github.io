import { Controller } from "react-hook-form";
import { TextField, Popper } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    paper: {
        border: "1px solid",
        padding: theme.spacing(0.7),
        backgroundColor: theme.palette.background.paper,
        fontSize: "medium",
    },
}));
const FormTextField = ({
    control,
    className,
    name,
    label,
    description,
    rules,
    error,
    helperText,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <TextField
                        {...field}
                        className={className}
                        label={label}
                        onFocus={(e) => setAnchorEl(e.currentTarget)}
                        onBlur={(e) => setAnchorEl(null)}
                        fullWidth
                        error={error}
                        helperText={helperText}
                    />
                )}
                rules={rules}
            />
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="right-start"
                transition
                style={{ maxWidth: "27%" }}
            >
                <div className={classes.paper}>{description}</div>
            </Popper>
        </>
    );
};
export default FormTextField;
