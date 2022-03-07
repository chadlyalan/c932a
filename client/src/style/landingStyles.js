import picture from "../images/bg-img.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        height: "100vh"
    },
    big: {
        height: '100%',
    },
    small: {
        height: '100%',
        background: `url(${picture})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        '& .MuiFormLabel-root': {
        color: 'white'
        },
        '& .MuiTypography-colorSecondary': {
        color: 'white'
        },
        "& .MuiInput-underline:before": {
        borderBottom: '1px solid #B0B0B0'
        },
        "& input": {
            color: 'white',
        }
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
    },
    text: {
        color: 'white',
        position: 'relative',
        fontSize: 'x-large',
        padding: '2rem'
    },
    bubble: {

    },
    sideContainer: {
        textAlign: 'center',
        top: '35%',
        position: 'relative',
    },
    smallGradient: {
        height: '102%',
        background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
        opacity: '.90',
    }
}));

export default useStyles;