import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import NewPage from "./pages/NewPage/NewPage"; // Новый компонент
import SocialMediaButtons from "./pages/SocialMediaButtons/SocialMediaButtons";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "socialMediaButtons",
				element: <SocialMediaButtons />,
			},
			{
				path: "newPage",
				element: <NewPage />, // Новый маршрут
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
