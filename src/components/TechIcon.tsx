"use client";

import { useId } from "react";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
	const Component = component;
	const gradientId = useId();
	return (
		<>
			<Component className="size-10" style={{ fill: `url(#${gradientId})` }} aria-hidden="true" />
			<svg className="size-0 absolute" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient id={gradientId}>
						<stop offset="0%" stopColor="rgb(110 231 183)" />
						<stop offset="100%" stopColor="rgb(56 189 248)" />
					</linearGradient>
				</defs>
			</svg>
		</>
	);
};
