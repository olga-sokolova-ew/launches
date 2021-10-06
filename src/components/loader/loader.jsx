import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { ReactComponent as LoaderSvg } from '../../img/loader.svg';

const useStyles = makeStyles({
    loader: {
        width: '56px',
        height: '56px',       
    }
  });
  

function Loader() {
    const classes = useStyles();

  return (
    <Box component='div' className={classes.loader}>
        <LoaderSvg/>
    </Box>
  );
}

export default Loader;