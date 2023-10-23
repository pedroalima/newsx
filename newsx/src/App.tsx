import { ThemeProvider } from "@mui/material";
import { Theme } from "./shared/theme";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};