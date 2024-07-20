import React from "react";
import withTitlePath from "../HOCwithTitlePath/withTitlePath";
import styles from "./SocialMediaButtons.module.css";
import SocialMedia1, {
	SocialMediaLink1,
} from "./SocialMediaOption_1/SocialMedia1";

interface SocialMediaButtonsProps {
	title: string;
}

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

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({ title }) => {
	const EnhancedSocialMedia1 = withTitlePath(SocialMedia1);

	return (
		<div className={styles.card}>
			<h2>{title}</h2>
			<EnhancedSocialMedia1
				title="Social Media Links (Option 1)"
				path="/components/Content/SocialMediaButtons/SocialMediaOption_1/"
				dataSocialMedia1={dataSocialMedia1}
			/>
		</div>
	);
};

export default SocialMediaButtons;
