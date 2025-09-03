import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#091c47",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});
theme = responsiveFontSizes(theme);

export default theme;