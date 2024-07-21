import React from "react";
import styles from "./withTitlePath.module.css";

export interface WithTitlePathProps {
	title: string;
	path: string;
}

const withTitlePath = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<P & WithTitlePathProps> => {
	return ({ title, path, ...rest }: WithTitlePathProps & P) => (
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
			<Component {...(rest as P)} />
		</div>
	);
};

export default withTitlePath;
