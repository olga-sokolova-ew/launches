import { createTheme } from "@mui/material/styles";

const breakpoints = {
	values: {
	  xs: 0,
	  sm: 600, // Phone
	  md: 900, // Tablet/Laptop
	  lg: 1200, // Desktop
	  xl: 1536
	}
};

const theme = createTheme({

	breakpoints: {
		values: {
			xs: 0,
			sm: 600, 
			md: 900, 
			lg: 1440, 
			xl: 1536
		},
	},
	typography: {
		roboto: {
			fontFamily: "Roboto",
		},
		montserrat: {
			fontFamily: "Montserrat",
		},
		color: "#F1EBFF",
		h1: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 76,
			fontWeight: 800,
			lineHeight: "92px",
			letterSpacing: 0,
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 60,
				lineHeight: "56px",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 48,
				lineHeight: "52px",
			},
		},
		h2: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 54,
			fontWeight: 800,
			lineHeight: "64px",
			color: "#F1EBFF",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 48,
				lineHeight: "50px",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 38,
				lineHeight: "42px",
			},
		},
		h3: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 26,
			fontWeight: 700,
			lineHeight: "28px",
			color: "#F1EBFF",
			[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
				fontSize: 22,
				lineHeight: "24px",
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: 18,
				lineHeight: "22px",
			},
		},
		h4: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 22,
			fontWeight: 700,
			lineHeight: "28px",
			letterSpacing: "0.0038em",
		},
		h5: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			fontWeight: 700,
			lineHeight: "28px",
			color: "#F1EBFF",
		},
		body: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			fontWeight: 400,
			lineHeight: "28px",
			color: "#F1EBFF",
		},
		caption: {
			fontFamily: "Montserrat, sans-serif",
			fontSize: 18,
			fontWeight: 500,
			fontStyle: "italic",
			lineHeight: "18px",
			color: "#F1EBFF",
		},
    /*body2: {
      fontFamily: "Nunito, sans-serif",
      fontSize: 13,
      lineHeight: "28px",
      letterSpacing: "0.02em",
    },
    */


	},
	palette: {
		primary: {
			main: "#F1EBFF",
			text: "#C0C0C0",
		},
		secondary: {
			main: "#FFFFFF",
		},
		info: {
			main: "#C0C0C0",
		},
		background: {
			default: "#181B48",
		},
		common: {
			white: "#fff",
			black: "#111",
		},
	}, 
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "29px 85px",
					fontWeight: "700",
					fontSize: "20px",
					lineHeight: "20px",
					textDecoration: "none",
					textTransform: "capitalize",
					color: "#F1EBFF",
          
					[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
						fontSize: 18,
						lineHeight: "22px",
						padding: "15px 30px",
					},
				},
				contained: {
					background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
					borderRadius: "50px",
					color: "#F1EBFF",
				}
			}
		}
	}
});

export default theme;
  

  
