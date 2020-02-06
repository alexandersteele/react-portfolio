import { makeStyles } from '@material-ui/core/styles';

const useAboutStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    image: {
        width: '100%',
        maxWidth: '300px',
        height: 'auto'
    }
}));
export default useAboutStyles;