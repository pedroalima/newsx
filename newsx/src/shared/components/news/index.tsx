import * as M from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface NewsType {
	id: number,
	lead_image: string,
	title: string,
	date: string,
	content: string
}

export const News = ({ news } : { news: NewsType})  => {
	const navigate = useNavigate();

	const deleteNews = async (id: number) => {
		try {
			const res = await axios.delete(`http://localhost:4001/news/${id}`);

			console.log(res.data);
		} catch (error) {
			console.log(error);
		}

		navigate("/news");
	};

	return (
		<>
			{news &&
				<M.Card>
					<M.CardActions sx={{ justifyContent: "flex-end"}}>
						<M.Button 
							variant="contained" 
							color="error"
							onClick={() => deleteNews(news.id)}
						>
							Delete
						</M.Button>

						<M.Button variant="contained">Edit</M.Button>
					</M.CardActions>
					<M.CardContent>
						<M.Typography variant="h3">{news.title}</M.Typography>
						<M.Typography variant="body1">{news.content}</M.Typography>  
					</M.CardContent>
				</M.Card>
			}
		</>
	);
};