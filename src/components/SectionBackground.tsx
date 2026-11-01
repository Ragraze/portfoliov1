"use client";

import grainImage from "@/assets/images/grain.webp";
import { useEffect, useRef, type CSSProperties } from "react";

const createDotWave = (wave: (x: number, y: number) => number) => {
	const dots = Array.from({ length: 600 }, (_, index) => {
		const column = index % 30;
		const row = Math.floor(index / 30);
		const strength = ((wave((column / 30) * Math.PI * 2, (row / 20) * Math.PI * 2) + 1) / 2) ** 2;
		return `<circle cx="${column * 28 + 14}" cy="${row * 28 + 14}" r="${(0.35 + strength * 1.15).toFixed(2)}"/>`;
	}).join("");
	return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="840" height="560" viewBox="0 0 840 560"><g fill="white" opacity="0.12">${dots}</g></svg>`)}")`;
};

const dotWaves = {
	about: createDotWave((x, y) => Math.sin(x + Math.sin(y))),
	experiences: createDotWave((x, y) => Math.sin(y + Math.sin(x * 2) * 0.6)),
	projects: createDotWave((x, y) => Math.sin(x + y + Math.sin(x - y) * 0.8)),
	certificates: createDotWave((x, y) => Math.cos(Math.hypot(Math.sin(x / 2), Math.sin(y / 2)) * 8)),
};

export const SectionBackground = ({ variant }: { variant: keyof typeof dotWaves }) => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const reactionRefs = useRef<(HTMLDivElement | null)[]>([]);
	useEffect(() => {
		const background = backgroundRef.current;
		const section = background?.parentElement;
		if (!background || !section) return;
		let isInView = false;
		let reactionIndex = 0;
		let lastPointer = { x: 0, y: 0, time: 0 };
		const pointerPreference = window.matchMedia("(hover: hover) and (pointer: fine)");
		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const stopRipples = () => {
			reactionRefs.current.forEach((reaction) => {
				reaction?.getAnimations().forEach((animation) => {
					animation.cancel();
				});
			});
		};
		const update = () => {
			background.dataset.active = String(isInView && !document.hidden);
			if (!isInView || document.hidden) stopRipples();
		};
		const handlePointerMove = (event: PointerEvent) => {
			if (
				!isInView ||
				document.hidden ||
				!pointerPreference.matches ||
				motionPreference.matches ||
				event.pointerType !== "mouse"
			)
				return;
			const now = performance.now();
			if (
				now - lastPointer.time < 100 ||
				Math.hypot(event.clientX - lastPointer.x, event.clientY - lastPointer.y) < 18
			)
				return;
			const reaction = reactionRefs.current[reactionIndex];
			if (!reaction) return;
			reaction.getAnimations().forEach((animation) => {
				animation.cancel();
			});
			const bounds = background.getBoundingClientRect();
			const x = event.clientX - bounds.left;
			const y = event.clientY - bounds.top;
			// Align the reaction tile with the existing dot grid.
			const left = Math.floor((x - 252) / 28) * 28;
			const top = Math.floor((y - 252) / 28) * 28;
			reaction.style.left = `${left}px`;
			reaction.style.top = `${top}px`;
			const center = `${x - left}px ${y - top}px`;
			reaction.animate(
				[
					{ clipPath: `circle(0px at ${center})`, opacity: 0 },
					{ clipPath: `circle(90px at ${center})`, opacity: 0.8, offset: 0.2 },
					{ clipPath: `circle(240px at ${center})`, opacity: 0 },
				],
				{ duration: 1000, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
			);
			reactionIndex = (reactionIndex + 1) % 3;
			lastPointer = { x: event.clientX, y: event.clientY, time: now };
		};
		const observer = new IntersectionObserver(
			([entry]) => {
				isInView = entry.isIntersecting;
				update();
			},
			{ rootMargin: "100px" },
		);
		observer.observe(background);
		section.addEventListener("pointermove", handlePointerMove, { passive: true });
		section.addEventListener("pointerleave", stopRipples);
		pointerPreference.addEventListener("change", stopRipples);
		motionPreference.addEventListener("change", stopRipples);
		document.addEventListener("visibilitychange", update);
		return () => {
			observer.disconnect();
			section.removeEventListener("pointermove", handlePointerMove);
			section.removeEventListener("pointerleave", stopRipples);
			pointerPreference.removeEventListener("change", stopRipples);
			motionPreference.removeEventListener("change", stopRipples);
			document.removeEventListener("visibilitychange", update);
			stopRipples();
		};
	}, []);

	return (
		<div
			ref={backgroundRef}
			data-active="false"
			aria-hidden="true"
			className="section-background pointer-events-none absolute inset-0 -z-10 overflow-hidden"
			style={{
				maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
				WebkitMaskImage:
					"linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
			}}
		>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: dotWaves[variant],
					backgroundSize: "840px 560px",
				}}
			/>
			{[0, 1, 2].map((reaction) => (
				<div
					key={reaction}
					ref={(element) => {
						reactionRefs.current[reaction] = element;
					}}
					className="section-dot-reaction"
				/>
			))}
			<div
				className="absolute inset-0 opacity-[0.025]"
				style={{ backgroundImage: `url(${grainImage.src})` }}
			/>
			<div className="section-rings">
				{[0, 1, 2].map((ring) => (
					<div
						key={ring}
						className="section-ring"
						style={{ "--ring-index": ring } as CSSProperties}
					/>
				))}
			</div>
		</div>
	);
};
