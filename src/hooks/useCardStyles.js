import { makeStyles } from '@material-ui/core/styles';

const useCardStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1,
    },
    pos: {
      marginBottom: 12,
    },
    title: {
      fontSize: 14,
    },
    paper: {
        height: 350 
    },

});

export default useCardStyles;