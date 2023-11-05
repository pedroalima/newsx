import * as M from "@mui/material";
import * as S from "../create-news/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export interface NewsType {
	id: number,
	lead_image: string,
	title: string,
	date: string,
	content: string
}

export const EditNews = ({ news } : { news: NewsType }) => {
	const navigate = useNavigate();

	const [newsUpdate, setNewsUpdate] = useState({
		lead_image: "",
		title:"",
		content: "",
		date: ""
	});

	const handleChangeValues = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNewsUpdate((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmitEditNews = async (e: FormEvent<HTMLFormElement>, id: number) => {
		e.preventDefault();

		try {
			await axios.put(`http://localhost:4001/news/${id}`, {
				lead_image: newsUpdate.lead_image,
				title: newsUpdate.title,
				content: newsUpdate.content,
				date: newsUpdate.date
			});
		} catch (error) {
			console.log(error);
		}
		navigate("/news");
	};

	return (
		<>
			{news &&
				<M.Card>
					<M.CardContent>
						<S.Form onSubmit={(e) => handleSubmitEditNews(e, news.id)}>
							<M.TextField 
								name="title" 
								label="Title" 
								variant="standard" 
								size="small"
								// value={news.title}
								onChange={handleChangeValues}
							/>
							<M.TextField
								name="content"
								label="Content"
								multiline
								fullWidth
								maxRows={9}
								onChange={handleChangeValues}
							/>
							<S.Input 
								name="date" 
								type="date"
								onChange={handleChangeValues}
							/>
							<M.Button type="submit" color="secondary" variant="contained">Confirm</M.Button>
						</S.Form>
					</M.CardContent>
				</M.Card>
			}
		</>
	);
};