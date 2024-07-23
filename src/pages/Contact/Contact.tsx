import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
	return (
		<div className={styles.container}>
			<h2>Контакты</h2>
			<p>
				Если у вас есть какие-либо вопросы или предложения, пожалуйста, не
				стесняйтесь связаться с нами через следующие каналы:
			</p>
			<ul>
				<li>Email: support@uieffectshub.com</li>
				<li>Телефон: +7 (123) 456-7890</li>
				<li>Адрес: ул. Разработчиков, д. 1, Москва, Россия</li>
			</ul>
		</div>
	);
};

export default Contact;
