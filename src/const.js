const AppRoute = {
    LAUNCH: '/launch/:id',
    ROCKET: '/rocket/:id',
    EVENT: '/event/:id',
    ROOT: '/',
  };

const APIRoute = {
    LAUNCHES: 'launch/upcoming?mode=detailed',
    EVENTS: 'event/upcoming/',
  };  

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

  export {APIRoute, AppRoute};
