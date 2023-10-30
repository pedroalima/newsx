import * as M from "@mui/material";
import * as S from "./style";
import { FormEvent, useState } from "react";
import axios from "axios";

export const CreateNews = () => {
	const [leadImage, setLeadImage] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [date, setDate] = useState("");

	console.log(leadImage);
	console.log(title);
	console.log(content);
	console.log(date);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await axios.post("http://localhost:4001/news", {
				lead_image: leadImage,
				title: title,
				content: content,
				date: date
			});

			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<M.Box height="60vh">
			<S.Form onSubmit={handleSubmit}>
				<M.TextField 
					name="lead_image" 
					label="Lead image" 
					variant="standard" 
					size="small" 
					value={leadImage} 
					onChange={(e) => setLeadImage(e.target.value)} 
				/>
				<M.TextField 
					name="title" 
					label="Title" 
					variant="standard" 
					size="small" 
					value={title} 
					onChange={(e) => setTitle(e.target.value)} 
				/>
				<M.TextField
					name="content"
					label="Content"
					multiline
					fullWidth
					maxRows={9}
					value={content} 
					onChange={(e) => setContent(e.target.value)} 
				/>
				<S.Input 
					name="date" 
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<M.Button type="submit" color="secondary" variant="contained">Confirm</M.Button>
			</S.Form>
		</M.Box>
	);
};