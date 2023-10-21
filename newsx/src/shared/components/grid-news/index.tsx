import * as M from "@mui/material";

export const GridNews = () => {
	return (
		<M.Card>
			<M.CardMedia />
			<M.CardContent>
				<M.Typography gutterBottom variant="h5" component="div">Título da notícia</M.Typography>
				<M.Typography gutterBottom variant="h5" component="div">20 de janeiro de 2023</M.Typography>
			</M.CardContent>
		</M.Card>
	);
};