import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Button, Container, Typography } from '@mui/material';
import { useTheme } from '@material-ui/core/styles';
import BgImage from '../../img/bg_hero.png';


const useStyles =  makeStyles((theme) => ({
  button: {
    display: 'inline-block',
    padding: '27px 80px',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '20px',
    color: theme.palette.common.white,
    textDecoration: 'none',
    textTransform: 'capitalize',
    background: 'linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)',
    borderRadius:'50px',
    transition: '0.3s ease',

    '&:hover': {
      opacity: "0.8",
    },
    '&button': {
      borderRadius:'50px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      padding: '20px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      padding: '10px 30px',
    },
  },
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
    backgroundColor: theme.palette.background.default,
    backgroundImage: `url('${BgImage}')`,
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
    fontFamily: 'Montserrat',
    //maxWidth: '900px',
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
  page__link: {
    display: 'inline-block',
    padding: '27px 80px',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '20px',
    color: theme.palette.common.white,
    textDecoration: 'none',
    textTransform: 'capitalize',
    background: 'linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)',
    borderRadius:'50px',
    transition: '0.3s ease',

    '&:hover': {
      opacity: "0.8",
    },
    '&button': {
      borderRadius:'50px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      padding: '20px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      padding: '10px 30px',
    },
  }
  }));
  

function MainHero({onShowAllClick}) {
  const theme = useTheme();
  const classes = useStyles();

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
            {/*<Link to={url} className={classes.page__link} >
              Show All Launches
  </Link>*/}
            <Button  onClick={onShowAllClick}  classes={{root:classes.page__link}}>
              Show All Launches
            </Button>
            
          </Box>
        </Container>      
    </Box>
   
    

  );
}

export default MainHero;