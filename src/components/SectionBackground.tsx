import grainImage from "@/assets/images/grain.webp";

export const SectionBackground = () => {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
			style={{
				maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
				WebkitMaskImage:
					"linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
			}}
		>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgb(255 255 255 / 0.08) 0.75px, transparent 0.75px)",
					backgroundSize: "28px 28px",
				}}
			/>
			<div
				className="absolute inset-0 opacity-[0.025]"
				style={{ backgroundImage: `url(${grainImage.src})` }}
			/>
			<div
				className="absolute top-1/2 size-[min(80vw,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
				style={{ left: "var(--section-glow-x, 10%)" }}
			/>
			<div
				className="absolute top-1/2 size-[min(110vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
				style={{ left: "var(--section-glow-x, 10%)" }}
			/>
		</div>
	);
};
