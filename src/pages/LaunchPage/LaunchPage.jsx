
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import LaunchHero from '../../components/LaunchHero/LaunchHero';
import LaunchPageContent from '../../components/LaunchPageContent/LaunchPageContent';
import { fetchCurrentLaunch } from '.././../redux/api-actions';
import { getCurrentLaunch, getCurrentLaunchStatus } from '../../redux/launchData/selectors';


const useStyles = makeStyles(theme => ({
  page_wrapper: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  page_content: {
    position: 'relative',
    padding: '100px 130px 100px',
    marginTop: '-170px',
    maxWidth: '1440px',
    minHeight: '100px', // delete
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1C2056',
    zIndex: 2,
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

function LaunchPage() {
  const launchParam = useParams();
  const classes = useStyles();

  const currentLaunch = useSelector(getCurrentLaunch);
  const isCurrentLaunch = useSelector(getCurrentLaunchStatus);

  const dispatch = useDispatch();

  const onLoadLaunch = (id) => {
    dispatch(fetchCurrentLaunch(id));
  };



  useEffect(() => {
    onLoadLaunch(launchParam?.id);
  }, [launchParam.id]);

  return (
    <div className={classes.page_wrapper}>
      <Header />
      {(!isCurrentLaunch) ?
          <Loader />
          :
          <>
              <LaunchHero launch={currentLaunch} />

              <Container maxWidth="lg">
                  <section className={classes.page_content} >
                      <LaunchPageContent launch={currentLaunch} />
                  </section>
              </Container>
          </>
      }
      <Footer />
    </div>
  );
}

export default LaunchPage;