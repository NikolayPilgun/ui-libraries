import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import SocialMediaButtons from "./pages/SocialMediaButtons/SocialMediaButtons";
import TextEffects from "./pages/TextEffects/TextEffects";

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
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "privacy",
				element: <Privacy />,
			},
			{
				path: "textEffects",
				element: <TextEffects />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
