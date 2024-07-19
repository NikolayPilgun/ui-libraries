import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
	year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {year}</p>
		</footer>
	);
};

export default Footer;
