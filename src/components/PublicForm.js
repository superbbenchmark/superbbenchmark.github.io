import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import swal from "sweetalert";
import axios from "axios";

import { Typography, Button } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { AuthContext } from "../context/auth-context";
import { formVal } from "../utils/form-validator";
import { tracks } from "../Data";
import FormTextField from "./FormTextfield";
import { SubSubSection } from "./Sections";
import { capitalizeFirstLetter } from "./Utilies";
import { HashLink } from "react-router-hash-link";
import { Section } from "./Sections";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textField: {
        marginBottom: theme.spacing(1),
        width: "80%",
    },
    Button: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(2),
        marginBottom: "3%",
    },
}));

export default function PublicForm(){
    const classes = useStyles();
    const filePickerRef = useRef();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        defaultValues: {
            submitName: "",
            modelURL: "",
            modelDesc: "",
            stride: "",
            inputFormat: "",
            corpus: "",
            paramDesc: "",
            paramShared: "",
            fineTunedParam: "",
            taskSpecParam: "",
            task: "1",
        },
    });

    const { ref, ...rest } = register("file", formVal.file);

    const auth = useContext(AuthContext);
    const watchFile = watch("file");

    const submitHandler = async (data) => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append("submitName", data.submitName);
            formData.append("modelURL", data.modelURL);
            formData.append("modelDesc", data.modelDesc);
            formData.append("stride", data.stride);
            formData.append("inputFormat", data.inputFormat);
            formData.append("corpus", data.corpus);
            formData.append("paramDesc", data.paramDesc);
            formData.append("paramShared", data.paramShared);
            formData.append("fineTunedParam", data.fineTunedParam);
            formData.append("taskSpecParam", data.taskSpecParam);
            formData.append("task", data.task);
            formData.append("file", data?.file[0]);
            const res = await axios({
                method: "post",
                url: "/api/submission",
                data: formData,
                headers: {
                    Authorization: "Bearer " + auth.token,
                },
            })
                .then((res) => {
                    setIsLoading(false);
                    swal({
                        title: "Susscess",
                        text: res.data.message,
                        icon: "success",
                    }).then(() => history.push("/profile"));
                })
                .catch((err) => {
                    setIsLoading(false);
                    swal({
                        title: "Error",
                        text: err.response.data.message,
                        icon: "error",
                    });
                });
        } catch (err) { }
    };

    function PublicPart() {
        return (
            <Section>
                <SubSubSection>
                    <Typography variant="body1" color="textSecondary">
                        Make sure to read the <HashLink to="/rules">Rules</HashLink> before submitting to the <HashLink to="/leaderboard?track=constrained&subset=Paper">SUPERB Benchmark</HashLink> or the <HashLink to="/leaderboard?track=constrained&subset=Public+Set">SUPERB Challenge Public-set</HashLink>.
                    </Typography>
                </SubSubSection>
                <form
                    className={classes.root}
                    autoComplete="off"
                    onSubmit={handleSubmit(submitHandler)}
                >
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="submitName"
                        label="Submission Name*"
                        description="A short name for your system, which will be displayed on
                        the leaderboard. (Required)"
                        rules={formVal.submitName}
                        error={errors.submitName}
                        helperText={
                            errors.submitName && errors.submitName.message
                        }
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="modelURL"
                        label="Model URL/Github"
                        description="A Github URL for your model code repository. (Optional)"
                        rules={formVal.modelURL}
                        error={errors.modelURL}
                        helperText={errors.modelURL && errors.modelURL.message}
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="modelDesc"
                        label="Model Description*"
                        description="A sentence or two describing your system. Make sure to mention any outside data you use. (Required)"
                        rules={formVal.modelDesc}
                        error={errors.modelDesc}
                        helperText={
                            errors.modelDesc && errors.modelDesc.message
                        }
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="stride"
                        label="Stride*"
                        description="Your stride width (ms). (Required)"
                        rules={formVal.stride}
                        error={errors.stride}
                        helperText={errors.stride && errors.stride.message}
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="inputFormat"
                        label="Input Format*"
                        description="The type of input format you use. e.g., waveform, FBANK. (Required) "
                        rules={formVal.inputFormat}
                        error={errors.inputFormat}
                        helperText={
                            errors.inputFormat && errors.inputFormat.message
                        }
                    />

                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="corpus"
                        label="Corpus*"
                        description="The type of corpus you use. e.g., LS 50 hr, LL 60k hr. (Required)"
                        rules={formVal.corpus}
                        error={errors.corpus}
                        helperText={errors.corpus && errors.corpus.message}
                    />

                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="paramDesc"
                        label="Parameter Description*"
                        description="A sentence or explaining how you share parameters accross tasks (or stating that you don't share parameters). (Required)"
                        rules={formVal.paramDesc}
                        error={errors.paramDesc}
                        helperText={
                            errors.paramDesc && errors.paramDesc.message
                        }
                    />

                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="paramShared"
                        label="Parameter shared without fine-tuning*"
                        description="The total number of parameters in your model which don't require task spesific fine-tuning (only numeric numbers allowed). (Required)"
                        rules={formVal.paramShared}
                        error={errors.paramShared}
                        helperText={
                            errors.paramShared && errors.paramShared.message
                        }
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="fineTunedParam"
                        label="Fine-tuned parameters"
                        description="The number of parameters in your model which are common but require task specific fine-tuning (only numeric numbers allowed). (Optional)"
                        rules={formVal.fineTunedParam}
                        error={errors.fineTunedParam}
                        helperText={
                            errors.fineTunedParam &&
                            errors.fineTunedParam.message
                        }
                    />
                    <FormTextField
                        control={control}
                        className={classes.textField}
                        name="taskSpecParam"
                        label="Task-Specific parameters"
                        description="The number of parameters in your model which are task specific and not used by any other tasks (only numeric numbers allowed). (Optional)"
                        rules={formVal.taskSpecParam}
                        error={errors.taskSpecParam}
                        helperText={
                            errors.taskSpecParam && errors.taskSpecParam.message
                        }
                    />

                    <FormControl
                        component="fieldset"
                        style={{ marginTop: "2%" }}
                    >
                        <FormLabel component="legend"><HashLink to="/rules">Track</HashLink></FormLabel>
                        <Controller
                            control={control}
                            name="task"
                            render={({ field }) => (
                                <RadioGroup
                                    row
                                    aria-label="position"
                                    {...field}
                                >
                                    {tracks.map((track, index) => {
                                        return (
                                            <ThemeProvider theme={track.theme}>
                                                <FormControlLabel
                                                    value={(
                                                        index + 1
                                                    ).toString()}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        <Typography color="primary">
                                                            {capitalizeFirstLetter(
                                                                track.name.toLowerCase()
                                                            )}
                                                        </Typography>
                                                    }
                                                    color="primary"
                                                />
                                            </ThemeProvider>
                                        );
                                    })}
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                    <input
                        type="file"
                        accept=".zip"
                        style={{ display: "none" }}
                        name="file"
                        ref={(e) => {
                            ref(e);
                            filePickerRef.current = e;
                        }}
                        onChange={(e) => setValue("file", e.target.files)}
                    />
                    <Button
                        className={classes.Button}
                        variant="contained"
                        color="primary"
                        onClick={() => filePickerRef.current.click()}
                    >
                        {watchFile && watchFile[0]?.name
                            ? watchFile[0]?.name
                            : "Select zip"}
                    </Button>
                    <span style={{ color: "red" }}>
                        {errors.file && errors.file.message}
                    </span>
                    <Button
                        className={classes.Button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </Section>
        )
    }

    return <PublicPart />;
} 