import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid, Typography } from '@mui/material';
import LaunchCard from '../launchCard/launchCard';
import Loader from '../loader/loader';
import TextButton from '../button/textBotton';
import { launchQnt } from '../../const';


const useStyles = makeStyles({
   launches__wrapper: {
        width: '100%',
   },
   launches__title: {
     textAlign: 'center',
   }
  });
  

function LaunchesBlock({launches, isShowAll=false}) {
    const classes = useStyles();
    let startShowenLaunchesQnt = (isShowAll) ? launches.lenght : launchQnt;
    const [showenLaunchesQnt, setShowenLaunchesQnt] = useState(startShowenLaunchesQnt);
    console.log('showenLaunchesQnt' + showenLaunchesQnt)
    const url = '#';

    const showMoreHandler = () => {
      setShowenLaunchesQnt(showenLaunchesQnt + launchQnt);
    };

  return (
    
    <div className={classes.launches__wrapper}>
        <Typography variant="h2" mb='30px' className={classes.launches__title}>
           Spaceflight Launches
        </Typography>

        <Grid container spacing={2}>

          {launches.slice(0, showenLaunchesQnt).map(launch => 
            <LaunchCard launch={launch} key={launch.id} /> 
          )}
          {(showenLaunchesQnt !== launches.lenght) && 
          <Box  className={classes.launches__title}>
            <Loader/>
            <TextButton btnText={'Load More'} onBtnClick={showMoreHandler}/>
          </Box >}
        </Grid>
    </div>
  );
}

export default LaunchesBlock;