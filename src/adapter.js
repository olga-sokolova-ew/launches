export const launchAdapter = (incomingLaunch) =>  {
    const  adaptedLaunch = {
      id: incomingLaunch.id,
      launchName: incomingLaunch.name,
      launchImg: incomingLaunch.img_url,
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