import * as M from "@mui/material";
import * as S from "./style";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateNews = () => {
	const navigate = useNavigate();

	const [news, setNews] = useState({
		lead_image: "",
		title: "",
		content: "",
		date: ""
	});

	const handleChangeValues = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNews((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:4001/news", {
				lead_image: news.lead_image,
				title: news.title,
				content: news.content,
				date: news.date
			});

		} catch (error) {
			console.log(error);
		}

		navigate("/news");
	};

	return (
		<S.Form onSubmit={handleSubmit}>
			<M.TextField 
				name="lead_image" 
				label="Lead image" 
				variant="standard" 
				size="small" 
				onChange={handleChangeValues} 
			/>
			<M.TextField 
				name="title" 
				label="Title" 
				variant="standard" 
				size="small" 
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
	);
};