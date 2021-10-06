import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import BgImage from '../../img/bg_hero.jpg';


const useStyles = makeStyles({
   launches__wrapper: {
        width: '100%',
   },
   launches__title: {
     textAlign: 'center',
   }
  });
  

function LaunchesBlock({lauchesList}) {
    const classes = useStyles();
    const url = '#';

  return (
    
    <div className={classes.launches__wrapper}>
        <Typography variant="h2" mb='30px' className={classes.launches__title}>
           Spaceflight Launches
        </Typography>
    </div>
    
   
    

  );
}

export default LaunchesBlock;