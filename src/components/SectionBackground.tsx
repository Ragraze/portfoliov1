"use client";

import grainImage from "@/assets/images/grain.avif";
import aboutBackground from "@/assets/images/about-background.svg?url";
import experiencesBackground from "@/assets/images/experiences-background.svg?url";
import projectsBackground from "@/assets/images/projects-background.svg?url";
import certificatesBackground from "@/assets/images/certificates-background.svg?url";
import curriculumVitaeBackground from "@/assets/images/curriculum-vitae-background.svg?url";
import { useEffect, useRef, type CSSProperties } from "react";

const dotWaves = {
	about: aboutBackground,
	experiences: experiencesBackground,
	projects: projectsBackground,
	certificates: certificatesBackground,
	curriculumVitae: curriculumVitaeBackground,
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
		const animations: (Animation | undefined)[] = [];
		let lastPointer = { x: 0, y: 0, time: 0 };
		const pointerPreference = window.matchMedia("(hover: hover) and (pointer: fine)");
		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const stopRipples = () => {
			animations.forEach((animation) => {
				animation?.cancel();
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
			const bounds = background.getBoundingClientRect();
			animations[reactionIndex]?.cancel();
			const x = event.clientX - bounds.left;
			const y = event.clientY - bounds.top;
			// Align the reaction tile with the existing dot grid.
			const left = Math.floor((x - 252) / 28) * 28;
			const top = Math.floor((y - 252) / 28) * 28;
			reaction.style.left = `${left}px`;
			reaction.style.top = `${top}px`;
			const center = `${x - left}px ${y - top}px`;
			animations[reactionIndex] = reaction.animate(
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
					backgroundImage: `url("${dotWaves[variant].src}")`,
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
