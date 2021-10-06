import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import {format} from 'date-fns';
import { ReactComponent as RocketSvg } from '../../img/rocketLogo.svg';
import arrowImage from '../../img/swiper_arrow.svg';


const useStyles = makeStyles({
    swiper__emptyimg: {
        width: '380px',
        height: '264px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3F3881',

        '& svg': {
            width: '154px',
            height: '154px',
            opacity: 0.2,
         },
    },
    swiper__img: {
        marginBottom: '20px',
    },
    swiper__time_block: {
        padding: '10px 30px',
        marginBottom: '15px',
        display: 'inline-flex',
        justifyContent: 'center',
        backgroundColor: '#4A00E0',
        borderRadius: '59px',
    },
    swiper__wrapper: {
        width: '100%',

        '& .swiper-container': {
            paddingTop: '100px',
            marginTop: '-100px',
        },

        '& .swiper-button-next': {
            width: '56px',
            height: '56px',
            top: '10px',
            backgroundImage: `url('${arrowImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '56px 28px',
            backgroundPosition: 'center',

            '&::after': {
                display: 'none',
            }
        },
        '& .swiper-button-prev': {
            width: '56px',
            height: '56px',
            top: '10px',
            right: '102px',
            left: 'auto',
            backgroundImage: `url('${arrowImage}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '56px 28px',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',

            '&::after': {
                display: 'none',
            }
        },
    }
  });
  

function EventsSwiper({events}) {
    const classes = useStyles();
    const url = '#';

  return (
    <div className={classes.swiper__wrapper}>
        <Typography variant="h2" mb='30px'>
            Recent Events
        </Typography>
    
        <Box component='div' className={classes.swiper__wrapper}>
            <Swiper
                
                spaceBetween={20}
                slidesPerView={3}
                navigation={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
             >
                {events.map((event) => 
                    <SwiperSlide  key={event.id}>
                        {(event.eventImg) ? 
                        <img src={event.eventImg} alt={event.eventName} width="380" height="264" className={classes.swiper__img} />
                        :
                        <div className={classes.swiper__emptyimg}>
                            <RocketSvg />
                        </div>}
                        

                        <div className={classes.swiper__time_block}>
                            <Typography variant="caption">
                            <time className="review__date" dateTime={format(new Date(event.eventDate), 'yyyy-MM-dd')}>{format(new Date(event.eventDate), 'MMM. d, yyyy, h:mm aaa')}</time>
                            </Typography>
                        </div>    
                        <Typography variant="h3" mb='50px'>
                        {event.eventName}
                        </Typography>
                </SwiperSlide>
                )}
      
    </Swiper>
    </Box>
   
    
    </div>
  );
}

export default EventsSwiper;