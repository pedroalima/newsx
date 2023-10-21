import * as M from "@mui/material";
import { GridNews } from "../shared/components/grid-news";
import { Navbar } from "../shared/components/navbar";

export const Home = () => {
	const theme = M.useTheme();

	return (
		<>
			<M.Box component="header">
				<Navbar />
			</M.Box>

			<M.Box 
				component="main" 
				paddingX={theme.spacing(8)}
				paddingY={theme.spacing(5)}
				sx={{background: theme.palette.background.default}}
			>
				<GridNews />
			</M.Box>

			<M.Box 
				component="footer"
				paddingX={theme.spacing(8)}
				paddingY={theme.spacing(2)}
				height="15vh"
				sx={{ background: theme.palette.primary.dark}}
			>
				<M.Typography variant="subtitle2" color="secondary">Copyright</M.Typography>
			</M.Box>
		</>
	);
};