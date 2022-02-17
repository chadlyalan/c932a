import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  useMediaQuery,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import WelcomeSide from './WelcomeSide.js';
import './style/main-welcome.css';
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  main: {
    height: '90vh',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    }, 
  picture: {

  },
  welcome: {
    height: '20%',
    
    },
  grid: {
    height: '70%',  
    textAlign: "center",
    alignContent: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
  },
  input: {
    lineHeight: '75px',
    "& input": {
      fontSize: '16px',
      fontFamily: 'Open Sans',
      width: '70%'
    }
  },
  form: {
    width: '60%'
  }
}));

const Login = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const isSmallOrLess = useMediaQuery(theme.breakpoints.up('md'));

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
      {isSmallOrLess ? 
        <Grid item md={5} className={classes.picture}>
          <WelcomeSide /> 
        </Grid>
        : 
        null
      }
        
      
      
      <Grid container item xs={12} md={7}
        spacing={5}
        direction="column" 
        className={classes.main}>
        
          
        <Grid className={classes.welcome} container item>
          {/* this is just for spacing  */}
          <Grid item xs={5}/>

          <Grid item xs={4}>
            <Typography className="typography" color="secondary"
              >Already have an account?</Typography>
          </Grid>

          <Grid item xs={3}>
            <Button 
              className="create-login-button" 
              color="primary"
              onClick={() => history.push("/login")}>Login</Button>
          </Grid>
          
          
        </Grid>

        <Grid container item
          justifyContent="space-evenly"
          spacing={3} className={classes.grid}
          >
          <form 
            className={classes.form}
            onSubmit={handleRegister}>
          <Typography 
            className={classes.title}
          >Create an account</Typography>

            <Grid item container direction="column"
            className={classes.input}>
              <Grid item>
              <FormControl>
                <TextField
                  color="primary"
                  className="username"
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <TextField
                  color="secondary"
                  className="email"
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  color="secondary"
                  className="password"
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl error={!!formErrorMessage.confirmPassword}>
                <TextField
                  color="secondary"
                  className="password"
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            </Grid>
            
            <Button
              color="primary"
              type="submit" 
              variant="contained" 
              size="large">
              Create
            </Button>
          
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
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
