import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import { useTheme } from "@material-ui/styles";
import RegisterMain from "./components/RegisterMain";
import useStyles from "./style/landingStyles";
import { ReactComponent as BubbleIcon} from './images/bubble.svg';

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
    <Grid container justify="flex-start" className={classes.root}>
      
      <Grid item xs={0} sm={0} md={6} lg={5} className={classes.picture}
        >
          {isMediumOrMore ? 
          (
          <div className={classes.gradient}>
            <div className={classes.sideContainer}>
              <BubbleIcon  />
              <Typography className={classes.text}>
                Converse with anyone with any language
              </Typography>
            </div>
          </div>
          ) : 
          (null) 
          }
          
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={7} 
        alignItems="center"
        className={
          isMediumOrMore ? null : classes.small
          } >
        <div className={
          isMediumOrMore ? classes.big : classes.smallGradient
          }>
          <RegisterMain 
            handleRegister={handleRegister}
            history={history}
            formErrorMessage={formErrorMessage}
          />
        </div>
          
      </Grid>
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
