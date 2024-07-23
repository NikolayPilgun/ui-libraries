import React, { useState } from "react";
import styles from "./MenuIconBurger1.module.css";

const MenuIconBurger1: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container} onClick={handleClick}>
			<div className={`${styles.menu}`} id="menu">
				<div className={isOpen ? styles.open : ""}>
					<span className={`${styles.line} ${styles.line1}`}></span>
					<span className={`${styles.line} ${styles.line2}`}></span>
					<span className={`${styles.line} ${styles.line3}`}></span>
				</div>
			</div>
		</div>
	);
};

export default MenuIconBurger1;
