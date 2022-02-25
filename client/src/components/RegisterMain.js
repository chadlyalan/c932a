import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    },
  header: {
    height: '20%',
    
    },
  grid: {
    height: '70%',  
    textAlign: "center",
    alignContent: 'center',
    width: '100%',

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
      
    },
    "& .MuiInput-underline:before": {
      borderBottom: '1px solid #3A8DFF'
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: '2px solid #3A8DFF'
    }
  },
  form: {
    width: '100%',
  },
  button: {
    background: 'white',
    boxShadow: '0px 4px 4px rgba(74, 106, 149, .2)'
  }
}));


const RegisterMain = (props) => {
  const { handleRegister, history, formErrorMessage } = props;
  const classes = useStyles();

  return (
    <Grid container item sm={12} md={5} lg={7}
        spacing={5}
        direction="column" 
        alignItems="center"
        className={classes.root}
        >
        
          
      <Grid className={classes.header} 
        container item justifyContent="flex-end"
        alignItems="center"
        >

        <Grid item xs={6}>
          <Typography color="secondary">
            Already have an account?
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Button 
            className={classes.button}
            color="primary"
            onClick={() => history.push("/login")}>
              Login
          </Button>
        </Grid>
      </Grid>

        <Grid container item
              justifyContent="space-evenly"
              spacing={3} className={classes.grid}>
          <form 
            className={classes.form}
            onSubmit={handleRegister}>
            <Typography 
              color="secondary"
              className={classes.title}>
                Create an account
            </Typography>

            <Grid item container direction="column"
                  className={classes.input}>
              <Grid item>
                <FormControl fullWidth="true">
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
                <FormControl fullWidth="true">
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
                <FormControl  fullWidth="true"
                  error={!!formErrorMessage.confirmPassword}>
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
                <FormControl  fullWidth="true"
                  error={!!formErrorMessage.confirmPassword}>
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
  )
}

export default RegisterMain;
