import React from "react";
import styles from "./withTitlePath.module.css";

export interface WithTitlePathProps {
	title: string;
	path: string;
	description: string;
}

const withTitlePath = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<WithTitlePathProps & Partial<P>> => {
	return ({
		title,
		path,
		description,
		...rest
	}: WithTitlePathProps & Partial<P>) => (
		<div className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			<a
				className={styles.link}
				href={path}
				target="_blank"
				rel="noopener noreferrer"
			>
				View on GitHub
			</a>
			<p className={styles.description}>{description}</p>
			<Component {...(rest as P)} />
		</div>
	);
};

export default withTitlePath;
