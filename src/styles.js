import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    visuallyHidden: {
        position: absolute,
        width: '1px',
        height: '1px',
        margin: '-1px',
        padding: 0,
        overflow: hidden,
        whiteSpace: nowrap,
        border: 0,
        clip: 'rect(0 0 0 0)',
        },
    button: {
        backgroundColor: "grey",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px",
        color: "black",
        height: 48,
        padding: "0 30px",
        margin: 10
    }
});

export default useStyles;