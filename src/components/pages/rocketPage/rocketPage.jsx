
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Loader from '../../loader/loader';
import MainHero from '../../mainHero/mainHero';
import EventsSwiper from '../../eventsSwiper/eventsSwiper';
import LaunchesBlock from '../../launchesBlock/launchesBlock';
import { fetchCurrentRocket } from '../../../store/api-actions';

const useStyles =  makeStyles(theme => ({
 
}));

function RockedPage({ onLoadRocket}) {
    const rocketParam = useParams();
    const classes = useStyles();

    useEffect(() => {
        onLoadRocket(rocketParam.id);
      }, [ rocketParam.id, onLoadRocket ]);
    
     
    
  return (
    <div className={classes.page_wrapper}>
        <Header />
        <MainHero />

        <Container maxWidth="lg"> 
       
        </Container>
        <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
    events: state.events,
    launches: state.launches,
    isEventsLoaded: state.isEventsLoaded,
    isLaunchesLoaded: state.isLaunchesLoaded,
    eventError: state.eventError,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onLoadRocket(id) {
      dispatch(fetchCurrentRocket(id));
      
    },
  });
  
  export {RockedPage};
  export default connect(mapStateToProps, mapDispatchToProps)(RockedPage);