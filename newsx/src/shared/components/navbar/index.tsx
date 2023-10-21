import * as M from "@mui/material";

export const Navbar = () => {
	const theme = M.useTheme();

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
				</M.Toolbar>
			</M.AppBar>
		</M.Box>
	);
};