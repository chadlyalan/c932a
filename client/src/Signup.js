import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import './style/main-welcome.css';
import { makeStyles, useTheme } from "@material-ui/styles";
import RegisterMain from "./components/RegisterMain";
import picture from "../src/images/bg-img.png";

const useStyles = makeStyles(theme => ({
  main: {
    color: theme.palette.text.secondary,
    }, 
  big: {

  },
  small: {
    background: `url(${picture})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    
  },
  gradient: {
    height: '100%',
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    opacity: '.90',
  },
  picture: {
    height: '100vh',
    backgroundImage: `url(${picture})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));


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
    <Grid container justify="flex-start" >
      
      <Grid item xs={0} sm={0} md={7} lg={5} 
        className={classes.picture}>
        
      </Grid>

      <Grid item xs={12} sm={12} md={5} lg={7} 
        alignItems="center"
        className={
          isMediumOrMore ? classes.big : classes.small
          } >
        <div className={
          isMediumOrMore ? null : classes.gradient
          }>
          <RegisterMain 
            className={classes.main}
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
