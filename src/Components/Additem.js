import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(12),
      width: theme.spacing(250),
      height: theme.spacing(50),
    },
  },
}));

export default function Additem() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper />
     
    </div>
  );
}
