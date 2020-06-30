import { createMuiTheme } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import lightBlue from "@material-ui/core/colors/lightBlue";

// Create a theme instance.
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: amber
  //   },
  //   secondary: {
  //     main: lightBlue
  //   },
  //   background: {
  //     default: "#f1eff4"
  //   }
  // },
  // shadows: [
  //   "none",
  //   "0 0 36px rgba(0, 0, 0, 0.1)",
  //   "0 0 36px rgba(0, 0, 0, 0.2)",
  //   "0 0 42px rgba(0, 0, 0, 0.3)",
  //   "0 0 46px rgba(0, 0, 0, 0.4)",
  //   "0 0 52px rgba(0, 0, 0, 0.5)"
  // ],
  typography: {
    fontFamily: ["Inter", "Roboto Slab", "Roboto"]
  }
  // shape: {
  //   borderRadius: 10
  // }
});

export default theme;
