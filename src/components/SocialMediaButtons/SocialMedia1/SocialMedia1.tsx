import React from "react";
import styles from "./SocialMedia1.module.css";

export interface SocialMediaLink1 {
	href: string;
	src: string;
	alt: string;
}

export interface SocialMedia1Props {
	dataSocialMedia1: SocialMediaLink1[];
}

const SocialMedia1: React.FC<SocialMedia1Props> = ({ dataSocialMedia1 }) => {
	return (
		<ul className={styles.social}>
			{dataSocialMedia1.map(({ href, src, alt }) => (
				<li key={alt}>
					<a href={href} target="_blank" rel="noopener noreferrer">
						<img src={src} alt={alt} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialMedia1;
