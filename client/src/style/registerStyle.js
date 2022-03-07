import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
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
            textAlign: 'center',
        },
        "& .MuiInput-underline:before": {
            borderBottom: '1px solid #3A8DFF'
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: '2px solid #3A8DFF'
        },
        "& label": {
            width: '100%',
            textAlign: 'center',
        }
    },
    form: {
        width: '100%',
    },
    button: {
        background: 'white',
        boxShadow: '0px 4px 4px rgba(74, 106, 149, .2)',
        // '&.MuiButton-textPrimary:hover': {
        //     backgroundColor: 'secondary',
        // }
    }
  }));

  export default useStyles;

  