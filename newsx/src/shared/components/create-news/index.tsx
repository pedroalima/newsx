import * as M from "@mui/material";

export const CreateNews = () => {
	return (
		<M.Box>
			<M.TextField
				id="outlined-multiline-flexible"
				label="Multiline"
				multiline
				maxRows={4}
			/>
		</M.Box>
	);
};