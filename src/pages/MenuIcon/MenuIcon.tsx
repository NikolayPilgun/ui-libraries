import React from "react";
import withTitlePath from "../../components/HOCwithTitlePath/withTitlePath";

import MenuIconBurger1 from "../../components/MenuIcon/MenuIconBurger/MenuIconBurger1";
import styles from "./MenuIcon.module.css";

const MenuIcon: React.FC = () => {
	const EnhancedTextEffectGradient1 = withTitlePath(MenuIconBurger1);

	return (
		<main className={styles.container}>
			<article className={styles.card}>
				<EnhancedTextEffectGradient1
					title="Menu Icon Burger (Option 1)"
					path="https://github.com/NikolayPilgun/ui-libraries/tree/main/src/components/TextEffects/TextEffectGradient1"
					description="Иконка меню-бургера с анимацией открытия и закрытия."
				/>
			</article>
		</main>
	);
};

export default MenuIcon;
