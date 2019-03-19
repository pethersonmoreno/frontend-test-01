import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextFieldCustom from "../../components/material-ui/TextFieldCustom";
import ButtonCustom from "../../components/material-ui/ButtonCustom";
import bgImage from "../../assets/background.png";
import logoDark from "../../assets/logo_dark.png";

const styles = () => ({
  login: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .header": {
      width: 300,
      "& img": {
        width: "100%"
      }
    },
    "& form": {
      marginTop: 20,
      width: 300
    }
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  containerButton: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Login = ({ classes }) => (
  <div className={classes.login}>
    <div>
      <div className="header">
        <img src={logoDark} alt="Logo" />
      </div>
      <form>
        <div className={classes.container}>
          <TextFieldCustom
            required
            name="email"
            label="E-mail"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </div>
        <div className={classes.container}>
          <TextFieldCustom
            required
            name="password"
            label="Password"
            className={classes.textField}
            margin="normal"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
        </div>
        <div className={classes.containerButton}>
          <ButtonCustom variant="outlined" margin="normal">
            Login
          </ButtonCustom>
        </div>
      </form>
    </div>
  </div>
);

export default withStyles(styles)(Login);
