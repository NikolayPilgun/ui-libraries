// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const navLinks = [
		{ path: "about", label: "О нас" },
		{ path: "contact", label: "Контакты" },
		{ path: "privacy", label: "Политика конфиденциальности" },
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<nav className={styles.nav}>
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
				<div className={styles.info}>
					<p>UIEffectsHub - Ваш источник визуальных эффектов для UI.</p>
					<p>Все права защищены &copy; {currentYear}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
