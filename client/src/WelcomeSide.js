import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        width: '60vh',
        height: '100vh',
    },
    image: {
        width: '100%',
    }
}));

const WelcomeSide = () => {
    const classes = useStyles();
    const picture = "bg-img.png";

    return (
    <div className={classes.main}>
        <img className={classes.image}
        src={process.env.PUBLIC_URL + picture}
        alt="some unspecified words"
        />   
    </div>
)}   

export default WelcomeSide;