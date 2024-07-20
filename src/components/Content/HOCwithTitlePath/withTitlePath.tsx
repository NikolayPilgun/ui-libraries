import React from "react";

export interface WithTitlePathProps {
	title: string;
	path: string;
}

const withTitlePath = <P extends object>(Component: React.ComponentType<P>) => {
	return ({ title, path, ...rest }: P & WithTitlePathProps) => {
		return (
			<div>
				<h3>{title}</h3>
				<p>{path}</p>
				<Component {...(rest as P)} />
			</div>
		);
	};
};

export default withTitlePath;
