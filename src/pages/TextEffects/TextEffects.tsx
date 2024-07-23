import React from "react";
import withTitlePath from "../../components/HOCwithTitlePath/withTitlePath";
import TextEffectGradient1, {
	ITextEffectGradient1,
} from "../../components/TextEffects/TextEffectGradient1/TextEffectGradient1";
import styles from "./TextEffects.module.css";

const HELLO_WORLD_TEXT = "Hello World";

const TextEffects: React.FC = () => {
	const EnhancedTextEffectGradient1 =
		withTitlePath<ITextEffectGradient1>(TextEffectGradient1);

	return (
		<main className={styles.container}>
			<article className={styles.card}>
				<EnhancedTextEffectGradient1
					title="TextEffectGradient (Option 1)"
					path="https://github.com/NikolayPilgun/ui-libraries/tree/main/src/components/SocialMediaButtons/SocialMedia1"
					description="Текст с градиентной заливкой через фон и прозрачностью."
					text={HELLO_WORLD_TEXT}
				/>
			</article>
		</main>
	);
};

export default TextEffects;
