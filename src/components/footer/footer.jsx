import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ReactComponent as LogoSvg } from '../../img/logo.svg';


const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 0,
        minHeight: 100,
        padding: '0 80px',
        background: '#181B48',
        [theme.breakpoints.down('sm')]: {
            padding: '15px',
          }, 
    },

    footer__wrapper: {
        width: '100%',
        maxWidth: '1180px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
          },
    },

    footer__link: {
        width: '49px',
        height: '55px',
        transition: '0.3s ease',
        '&:hover': {
            opacity: "0.9",
         },

        '& svg': {
            width: '49px',
            height: '55px',
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '30px',
          }, 
    },
    footer__copyright: {
        color: '#C0C0C0',
        
    }
  }));
  

function Footer() {
    const classes = useStyles();

  return (
    <Box component='div' className={classes.footer}>
        <Box component='div' className={classes.footer__wrapper}>
            <Link to={AppRoute.ROOT}  className={classes.footer__link}>
                
               <LogoSvg />
            </Link>
            <Typography variant="body1" component='div' className={classes.footer__copyright}>
               © 2021 Copyright
            </Typography>
        </Box>
    </Box>

  );
}

export default Footer;