import isGithubUrl from "is-github-url";

const validNumber = (inputtxt) => {
    var letters = /^[eE0-9]+$/;
    if (inputtxt.length === 0) {
        return true;
    } else if (inputtxt.match(letters) && inputtxt.length <= 100) {
        return true;
    } else {
        return "Invalid Number";
    }
};

const formVal = {
    submitName: {
        required: "This field is requied.",
        maxLength: {
            value: 20,
            message: "Submission name should be less then 20 charaters",
        },
    },
    modelURL: {
        validate: {
            isGithub: (url) =>
                !url || isGithubUrl(url) ? true : "Invalid Github URL",
        },
    },
    modelDesc: {
        required: "This field is required",
        maxLength: {
            value: 300,
            message: "Submission name should not excced 300 charaters",
        },
    },
    stride: {
        required: "This field is required",
        pattern: {
            value: /^[0-9]*$/,
            message: "Invalid number",
        },
        max: {
            value: 100,
            message: "Invalid number", // JS only: <p>error message</p> TS only support string
        },
        min: {
            value: 0,
            message: "Invalid number",
        },
    },
    inputFormat: {
        required: "This field is required",
        maxLength: {
            value: 300,
            message: "Input fromat should not excced 300 charaters",
        },
    },
    corpus: {
        required: "This field is required",
        maxLength: {
            value: 300,
            message: "Corpus should not excced 300 charaters",
        },
    },
    paramDesc: {
        required: "This field is required",
        maxLength: {
            value: 300,
            message: "Parameter description should not excced 300 charaters",
        },
    },
    paramShared: {
        required: "This field is required",
        validate: {
            validNum: (input) => validNumber(input),
        },
    },
    fineTunedParam: {
        validate: {
            validNum: (input) => validNumber(input),
        },
    },
    taskSpecParam: {
        validate: {
            validNum: (input) => validNumber(input),
        },
    },
    file: {
        required: "No file selected",
        validate: {
            fileType: (fileList) =>
                (fileList[0].type === "application/zip" || fileList[0].type === "application/x-zip-compressed" || fileList[0].type === "application/x-zip")
                    ? true
                    : "Wrong file format",
            fileSize: (fileList) =>
                fileList[0]?.size < 50 * 1024 * 1024 ? true : "File too large",
        },
    },
    huggingfaceOrganizationName: {
        required: "This field is requied.",
        maxLength: {
            value: 60,
            message: "Huggingface Organization Name should be over 60 charaters",
        },
    },
    huggingfaceRepoName: {
        required: "This field is requied.",
        maxLength: {
            value: 60,
            message: "Huggingface Repository Name should be over 60 charaters",
        },
    },
    huggingfaceCommonHash: {
        required: "This field is requied.",
        maxLength: {
            value: 40,
            message: "Huggingface Common Hash should be equal to 40 charaters",
        },
        minLength: {
            value: 40,
            message: "Huggingface Common Hash should be equal to 40 charaters",
        },
    },
};

export { formVal };
