"use client";

import memojiImage from "@/assets/images/memoji-computer.webp";
import Image from "next/image";
import { ArrowDownIcon as ArrowDown } from "@heroicons/react/24/outline";
import grainImage from "@/assets/images/grain.webp";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { useRef, useState } from "react";
import { m as motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Typewriter } from "@/components/Typewriter";

export const HeroSection = () => {
	const { language, t } = useLanguage();
	const reduceMotion = useReducedMotion();
	const [connectHover, setConnectHover] = useState(false);
	const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
	const rippleId = useRef(0);
	const cvUrl = "/curriculum-vitae/CV_Rakan%20Fadhil%20Prayata.pdf";

	return (
		<section
			id="/"
			className="scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 min-h-[100svh] flex items-center py-24 lg:py-32 tablet-landscape:py-20 relative z-0 overflow-x-clip"
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
				}}
			>
				<div
					className="absolute inset-0 z-30 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				/>
				<div className="size-[620px] hero-ring" />
				<div className="size-[820px] hero-ring" />
				<div className="size-[1020px] hero-ring" />
				<div className="size-[1220px] hero-ring" />

				<HeroOrbit
					size={430}
					rotation={-14}
					shouldOrbit
					orbitDuration="40s"
					shouldSpin
					spinDuration="2s"
				>
					<SparkleIcon className="size-8 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={440}
					rotation={79}
					shouldOrbit
					orbitDuration="44s"
					shouldSpin
					spinDuration="3s"
				>
					<SparkleIcon className="size-5 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={520}
					rotation={-41}
					shouldOrbit
					orbitDuration="48s"
					shouldSpin
					spinDuration="4s"
				>
					<div className="size-3 rounded-full bg-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={530}
					rotation={178}
					shouldOrbit
					orbitDuration="52s"
					shouldSpin
					spinDuration="5s"
				>
					<SparkleIcon className="size-10 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={550}
					rotation={20}
					shouldOrbit
					orbitDuration="56s"
					shouldSpin
					spinDuration="6s"
				>
					<StarIcon className="size-12 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit
					size={590}
					rotation={98}
					shouldOrbit
					orbitDuration="60s"
					shouldSpin
					spinDuration="7s"
				>
					<StarIcon className="size-8 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="64s">
					<div className="size-2 rounded-full bg-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={710}
					rotation={144}
					shouldOrbit
					orbitDuration="68s"
					shouldSpin
					spinDuration="8s"
				>
					<SparkleIcon className="size-14 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={720}
					rotation={85}
					shouldOrbit
					orbitDuration="72s"
					shouldSpin
					spinDuration="9s"
				>
					<div className="size-3 rounded-full bg-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={800}
					rotation={-72}
					shouldOrbit
					orbitDuration="76s"
					shouldSpin
					spinDuration="10s"
				>
					<StarIcon className="size-28 text-emerald-300" />
				</HeroOrbit>
			</div>

			<div className="container">
				<div className="flex flex-col items-center">
					<Image
						src={memojiImage}
						className="size-[100px] tablet-landscape:size-16"
						sizes="(min-width: 768px) and (orientation: landscape) and (pointer: coarse) 64px, 100px"
						alt={t.hero.imageAlt}
						preload
					/>
					<div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
						<div className="bg-green-500 size-2.5 rounded-full relative">
							<div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
						</div>
						<div className="text-sm font-medium tablet-landscape:text-xs">{t.hero.available}</div>
					</div>
				</div>

				<div className="max-w-lg md:max-w-xl lg:max-w-lg tablet-landscape:max-w-xl mx-auto">
					<h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-8 tracking-wide tablet-landscape:mt-4 tablet-landscape:text-3xl">
						<Typewriter key={language} words={t.hero.words} />
						<span className="after:content-['|'] after:ml-1 animate-pulse" />
					</h1>
					<p className="mt-4 text-center text-sm leading-relaxed text-white/60 md:text-base md:leading-6 tablet-landscape:mt-3 tablet-landscape:text-sm tablet-landscape:leading-5">
						{t.hero.intro}
						<span className="font-semibold">Rakan Fadhil Prayata</span>
						{t.hero.description}
					</p>
				</div>

				<div className="flex flex-col md:flex-row tablet-portrait:flex-row justify-center items-center mt-8 gap-4 tablet-portrait:gap-3 tablet-landscape:mt-6">
					<motion.a
						href={cvUrl}
						whileHover={{ y: -2, scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="group relative inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl overflow-hidden tablet-portrait:px-4 tablet-portrait:text-sm tablet-portrait:whitespace-nowrap tablet-landscape:h-11 tablet-landscape:text-sm"
						aria-label={t.hero.downloadCvLabel}
					>
						<span
							className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{
								background:
									"conic-gradient(from 180deg at 50% 50%, rgba(16,185,129,0.25), rgba(255,255,255,0.08), rgba(16,185,129,0.25))",
								maskImage: "linear-gradient(#000,#000), linear-gradient(#000,#000)",
								WebkitMaskComposite: "xor",
								maskComposite: "exclude",
							}}
						/>
						<span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/10 blur-xs opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-700" />
						<span className="font-semibold relative z-10">{t.hero.downloadCv}</span>
						<motion.span
							className="relative z-10"
							animate={{ y: 0 }}
							whileHover={{ y: 2 }}
							transition={{ type: "spring", stiffness: 400, damping: 18 }}
						>
							<ArrowDown className="size-4" />
						</motion.span>
					</motion.a>

					<motion.a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=contact%40rakanfadhil.com"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{
							y: -3,
							scale: 1.03,
						}}
						whileTap={{ scale: 0.98 }}
						onHoverStart={() => setConnectHover(true)}
						onHoverEnd={() => setConnectHover(false)}
						onClick={(e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							const x = e.clientX - rect.left;
							const y = e.clientY - rect.top;
							const size = Math.max(rect.width, rect.height) * 1.2;
							const id = rippleId.current++;
							setRipples((prev) => [...prev, { id, x, y, size }]);
						}}
						className="relative overflow-hidden inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl tablet-portrait:px-4 tablet-portrait:text-sm tablet-portrait:whitespace-nowrap tablet-landscape:h-11 tablet-landscape:text-sm"
						aria-label={t.hero.connect}
					>
						<motion.span
							className="pointer-events-none absolute inset-0 rounded-xl"
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 1 }}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							style={{
								background:
									"radial-gradient(120px 120px at 50% 50%, rgba(16,185,129,0.15), transparent 60%)",
							}}
						/>

						{ripples.map((r) => (
							<motion.span
								key={r.id}
								aria-hidden="true"
								className="pointer-events-none absolute rounded-full"
								style={{
									left: r.x - r.size / 2,
									top: r.y - r.size / 2,
									width: r.size,
									height: r.size,
									background:
										"radial-gradient(circle, rgba(16,185,129,0.25), rgba(16,185,129,0.08) 40%, transparent 70%)",
									border: "1px solid rgba(16,185,129,0.35)",
								}}
								initial={{ scale: 0, opacity: 0.6 }}
								animate={{ scale: 1, opacity: 0 }}
								transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
								onAnimationComplete={() => {
									setRipples((prev) => prev.filter((ripple) => ripple.id !== r.id));
								}}
							/>
						))}
						<motion.span
							aria-hidden
							animate={{ rotateZ: connectHover && !reduceMotion ? [0, 18, -10, 18, -6, 0] : 0 }}
							transition={{ duration: 0.9, ease: "easeInOut" }}
							className="text-xl relative z-10 tablet-portrait:text-lg"
							style={{ display: "inline-block", transformOrigin: "70% 70%" }}
						>
							🖐️
						</motion.span>

						<span className="font-semibold relative z-10">{t.hero.connect}</span>
					</motion.a>
				</div>
			</div>
			<div className="absolute bottom-6 inset-x-0 flex justify-center md:bottom-8 lg:bottom-12 tablet-landscape:bottom-4">
				<a
					href="/about"
					aria-label={t.hero.scrollToAbout}
					onClick={(e) => {
						if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
						e.preventDefault();
						document.getElementById("about")?.scrollIntoView({
							behavior: reduceMotion ? "instant" : "smooth",
						});
						if (window.location.pathname !== "/about" || window.location.hash) {
							history.pushState(null, "", "/about");
						}
					}}
					className="inline-flex size-12 items-center justify-center text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
				>
					<span className="sr-only">{t.hero.scrollToAbout}</span>
					<span aria-hidden="true" className="inline-block motion-safe:animate-scroll-cue">
						<ArrowDown className="size-5" />
					</span>
				</a>
			</div>
		</section>
	);
};
