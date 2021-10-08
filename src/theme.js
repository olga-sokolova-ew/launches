import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
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
  });

  
