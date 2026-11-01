import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment, useId, type ElementType } from "react";

export const ToolboxItems = ({
	items,
	className,
	itemsWrapperClassName,
}: {
	items: Array<{
		title: string;
		iconType: ElementType;
	}>;
	className?: string;
	itemsWrapperClassName?: string;
}) => {
	const gradientId = useId();
	return (
		<div
			className={twMerge(
				"flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				className,
			)}
		>
			<svg className="size-0 absolute" aria-hidden="true" focusable="false">
				<defs>
					<linearGradient id={gradientId}>
						<stop offset="0%" stopColor="rgb(110 231 183)" />
						<stop offset="100%" stopColor="rgb(56 189 248)" />
					</linearGradient>
				</defs>
			</svg>
			<div
				className={twMerge(
					"flex flex-none py-0.5 gap-6 pr-6 motion-reduce:animate-none",
					itemsWrapperClassName,
				)}
			>
				{["first", "second"].map((copy) => (
					<Fragment key={copy}>
						{items.map((item) => (
							<div
								key={item.title}
								className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
							>
								<TechIcon component={item.iconType} gradientId={gradientId} />
								<span className="font-semibold">{item.title}</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
};
