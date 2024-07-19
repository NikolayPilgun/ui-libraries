import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
	return (
		<div className="app-container">
			<Header title="UI Компоненты Библиотеки" />
			<Content />
			<Footer year={2024} />
		</div>
	);
};

export default App;
