import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import  {getTimeFormate} from '../../utils';
import BgImage from '../../img/bg_hero.png';


const useStyles =  makeStyles((theme) => ({
  hero__about: {
    maxWidth: '595px',
    marginBottom: '50px',
    color: theme.palette.info.main,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '165%',
  },
  hero__wrapper: {
    fontFamily: 'Montserrat',
    width: '100%',
    //height: '58.94vw',
    marginTop: '-100px',
    display: 'flex',
    //backgroundColor: theme.palette.background.default,
    //backgroundImage: `url('${BgImage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'top center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  hero__text: {
    fontFamily: 'Montserrat',
    marginBottom: '30px',
    fontWeight: '800',
    fontSize: '76px',
    lineHeight: '121%',
    color: theme.palette.primary.main,
  },
  hero__text_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    maxWidth: '900px',
    paddingTop: '29%', //'23.6%',
    //paddingLeft: '108px',
    paddingBottom: '24.4vw',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '260px',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
    
  },
  timer__wrapper: {
    backgroundColor: '#4A00E0',
    padding: '50px 70px',
    minHeight: '190px',
    minWidth: '300px',
  },
  timer: { 
    color: theme.palette.primary.main,
  },
}));
  

function LaunchHero({launch}) {
  const theme = useTheme();
  const classes = useStyles();
  const timerStr = getTimeFormate(launch.launchDate)
  console.log('timerStr' + timerStr)
  console.log(launch.launchDate)  
  const url = '#';

  return (
    
    <Box component='div' className={classes.hero__wrapper} style={{backgroundImage: `url(${launch.launchImg})`}}>
        <Container maxWidth="lg">
          <Box component='div' className={classes.hero__text_wrapper}>
            <Typography variant="h1" mb='30px' color='primary' textAlign='center'>
              {launch.launchName}
            </Typography>

            <Typography variant="h3" mb='40px' className={classes.hero__about} textAlign='center'>
              Go for Launch
            </Typography>

            <Box className={classes.timer__wrapper}>
              <Typography variant="h1"  className={classes.timer} textAlign='center'>
                {timerStr}
              </Typography>
            </Box>
            
            
          </Box>
        </Container>      
    </Box>
   
    

  );
}

export default LaunchHero;