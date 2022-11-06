import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    width: '100%',
  },
}));

const ButtonInput = (props) => {
  const classes = useStyles();
  const { title, onClick, my, type } = props;

  return (
    <Button
      type={type}
      className={classes.buttonStyles}
      onClick={onClick}
      variant='contained'
      sx={{ my: my }}
      data-testid='drawer-handle-button'
    >
      {title}
    </Button>
  );
};

export default ButtonInput;
