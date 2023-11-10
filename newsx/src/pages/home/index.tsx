import * as M from "@mui/material";
import { Navbar } from "../../shared/components/navbar";
import { Outlet, useNavigate } from "react-router-dom";

export const Home = () => {
	const theme = M.useTheme();
	const navigate = useNavigate();

	const handleGoToCreateNews = () => {
		navigate("/create-news");
	};

	return (
		<>
			<M.Box component="header">
				<Navbar />
			</M.Box>

			<M.Box 
				component="main" 
				paddingX={theme.spacing(8)}
				paddingY={theme.spacing(5)}
				minHeight="80vh"
			>
				<Outlet />
				<M.SpeedDial
					ariaLabel="SpeedDial openIcon example"
					sx={{ position: "absolute", bottom: 16, right: 16 }}
					icon={<M.SpeedDialIcon />}
					onClick={(handleGoToCreateNews)}
				>
				
				</M.SpeedDial>
			</M.Box>

			<M.Box 
				component="footer"
				paddingX={theme.spacing(8)}
				paddingTop={theme.spacing(8)}
				display="flex"
				justifyContent="center"
				height="5vh"
				sx={{ background: theme.palette.primary.dark}}
			>
				<M.Typography variant="subtitle2" color="secondary">© 2023 - Pedro Lima</M.Typography>
			</M.Box>
		</>
	);
};