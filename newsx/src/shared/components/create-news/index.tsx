import * as M from "@mui/material";

export const CreateNews = () => {
	return (
		<M.Box>
			<form action="" method="post">
				<M.TextField
					id="outlined-multiline-flexible"
					label="Multiline"
					multiline
					maxRows={4}
				/>
				<M.Button>Confirm</M.Button>
			</form>
		</M.Box>
	);
};