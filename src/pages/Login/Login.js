import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logoDark from "../../assets/logo_dark.png";

const styles = () => ({
  login: {
    width: "100%",
    height: "100%",
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
          <TextField
            required
            name="email"
            label="E-mail"
            className={classes.textField}
            margin="normal"
            fullWidth
            defaultValue="email@login.com"
          />
        </div>
        <div className={classes.container}>
          <TextField
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
          <Button
            variant="outlined"
            margin="normal"
            component={Link}
            to="/app/trailers"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  </div>
);

export default withStyles(styles)(Login);
