import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { ReactComponent as LogoSvg } from '../../img/logo.svg';

//import MainLogo from '../mainLogo/mainLogo'


const useStyles = makeStyles({
    header: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        border: 0,
        minHeight: 100,
        padding: '0 30px',
        background: 'rgba(0, 0, 0, 0.2)',

    },
    header__link: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        bottom: '-55.6%',
        width: '95px',
        height: '107px',
        transition: '0.3s ease',
        '&:hover': {
            opacity: "0.9",
         },
    },
  });
  

function Header(props) {
    const classes = useStyles();

  return (
    <Box component='div' className={classes.header}>
        <Link to={AppRoute.ROOT}  className={classes.header__link}>
            <LogoSvg />
        </Link>
    </Box>

  );
}

export default Header;