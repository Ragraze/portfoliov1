"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.webp";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		const handleScroll = () => setIsVisible(window.scrollY > 300);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!isVisible) return null;

	return (
		<motion.button
			type="button"
			aria-label="Scroll to top"
			onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })}
			initial={reduceMotion ? false : { opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
			whileTap={reduceMotion ? undefined : { scale: 0.95 }}
			className="fixed bottom-20 right-4 z-40 inline-flex size-12 items-center justify-center bg-gray-800 rounded-3xl overflow-hidden text-white after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 md:bottom-[5.5rem] md:right-6"
		>
			<span
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 opacity-5"
				style={{ backgroundImage: `url(${grainImage.src})` }}
			/>
			<ArrowDown className="size-5 rotate-180" />
		</motion.button>
	);
};
