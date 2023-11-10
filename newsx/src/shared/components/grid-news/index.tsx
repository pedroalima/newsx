import * as M from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewsType } from "../news";
import { formattedDates } from "../../utils";

type AllNewsType = {
	id: number,
	lead_image: string,
	title: string,
	content: string,
	date: string
}

export const GridNews = ({ allNews, topNews, setNews } : {allNews: AllNewsType[], topNews: AllNewsType[], setNews: (data: NewsType) => void})  => {
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
		<M.Box>
			<M.Box 
				display="flex" 
				flexDirection="row"
				flexWrap="wrap"
				alignItems="stretch" 
				justifyContent="space-between"
				gap={theme.spacing(2)}
				borderBottom="2px dotted #a9a9a9"
				paddingBottom={theme.spacing(4)}
				marginBottom={theme.spacing(2)}
			>
				{topNews && topNews.map(news => (
					<M.Box key={news.id} sx={{ paddingX: theme.spacing(4), paddingY: theme.spacing(1), width: "40%" , flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #dadada"}}>
						<M.Link 
							component="button"
							underline="none"
							onClick={() => goToNews(news.id)}
						>
							<M.Typography gutterBottom variant="h5" fontWeight="bold" component="h4">{news.title}</M.Typography>
						</M.Link>
						<M.Typography gutterBottom variant="body2" color="#9d9d9d" component="p">{formattedDates(news.date, "full")}</M.Typography>
					</M.Box>
				))}
			</M.Box>

			{allNews && allNews.map(news => (
				<M.Box 
					key={news.id} 
					borderBottom="1px solid #dadada" 
					paddingX={theme.spacing(4)} 
					paddingY={theme.spacing(1)}
				>
					<M.Link 
						component="button"
						underline="none"
						onClick={() => goToNews(news.id)}
					>
						<M.Typography gutterBottom variant="h5" component="h4">{news.title}</M.Typography>
					</M.Link>
					<M.Typography gutterBottom variant="body2" color="secondary" component="p">{formattedDates(news.date, "full")}</M.Typography>
				</M.Box>
			))}
		</M.Box>
	);
};