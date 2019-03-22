import React from "react";
import { withStyles } from "@material-ui/core/styles";
import logoDark from "../assets/logo_dark.png";
import { List, ListItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = () => ({
    menu: {
        width: 423,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        "& > div": {
            textAlign: "center"
        },
        "& .header": {
            paddingTop: 88,
            paddingBottom: 20,
            width: 274,
            "& img": {
                width: "100%"
            }
        },
        "& > div > nav": {
            width: 254,
            margin: "0 auto",
            "& > *": {
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 8,
                marginBottom: 8,
                "&.active": {
                    opacity: 1.0
                }
            },
            "& > a": {
                color: "#fff",
                textAlign: "center",
                justifyContent: "center",
                "& > div > span": {
                    color: "#fff"
                }
            }
        }
    }
});

const Login = ({ classes }) => (
    <div className={classes.menu}>
        <div>
            <div className="header">
                <img src={logoDark} alt="Logo" />
            </div>
            <List component="nav">
                <ListItem dense button disabled className="active">
                    <Button variant="outlined" fullWidth margin="normal">
                        TRAILERS
                    </Button>
                </ListItem>
                <ListItem dense button>
                    <Button
                        fullWidth
                        margin="normal"
                        color="primary"
                        component={Link}
                        to="/login"
                    >
                        LOGOUT
                    </Button>
                </ListItem>
            </List>
        </div>
    </div>
);

export default withStyles(styles)(Login);
