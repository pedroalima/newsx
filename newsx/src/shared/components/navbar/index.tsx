import * as M from "@mui/material";
import { Home, PostAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const theme = M.useTheme();
	const navigate = useNavigate();

	const handleGoToHome = () => {
		navigate("/");
	};

	const handleGoToCreateNews = () => {
		navigate("/create-news");
	};

	return (
		<M.Box sx={{ flexGrow: 1 }}>
			<M.AppBar position="static" sx={{ paddingX: theme.spacing(8), paddingY: theme.spacing(1) }}>
				<M.Toolbar sx={{ display: "flex", justifyContent: "end", }}>
					<M.Typography
						variant="h5"
						noWrap
						component="div"
						marginX="auto"
					>
						News X
					</M.Typography>
					<M.BottomNavigation sx={{ background: "none"}}>
						<M.BottomNavigationAction
							sx={{color: "#FFFFFF"}}
							icon={<Home />}
							onClick={handleGoToHome}
						/>
						<M.BottomNavigationAction
							sx={{color: "#FFFFFF"}}
							icon={<PostAdd />}
							onClick={handleGoToCreateNews}
						/>
					</M.BottomNavigation>
				</M.Toolbar>
			</M.AppBar>
		</M.Box>
	);
};