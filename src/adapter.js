export const launchAdapter = (incomingLaunch) =>  {
    const  adaptedLaunch = {
      id: incomingLaunch.id,
      launchName: incomingLaunch.name,
      launchImg: incomingLaunch.img_url,
      launchDate: incomingLaunch.net,
      rocketId: incomingLaunch.rocket.configuration.id,
      
    };
    return adaptedLaunch;
  
};

export const eventAdapter = (incomingEvent) =>  {
    const  adaptedEvent = {
      id: incomingEvent.id,
      eventName: incomingEvent.name,
      eventImg: incomingEvent.feature_image,
      eventDate: incomingEvent.date,
    };
    return adaptedEvent;
  
};

export const rocketAdapter = (incomingRocket) =>  {
  const  adaptedRocket = {
    id: incomingRocket.id,
    eventName: incomingRocket.name,
    eventImg: incomingRocket.feature_image,
  };
  return adaptedRocket;
};

export const currentLaunchAdapter = (incomingCurrentLaunch) =>  {
  console.log(incomingCurrentLaunch)
  const  adaptedLaunch = {
    id: incomingCurrentLaunch.id,
    launchName: incomingCurrentLaunch.name,
    launchImg: incomingCurrentLaunch.image_url,
    /*video: incomingCurrentLaunch.vidURLs, 
    launchDescription: incomingCurrentLaunch.launcher_stage.launcher.details,

    roketName: incomingCurrentLaunch.rocket.name,
    destination: incomingCurrentLaunch.rocket.spacecraft_stage.destination,
    mission: incomingCurrentLaunch.rocket.mission,*/

    launchDate: incomingCurrentLaunch.net,
  };
  return adaptedLaunch;

};