
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Loader from '../../loader/loader';
import MainHero from '../../mainHero/mainHero';
import EventsSwiper from '../../eventsSwiper/eventsSwiper';
import LaunchesBlock from '../../launchesBlock/launchesBlock';
import { fetchEventsList, fetchLaunchesList } from '../../../store/api-actions';

const useStyles =  makeStyles(theme => ({
  page_wrapper: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100 * var(--vh, 1vh))',
  },
  page_content: {
      padding: '118px 130px 100px',
      marginTop: '-170px',
      maxWidth: '1440px',
      minHeight: '100px', // delete
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#1C2056',
      [theme.breakpoints.down('lg')]: {
        marginTop: '-50px',
        padding: '50px',
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '-20px',
        padding: '20px',
      },
  }
}));

function Main({events, launches, isEventsLoaded, isLaunchesLoaded, onLoadEvents, eventError }) {
    const classes = useStyles();

    useEffect(() => {
        onLoadEvents();
      }, [  onLoadEvents ]);
    
     
    
  return (
    <div className={classes.page_wrapper}>
        <Header isMain={true} />
        <MainHero />

        <Container maxWidth="lg"> 

        
        {(isEventsLoaded && isLaunchesLoaded) ?
          <section  className={classes.page_content} >

            <EventsSwiper events={events}/>

            {isLaunchesLoaded && <LaunchesBlock launches={launches} /> }
          
          </section>
          :
          <Loader /> 
        }

       
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
    onLoadEvents() {
      dispatch(fetchEventsList());
      dispatch(fetchLaunchesList());
    },
  });
  
  export {Main};
  export default connect(mapStateToProps, mapDispatchToProps)(Main);