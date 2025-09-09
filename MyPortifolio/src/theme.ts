import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#090034ff",
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
});
theme = responsiveFontSizes(theme);

export default theme;