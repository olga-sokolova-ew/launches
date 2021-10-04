export const launchAdapter = (incomingLaunch) =>  {
    const  adaptedLaunch = {
      id: incomingLaunch.id,
      launchName: incomingLaunch.name,
      launchImg: incomingLaunch.img_url,
    };
    return adaptedLaunch;
  
  };