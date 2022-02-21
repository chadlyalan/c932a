import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import WelcomeSide from './WelcomeSide.js';
import './style/main-welcome.css';
import { makeStyles, useTheme } from "@material-ui/styles";
import RegisterMain from "./components/RegisterMain";

const useStyles = makeStyles(theme => ({
  main: {
    height: '100vh',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),

    }, 
 
  small: {

  },
  picture: {

  }
}));

// temp opacity style for main
// background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${process.env.PUBLIC_URL} ${picture}`

const Login = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const isMediumOrMore = useMediaQuery(theme.breakpoints.up('md'));

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }


  return (
    <Grid container justify="flex-start" spacing={4}>
      {isMediumOrMore ? (
        <>
          <Grid item md={7} lg={5} className={classes.picture}>
            <WelcomeSide /> 
          </Grid>

          <Grid item md={5} lg={7} alignItems="center"
            className={classes.main} >
            <RegisterMain 
              handleRegister={handleRegister}
              history={history}
              formErrorMessage={formErrorMessage}
            />
          </Grid>
        </>
      )
      :
        (
        <Grid item className={classes.small}>
          <RegisterMain 
            handleRegister={handleRegister}
            history={history}
            formErrorMessage={formErrorMessage}
          />
        </Grid>
        )
      }

    </Grid>
  ) 
      
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
