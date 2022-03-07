import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "../style/registerStyle.js";


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
        container item 
        justifyContent="flex-end"
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
            spacing={3} direction="column" 
            className={classes.grid}>
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
          
          <Grid item>
            <Button
              color="primary"
              type="submit" 
              variant="contained" 
              size="large">
              Create
            </Button>
          </Grid>
          
        </form>
      </Grid>
    </Grid>
  )
}

export default RegisterMain;
