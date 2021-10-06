
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Loader from '../../loader/loader';
import MainHero from '../../mainHero/mainHero';
import EventsSwiper from '../../eventsSwiper/eventsSwiper'
import { fetchEventsList } from '../../../store/api-actions';

const useStyles = makeStyles({
    page_content: {
        padding: '118px 130px 100px',
        marginTop: '-170px',
        maxWidth: '1440px',
        minHeight: '100px', // delete
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#1C2056',
    }
});

function Main({events, isEventsLoaded, isLaunchesLoaded, onLoadEvents}) {
    const classes = useStyles();

    useEffect(() => {
        onLoadEvents();
      }, [  onLoadEvents ]);
    
     
    
  return (
    <>
        <Header />
        <MainHero />

        <Container maxWidth="lg"> 

        
        {(isEventsLoaded && isLaunchesLoaded) && <section  className={classes.page_content} >

         <EventsSwiper events={events}/>
        </section>}

       
        </Container>
        <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
    events: state.events,
    isEventsLoaded: state.isEventsLoaded,
    isLaunchesLoaded: state.isLaunchesLoaded,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onLoadEvents() {
      dispatch(fetchEventsList());
    },
  });
  
  export {Main};
  export default connect(mapStateToProps, mapDispatchToProps)(Main);