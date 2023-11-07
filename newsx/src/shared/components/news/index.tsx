import * as M from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formattedDates } from "../../utils";

export interface NewsType {
	id: number,
	lead_image: string,
	title: string,
	date: string,
	content: string
}

export const News = ({ news } : { news: NewsType})  => {
	const navigate = useNavigate();
	const theme = M.useTheme();

	const deleteNews = async (id: number) => {
		try {
			await axios.delete(`http://localhost:4001/news/${id}`);
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
						Excluir
						</M.Button>

						<M.Button 
							variant="contained"
							onClick={() => navigate(`/edit-news/${news.id}`)}
						>
						Editar
						</M.Button>
					</M.CardActions>
					<M.CardContent>
						<M.Typography variant="h2" textAlign="center">{news.title}</M.Typography>
						<M.Typography variant="body2" padding={theme.spacing(2)} textAlign="end">{!news.date ? news.date : formattedDates(news.date, "medium")}</M.Typography>
						<M.Typography variant="body1" padding={theme.spacing(2)} textAlign="justify">{news.content}</M.Typography>
					</M.CardContent>
				</M.Card>
			}
		</>
	);
};