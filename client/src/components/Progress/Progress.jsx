import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'absolute',
    left: '47.5vw',
    top: '35%',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const CircularDeterminate = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress variant="determinate" value={progress} color="secondary" size="5vw" />
    </div>
  );
};

export default CircularDeterminate;
