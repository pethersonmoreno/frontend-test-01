import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
    typography: {
        fontSize: 12,
        useNextVariants: true
    },
    overrides: {
        MuiButtonBase: {
            root: {
                color: "rgba(169, 158, 126, 0.95);",
                "&:hover": {
                    backgroundColor: "rgba(169, 158, 126, 0.08)"
                }
            }
        },
        MuiInputBase: {
            input: {
                color: "#fff",
                fontSize: 14,
                fontFamily: "Roboto"
            }
        },
        MuiFormLabel: {
            root: {
                color: "rgba(169, 158, 126, 0.8)",
                fontSize: 14,
                fontFamily: "Roboto",
                "&$focused": {
                    color: "rgba(169, 158, 126, 0.8)"
                }
            }
        },
        MuiInput: {
            underline: {
                "&:before, &:after": {
                    borderBottomColor: "rgba(169, 158, 126, 0.42)"
                },
                "&:hover:not($disabled):not($focused):not($error)": {
                    "&:before, &:after": {
                        borderBottomColor: "rgba(169, 158, 126, 0.87)"
                    }
                }
            }
        },
        MuiButton: {
            root: {
                fontFamily: "Roboto-Condensed",
                fontSize: 14,
                color: "rgba(169, 158, 126, 0.95);",
                "&:hover": {
                    backgroundColor: "rgba(169, 158, 126, 0.08)",
                    "&$disabled": {
                        backgroundColor: "red"
                    }
                },
                "&$disabled": {
                    color: "rgba(169, 158, 126, 0.95);",
                    "&.active": {
                        opacity: 1.0
                    }
                }
            },
            outlined: {
                borderColor: "rgba(169, 158, 126, 0.50)"
            },
            textPrimary: {
                color: "rgba(255, 255, 255, 0.95);",
                borderColor: "rgba(255, 255, 255, 0.50)",
                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                }
            }
        },
        MuiTypography: {
            subheading: {
                fontSize: 14
            }
        }
    }
});

export default theme;
