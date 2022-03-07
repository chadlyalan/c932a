import React from "react";
import {
    Grid,
    Typography,
    Button,
    FormControl,
    TextField,
  } from "@material-ui/core";
import useStyles from "../style/registerStyle.js";


const LoginMain = (props) => {
    const { handleLogin, history } = props;
    const classes = useStyles();

    return (
    <Grid container item sm={12} md={5} lg={7}
        spacing={7}
        direction="column" 
        alignItems="center"
        className={classes.root}
        >
        <Grid className={classes.header} 
            container item 
            justifyContent="flex-end"
            alignItems="center">
            
            <Grid item xs={6}>
                <Typography color="secondary">
                    Need to register?
                </Typography>
            </Grid>
            
            <Grid item xs={3}>
                <Button 
                    className={classes.button}
                    color="primary"
                    sx={{ "&:hover": {backgroundColor: "red"} }}
                    onClick={() => history.push("/register")}>
                        Register
                </Button>
            </Grid>
        </Grid>
        
        <Grid container item
            justifyContent="space-evenly"
            spacing={3} direction="column"
            className={classes.grid}>
            <form className={classes.form} onSubmit={handleLogin}>
                <Typography 
                    color="secondary"
                    className={classes.title}>
                    Welcome Back!
                </Typography>
                <Grid item container direction="column"
                        className={classes.input}>
                    <Grid item>
                        <FormControl  fullWidth="true" margin="normal" required>
                            <TextField
                                aria-label="username"
                                label="Username"
                                name="username"
                                type="text"
                                />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth="true" margin="normal" required>
                            <TextField
                                label="password"
                                aria-label="password"
                                type="password"
                                name="password"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                
        
                <Grid item>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        color="primary">
                        Login
                    </Button>
                </Grid>
            </form>
        </Grid>
    </Grid>
    )
}

export default LoginMain;
