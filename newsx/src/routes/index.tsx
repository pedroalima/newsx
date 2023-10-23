import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={ <Home /> } />

			<Route path="*" element={ <Navigate to="/" />} />
		</Routes>

	);
};