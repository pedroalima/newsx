import * as M from "@mui/material";


export const Navbar = () => {
	return (
		<M.Box sx={{ flexGrow: 1 }}>
			<M.AppBar position="static">
				<M.Toolbar>
					<M.Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>News X</M.Typography>
					{/* <M.Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
					</M.Search> */}
				</M.Toolbar>
			</M.AppBar>
		</M.Box>
	);
};