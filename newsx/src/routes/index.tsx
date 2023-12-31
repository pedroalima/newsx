import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { GridNews } from "../shared/components/grid-news";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateNews } from "../shared/components/create-news";
import { News } from "../shared/components/news";
import { EditNews } from "../shared/components/edit-news";

export const AppRoutes = () => {
	const [allNews, setAllNews] = useState([]);
	const [topNews, setTopNews] = useState([]);
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

	const getTopNews = async () => {
		try {
			const res = await axios.get("http://localhost:4001/top-news");
			setTopNews(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllNews();
		getTopNews();
	}, [allNews]);

	return (
		<Routes>
			<Route path="/" element={ <Home /> }>
				<Route path="/" element={ <GridNews allNews={allNews} topNews={topNews} setNews={setNews} /> } />
				<Route path="/news/:id" element={ <News news={news} /> } />
				<Route path="/create-news" element={ <CreateNews /> } />
				<Route path="/edit-news/:id" element={ <EditNews news={news} /> } />
			</Route>

			<Route path="*" element={ <Navigate to="/" />} />
		</Routes>

	);
};