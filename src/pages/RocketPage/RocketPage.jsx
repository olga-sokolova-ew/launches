
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import MainHero from '../../components/MainHero/MainHero';
import EventsSwiper from '../../components/EventsSwiper/EventsSwiper';
import LaunchesBlock from '../../components/LaunchesBlock/LaunchesBlock';
import { fetchCurrentRocket } from '.././../redux/api-actions';;

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