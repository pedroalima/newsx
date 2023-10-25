import * as M from "@mui/material";

export interface NewsType {
	id: number,
	lead_image: string,
	title: string,
	date: string,
	content: string
}

export const News = ({ news } : { news: NewsType})  => {
	return (
		<>
			{news &&
				<M.Box>
					<M.Typography variant="h6">{news.title}</M.Typography> 
					<M.Typography variant="body1">{news.content}</M.Typography> 
				</M.Box>
			}
		</>
	);
};