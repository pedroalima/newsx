import * as M from "@mui/material";
import * as S from "./style";
import { FormEvent, useRef } from "react";
import axios from "axios";

interface NewsType {
	lead_image: {value: string}
	title: {value: string}
	content: {value: string}
	date: {value: string}

}

export const CreateNews = () => {
	const ref = useRef();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const news: NewsType = ref.current;

		try {
			const res = await axios.post("http://localhost:4001/news", {
				leade_image: news.lead_image.value,
				title: news.title.value,
				content: news.content.value,
				date: news.date.value
			});

			console.log(res.data);
		} catch (error) {
			console.log(error);
		}

		news.lead_image.value = "";
		news.title.value = "";
		news.content.value = "";
		news.date.value = "";

		console.log("Submit");
	};

	return (
		<M.Box height="60vh">
			<S.Form onSubmit={handleSubmit}>
				<M.TextField name="lead_image" label="Lead image" variant="standard" size="small" />
				<M.TextField name="title" label="Title" variant="standard" size="small" />
				<M.TextField
					name="content"
					label="Content"
					multiline
					fullWidth
					maxRows={9}
				/>
				<S.Input name="date" type="date"  />
				<M.Button type="submit" color="secondary" variant="contained">Confirm</M.Button>
			</S.Form>
		</M.Box>
	);
};