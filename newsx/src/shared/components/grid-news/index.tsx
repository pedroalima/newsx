import * as M from "@mui/material";

type AllNewsType = {
	id: number,
	lead_image: string,
	title: string,
	date: string
}

export const GridNews = ({ allNews } : {allNews: AllNewsType[]})  => {
	return (
		<>
			{allNews && allNews.map(news => (
				<M.Card key={news.id}>
					<M.CardMedia image={news.lead_image} />
					<M.CardContent>
						<M.Typography gutterBottom variant="h5" component="div">{news.title}</M.Typography>
						<M.Typography gutterBottom variant="h5" component="div">{news.date}</M.Typography>
					</M.CardContent>
				</M.Card>
			))}
		</>
	);
};