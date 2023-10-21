import { createTheme } from "@mui/material";

export const Theme = createTheme({
	palette: {
		primary: {
			light: "#515761",
			main: "#333942",
			dark: "#131921",
			contrastText: "#FFFFFF",
		},
		secondary: {
			light: "#ee9d25",
			main: "#ed8d22",
			dark: "#eb7119",
			contrastText: "#fdf7e2",
		},
		background: {
			default: "#F7F6F3",
			paper: "#FFFFFF",
		}
	}
});