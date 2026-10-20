import type { PropsWithChildren } from "react";

export const HeroOrbit = ({
	children,
	size,
	rotation,
	shouldOrbit = false,
	shouldSpin = false,
	spinDuration,
	orbitDuration,
}: PropsWithChildren<{
	size: number;
	rotation: number;
	shouldOrbit?: boolean;
	shouldSpin?: boolean;
	spinDuration?: string;
	orbitDuration?: string;
}>) => {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				className={shouldOrbit ? "animate-spin motion-reduce:animate-none" : ""}
				style={{ animationDuration: orbitDuration }}
			>
				<div
					className="flex items-start justify-start"
					style={{
						height: `${size}px`,
						width: `${size}px`,
						transform: `rotate(${rotation}deg)`,
					}}
				>
					<div
						className={shouldSpin ? "animate-spin motion-reduce:animate-none" : ""}
						style={{ animationDuration: spinDuration }}
					>
						<div className="inline-flex" style={{ transform: `rotate(${-rotation}deg)` }}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
