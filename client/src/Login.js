import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { login } from "./store/utils/thunkCreators";
import LoginMain from "./components/LoginMain";
import { ReactComponent as BubbleIcon} from './images/bubble.svg';
import useStyles from "./style/landingStyles";

const Login = (props) => {
  const history = useHistory();
  const { user, login } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMediumOrMore = useMediaQuery(theme.breakpoints.up('md'));


  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
          <LoginMain 
            handleLogin={handleLogin}
            history={history}
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
