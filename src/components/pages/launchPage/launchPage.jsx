
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Loader from '../../loader/loader';
import LaunchHero from '../../launchHero/launchHero';
import EventsSwiper from '../../eventsSwiper/eventsSwiper';
import LaunchesBlock from '../../launchesBlock/launchesBlock';
import { fetchCurrentLaunch } from '../../../store/api-actions';

const useStyles =  makeStyles(theme => ({
 
}));

function LaunchPage({currentLaunch, isCurrentLaunch, onLoadLaunch}) {
    const launchParam = useParams();
    const classes = useStyles();

    useEffect(() => {
      console.log(launchParam)
      onLoadLaunch(launchParam.id);
      }, [ launchParam.id, onLoadLaunch ]);
    
     
    
  return (
    <div className={classes.page_wrapper}>
        <Header />
        {(!isCurrentLaunch) ? 
          <Loader />
          :
          <>
          <LaunchHero launch={currentLaunch} />

          <Container maxWidth="lg"> 

          </Container>
          </>
        }

        <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
    currentLaunch: state.currentLaunch,
    isCurrentLaunch: state.isCurrentLaunch,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onLoadLaunch(id) {
      dispatch(fetchCurrentLaunch(id));
      
    },
  });
  
  export {LaunchPage};
  export default connect(mapStateToProps, mapDispatchToProps)(LaunchPage);