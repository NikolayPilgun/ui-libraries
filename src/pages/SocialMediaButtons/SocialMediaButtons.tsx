import React from "react";
import withTitlePath from "../../components/HOCwithTitlePath/withTitlePath";
import SocialMedia1, {
	SocialMedia1Props,
	SocialMediaLink1,
} from "../../components/SocialMediaButtons/SocialMedia1/SocialMedia1";
import styles from "./SocialMediaButtons.module.css";

const dataSocialMedia1: SocialMediaLink1[] = [
	{
		href: "https://vk.com",
		src: "/SocialMedia/vk.png",
		alt: "ВКонтакте",
	},
	{
		href: "https://web.telegram.org",
		src: "/SocialMedia/Telegram.png",
		alt: "Telegram",
	},
	{
		href: "https://www.youtube.com",
		src: "/SocialMedia/youtube.png",
		alt: "YouTube",
	},
];

const SocialMediaButtons: React.FC = () => {
	const EnhancedSocialMedia1 = withTitlePath<SocialMedia1Props>(SocialMedia1);

	return (
		<main className={styles.container}>
			<EnhancedSocialMedia1
				title="Social Media Links (Option 1)"
				path="https://github.com/NikolayPilgun/ui-libraries/tree/main/src/components/SocialMediaButtons/SocialMedia1"
				description="Иконки социальных сетей в круглом оформлении изменяют размер и цвет фона при наведении курсора."
				dataSocialMedia1={dataSocialMedia1}
			/>
		</main>
	);
};

export default SocialMediaButtons;
