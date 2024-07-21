// src/pages/ErrorPage/ErrorPage.tsx
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.css";

interface RouteError {
	statusText?: string;
	message?: string;
}

const ErrorPage: React.FC = () => {
	const error = useRouteError() as RouteError;
	console.error(error);

	return (
		<div className={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message}</i>
			</p>
			<Link to={`/`} className={styles.button}>
				Go to Home
			</Link>
		</div>
	);
};

export default ErrorPage;
