import type { ElementType } from "react";

export const TechIcon = ({
	component,
	gradientId,
}: {
	component: ElementType;
	gradientId: string;
}) => {
	const Component = component;
	return (
		<Component className="size-10" style={{ fill: `url(#${gradientId})` }} aria-hidden="true" />
	);
};
