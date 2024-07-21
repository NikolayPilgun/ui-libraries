import React from "react";
import styles from "./NewPage.module.css";

const NewPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<h1>New Component Page</h1>
			<p>This page is a new addition to the app.</p>
		</div>
	);
};

export default NewPage;
