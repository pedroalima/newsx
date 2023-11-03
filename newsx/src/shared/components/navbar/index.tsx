import * as M from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const theme = M.useTheme();
	const navigate = useNavigate();

	const handleGoToHome = () => {
		navigate("/");
	};

	return (
		<M.Box sx={{ flexGrow: 1 }}>
			<M.AppBar position="static" sx={{ paddingX: theme.spacing(8), paddingY: theme.spacing(1) }}>
				<M.Toolbar>
					<M.Typography
						variant="h5"
						noWrap
						component="div"
						sx={{ flexGrow: 1 }}
					>News X</M.Typography>
					<M.BottomNavigation sx={{ background: "none"}}>
						<M.BottomNavigationAction
							sx={{color: "#FFFFFF"}}
							label="Home"
							value="Home"
							icon={<Home />}
							onClick={handleGoToHome}
						/>
					</M.BottomNavigation>
				</M.Toolbar>
			</M.AppBar>
		</M.Box>
	);
};