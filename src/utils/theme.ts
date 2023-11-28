import { createTheme } from "@mui/material";
import { colors } from "../constants/colors"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary : {
            main: colors.EASTERN_BLUE,
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    margin: "50px 0"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255,255,255, 0.5)',
                    boxSizing: 'border-box',
                    width: '30%',
                    display: "flex",
                    flexDirection: "column",
                    padding: '40px',
                    gap: '10px',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255,255,255, 0.5)',
                    borderRadius: '5px',
                    '&:hover' : {
                        backgroundColor: 'white',
                        border: '1px solid',
                        borderColor: colors.EASTERN_BLUE,
                        boxShadow: '2px 2px rgba(37, 150, 190, 0.5)'
                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '40px',
                    padding: '12px 20px',
                    backgroundColor: colors.EASTERN_BLUE,
                    color: "white",
                    '&:hover' : {
                        backgroundColor: colors.SEAGULL,
                        border: '1px solid',
                        borderColor: colors.EASTERN_BLUE,
                        boxShadow: '1px 1px rgba(0,0,0, 0.2)',
                        color: colors.EASTERN_BLUE,
                    }
                }
            }
        },
    }
})

export default theme;