import React from "react";
import styles from "./Content.module.css";
import SocialMediaButtons from "./SocialMediaButtons/SocialMediaButtons";

const Content: React.FC = () => {
	return (
		<main className={styles.content}>
			<SocialMediaButtons title="Кнопки социальных сетей" />
		</main>
	);
};

export default Content;
