import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

interface HeaderProps {
	title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "socialMediaButtons", label: "Social Media Buttons" },
		{ path: "newPage", label: "New Page" },
	];

	return (
		<header className={styles.header}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<nav>
				<ul className={styles.navList}>
					{navLinks.map((link, index) => (
						<li key={index}>
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									isActive ? `${styles.link} ${styles.active}` : styles.link
								}
							>
								{link.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
