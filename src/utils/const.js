const AppRoute = {
    LAUNCH: '/launch/:id',
    ROCKET: '/rocket/:id',
    EVENT: '/event/:id',
    ROOT: '/',
    PAGE_NOT_FOUND: '/404',
  };

const APIRoute = {
    LAUNCHES: 'launch/upcoming?mode=detailed',
    EVENTS: 'event/upcoming/',
  };  

const launchQnt = 6;  
const MINUTE = 60;
const HOURS = 24;
const SECONDS = 60;



/*const theme = createTheme({
  typography: {
    roboto: {
        fontFamily: "Roboto",
    },
    montserrat: {
        fontFamily: "Montserrat",
    } 
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },
});  */

export {APIRoute, AppRoute, HOURS, launchQnt, MINUTE, SECONDS};
