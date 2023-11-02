import * as M from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewsType } from "../news";

type AllNewsType = {
	id: number,
	lead_image: string,
	title: string,
	date: string
}

export const GridNews = ({ allNews, setNews } : {allNews: AllNewsType[], setNews: (data: NewsType) => void})  => {
	const navigate = useNavigate();

	const getNews = async (id: number) => {
		try {
			const response = await axios.get(`http://localhost:4001/news/${id}`);
			const data = response.data;

			setNews(data);
		} catch (error) {
			console.log(error);
		}
	};

	const goToNews = (id: number) => {
		getNews(id);
		navigate(`news/${id}`);
	};

	return (
		<>
			{allNews && allNews.map(news => (
				<M.Button key={news.id} onClick={() => goToNews(news.id)}>
					<M.Card>
						<M.CardMedia image={news.lead_image} />
						<M.CardContent>
							<M.Typography gutterBottom variant="h5" component="div">{news.title}</M.Typography>
							<M.Typography gutterBottom variant="h5" component="div">{news.date}</M.Typography>
						</M.CardContent>
					</M.Card>
				</M.Button>
			))}
		</>
	);
};