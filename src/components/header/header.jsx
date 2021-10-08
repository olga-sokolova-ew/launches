import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import { makeStyles } from '@mui/styles';
//import { ClassNames } from '@emotion/react';  не работает
import { Box, Typography} from '@mui/material';
import { ReactComponent as LogoSvg } from '../../img/logo.svg';
import { ReactComponent as ArrowLeftSvg } from '../../img/arrow_left.svg';
//import MainLogo from '../mainLogo/mainLogo'


const useStyles = makeStyles((theme) => ({
    header: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        minHeight: 100,
        padding: '0 30px',
        background: 'rgba(0, 0, 0, 0.2)',

    },

    header__wrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '1180px',
      //padding: '0 130px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        //padding: 0,
        maaxWidth: '100%',
      },
    },
    header__back: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: '600',
      color: theme.palette.primary.main,
      textDecoration: 'none',
      textTransform: 'capitalize',
      transition: '0.3s ease',
      '&:hover': {
        opacity: "0.7",

        '& svg': {
          transform: 'translateX(-5px)'
        }
     },
     '& svg': {
      width: '28px',
      height: '14px',
      marginRight: '10px',
      transition: '0.3s ease',
   },
    },
    header__link: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '95px',
        height: '107px',
        transition: '0.3s ease',
        '&:hover': {
            opacity: "0.8",
         },
         [theme.breakpoints.down('md')]: {
          right: '0',
        },
    },
    header__wrapper_main: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'end',
      bottom: '-55.6%',
      width: '95px',
      height: '107px',
    }
  }));
  

function Header({isMain=false}) {
    const classes = useStyles();
    const additionalClass = (isMain) && `classes.header__link_inner`;

  return (
    <Box component='div' className={classes.header}>
      {isMain ?
        <Box className={classes.header__wrapper_main}>
          <LogoSvg />
        </Box>
        
        :
        
        <Box className={classes.header__wrapper}>
        <Link to={AppRoute.ROOT}  className={classes.header__back}>
          <ArrowLeftSvg  />
          <Typography variant="h3">
              Back To Home
          </Typography>
        </Link>
        <Link to={AppRoute.ROOT}  className={classes.header__link}>
           <LogoSvg />
        </Link>
        </Box>
      }
        
    </Box>

  );
}

export default Header;