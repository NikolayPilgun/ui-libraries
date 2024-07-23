import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
	return (
		<div className="app-container">
			<Header title="UIEffectsHub" />
			<main className="main-container">
				<Outlet />
			</main>
			<Footer year={2024} />
		</div>
	);
};

export default App;
