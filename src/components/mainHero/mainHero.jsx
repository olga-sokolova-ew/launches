import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import BgImage from '../../img/bg_hero.jpg';


const useStyles = makeStyles({
    hero__about: {
      maxWidth: '595px',
      marginBottom: '50px',
      color: ' #C0C0C0',
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: '17px',
      lineHeight: '165%',
    },
    hero__wrapper: {
      fontFamily: 'Montserrat',
      width: '100%',
      height: '58.94vw',
      marginTop: '-100px',
      display: 'flex',
      backgroundImage: `url('${BgImage}')`,
    },
    hero__text: {
      fontFamily: 'Montserrat',
      marginBottom: '30px',
      fontWeight: '800',
      fontSize: '76px',
      lineHeight: '121%',
      color: '#F1EBFF',
    },
    hero__text_wrapper: {
      fontFamily: 'Montserrat',
      maxWidth: '900px',
      paddingTop: '23.3%',
      paddingLeft: '134px',
    },
    page__link: {
      padding: '30px 80px',
      fontFamily: 'Montserrat',
      fontWeight: '700',
      fontSize: '20px',
      color: '#ffffff',
      textDecoration: 'none',
      background: 'linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)',
      borderRadius:'50px',
      transition: '0.3s ease',

      '&:hover': {
        opacity: "0.7",
     },


    }
  });
  

function MainHero(props) {
    const classes = useStyles();
    const url = '#';

  return (
    
    <Box component='div' className={classes.hero__wrapper}>
        <Container maxWidth="lg">
          <Box component='div' className={classes.hero__text_wrapper}>
            <Typography variant="h1" mb='30px' color='primary'>
              Upcoming Spaceflight Launches
            </Typography>

            <Typography variant="h5" mb='50px' className={classes.hero__about}>
              View all launches available - including launches from the past and utilize powerful search filters.
              </Typography>
            <Link to={url} className={classes.page__link} classes={{root: classes.page__link}}>
                Upcoming Spaceflight Launches
              
            </Link>
            
          </Box>
        </Container>      
    </Box>
   
    

  );
}

export default MainHero;