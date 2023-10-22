import { ThemeProvider } from "@mui/material";
import { Theme } from "./shared/theme";
import { Home } from "./pages";

export const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Home />
		</ThemeProvider>
	);
};