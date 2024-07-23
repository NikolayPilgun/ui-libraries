import React from "react";
import styles from "./TextEffectGradient1.module.css";

export interface ITextEffectGradient1 {
	text: string;
}

const TextEffectGradient1: React.FC<ITextEffectGradient1> = ({ text }) => {
	return <h2 className={styles.text}>{text}</h2>;
};

export default TextEffectGradient1;
