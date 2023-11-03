import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { GridNews } from "../shared/components/grid-news";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateNews } from "../shared/components/create-news";
import { News } from "../shared/components/news";

export const AppRoutes = () => {
	const [allNews, setAllNews] = useState([]);
	const [news, setNews] = useState({
		id: 0,
		lead_image: "",
		title: "",
		date: "",
		content: ""
	});
	
	const getAllNews = async () => {
		try {
			const res = await axios.get("http://localhost:4001/news");
			setAllNews(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllNews();
	}, [allNews]);

	return (
		<Routes>
			<Route path="/" element={ <Home /> }>
				<Route path="/" element={ <GridNews allNews={allNews} setNews={setNews} /> } />
				<Route path="/news/:id" element={ <News news={news} /> } />
				<Route path="/create-news" element={ <CreateNews /> } />
			</Route>

			<Route path="*" element={ <Navigate to="/" />} />
		</Routes>

	);
};