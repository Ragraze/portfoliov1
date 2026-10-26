"use client";

import StarIcon from "@/assets/icons/star.svg";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const trailSlots = Array.from({ length: 12 }, (_, id) => id);
const spring = { stiffness: 300, damping: 28, mass: 0.5 };

export const StarCursor = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const trailRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const circleX = useSpring(x, spring);
	const circleY = useSpring(y, spring);

	useEffect(() => {
		const media = window.matchMedia(
			"(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
		);
		let visible = false;
		let trailIndex = 0;
		let lastTrail = { x: 0, y: 0, time: 0 };

		const hide = () => {
			visible = false;
			setIsVisible(false);
			document.documentElement.removeAttribute("data-star-cursor");
			trailRefs.current.forEach((trail) => {
				trail?.getAnimations().forEach((animation) => {
					animation.cancel();
				});
			});
		};

		const handleMove = (event: PointerEvent) => {
			if (!media.matches || event.pointerType !== "mouse") {
				hide();
				return;
			}

			x.set(event.clientX);
			y.set(event.clientY);
			const now = performance.now();

			if (!visible) {
				circleX.jump(event.clientX);
				circleY.jump(event.clientY);
				lastTrail = { x: event.clientX, y: event.clientY, time: now };
				visible = true;
				setIsVisible(true);
				document.documentElement.setAttribute("data-star-cursor", "");
			}

			setIsHovering(
				event.target instanceof Element &&
					Boolean(event.target.closest("a, button, [role='button']")),
			);

			if (
				now - lastTrail.time < 40 ||
				Math.hypot(event.clientX - lastTrail.x, event.clientY - lastTrail.y) < 12
			) {
				return;
			}

			const trail = trailRefs.current[trailIndex];
			if (trail) {
				trail.getAnimations().forEach((animation) => {
					animation.cancel();
				});
				trail.style.left = `${event.clientX}px`;
				trail.style.top = `${event.clientY}px`;
				trail.animate(
					[
						{ opacity: 0.6, transform: "translate(-50%, -50%) rotate(0deg) scale(1)" },
						{ opacity: 0, transform: "translate(-50%, -50%) rotate(60deg) scale(0)" },
					],
					{ duration: 450, easing: "ease-out" },
				);
			}
			trailIndex = (trailIndex + 1) % trailSlots.length;
			lastTrail = { x: event.clientX, y: event.clientY, time: now };
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Tab") hide();
		};
		const handleMediaChange = () => {
			if (!media.matches) hide();
		};

		window.addEventListener("pointermove", handleMove, { passive: true });
		window.addEventListener("blur", hide);
		window.addEventListener("keydown", handleKeyDown);
		document.addEventListener("pointerleave", hide);
		document.addEventListener("visibilitychange", hide);
		media.addEventListener("change", handleMediaChange);

		return () => {
			window.removeEventListener("pointermove", handleMove);
			window.removeEventListener("blur", hide);
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("pointerleave", hide);
			document.removeEventListener("visibilitychange", hide);
			media.removeEventListener("change", handleMediaChange);
			hide();
		};
	}, [x, y, circleX, circleY]);

	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
			style={{ visibility: isVisible ? "visible" : "hidden" }}
		>
			{trailSlots.map((id) => (
				<span
					key={id}
					ref={(element) => {
						trailRefs.current[id] = element;
					}}
					className={`absolute size-3 opacity-0 ${id % 2 === 0 ? "text-emerald-300" : "text-sky-400"}`}
				>
					<StarIcon className="size-full" />
				</span>
			))}
			<motion.div
				className="absolute left-0 top-0 -ml-5 -mt-5 size-10 rounded-full border border-emerald-300/60"
				style={{ x: circleX, y: circleY }}
				animate={{ scale: isHovering ? 1.4 : 1 }}
				transition={{ type: "spring", stiffness: 300, damping: 24 }}
			/>
			<motion.div
				className="absolute left-0 top-0 -ml-2.5 -mt-2.5 size-5 text-emerald-300 drop-shadow-[0_1px_2px_rgb(0_0_0/0.6)]"
				style={{ x, y }}
			>
				<StarIcon className="size-full" />
			</motion.div>
		</div>
	);
};
