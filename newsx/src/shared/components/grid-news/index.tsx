import * as M from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewsType } from "../news";
import { formattedDates } from "../../utils";

type AllNewsType = {
	id: number,
	lead_image: string,
	title: string,
	date: string
}

export const GridNews = ({ allNews, setNews } : {allNews: AllNewsType[], setNews: (data: NewsType) => void})  => {
	const navigate = useNavigate();
	const theme = M.useTheme();

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
		<M.Card >
			<M.CardContent>
				<M.Typography variant="h4">Editorial</M.Typography>
			</M.CardContent>

			{allNews && allNews.map(news => (
				<M.Box key={news.id} paddingX={theme.spacing(4)} paddingY={theme.spacing(1)}>
					<M.Link 
						component="button"
						underline="none"
						onClick={() => goToNews(news.id)}
					>
						<M.Typography gutterBottom variant="h5" component="h4">{news.title}</M.Typography>
					</M.Link>
					<M.Typography gutterBottom variant="body2" component="p">{formattedDates(news.date, "full")}</M.Typography>
				</M.Box>
			))}
		</M.Card>
	);
};