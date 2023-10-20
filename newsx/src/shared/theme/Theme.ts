import { createTheme } from "@mui/material";

export const Theme = createTheme({
	palette: {
		primary: {
			light: "#ee9d25",
			main: "#ed8d22",
			dark: "#eb7119",
			contrastText: "#fdf7e2",
		},
		secondary: {
			light: "#646b75",
			main: "#515761",
			dark: "#333942",
			contrastText: "#f2f9ff",
		},
		background: {
			default: "#FFFFFF",
			paper: "#F7F6F3",
		}
	}
});