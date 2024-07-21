import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>UI Components Library</h1>
			</header>
			<main className={styles.main}>
				<p>
					Welcome to the UI Components Library – a collection of beautifully
					styled and versatile UI components developed using React and
					TypeScript. This library is designed for reuse across various
					projects, easing the process of interface creation.
				</p>
			</main>
		</div>
	);
};

export default Home;
