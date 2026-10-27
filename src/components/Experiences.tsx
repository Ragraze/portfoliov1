"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import { Card } from "@/components/Card";
import { Modal } from "@/components/Modal";
import triwallImage from "@/assets/images/tri-wall-indonesia.webp";
import twnsImage from "@/assets/images/tri-wall-natura-surabaya.webp";
import bangkitImage from "@/assets/images/bangkit.webp";
import assistantImage from "@/assets/images/teaching-assistant.webp";
import emifImage from "@/assets/images/emif.webp";
import Image, { type StaticImageData } from "next/image";
import { useState, type ComponentType, type ReactNode, type SVGProps } from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { useLanguage } from "@/lib/LanguageContext";
import type { Translations } from "@/lib/translations";

import JavascriptIcon from "simple-icons/icons/javascript.svg";
import GithubIcon from "simple-icons/icons/github.svg";
import CssIcon from "simple-icons/icons/css.svg";
import HTMLIcon from "simple-icons/icons/html5.svg";
import GoogleCloudIcon from "simple-icons/icons/googlecloud.svg";
import NodeIcon from "simple-icons/icons/nodedotjs.svg";
import PhpIcon from "simple-icons/icons/php.svg";
import LaravelIcon from "simple-icons/icons/laravel.svg";
import FigmaIcon from "simple-icons/icons/figma.svg";
import CanvaIcon from "@/assets/icons/canva.svg";
import WordpressIcon from "simple-icons/icons/wordpress.svg";

interface Experience {
	id: keyof Translations["experiences"]["items"];
	title: string;
	company: string;
	period: string;
	logo: StaticImageData;
	logoClassName?: string;
	description: string;
	techStack: {
		name: string;
		icon?: ComponentType<SVGProps<SVGSVGElement>>;
	}[];
	responsibilities: string[];
}

const experienceAssets: Omit<
	Experience,
	"title" | "company" | "period" | "description" | "responsibilities"
>[] = [
	{
		id: "5",
		logo: twnsImage,
		techStack: [
			{
				name: "WordPress",
				icon: WordpressIcon,
			},
			{
				name: "JavaScript",
				icon: JavascriptIcon,
			},
			{
				name: "HTML",
				icon: HTMLIcon,
			},
			{
				name: "CSS",
				icon: CssIcon,
			},
		],
	},
	{
		id: "4",
		logo: triwallImage,
		techStack: [
			{
				name: "WordPress",
				icon: WordpressIcon,
			},
			{
				name: "JavaScript",
				icon: JavascriptIcon,
			},
			{
				name: "HTML",
				icon: HTMLIcon,
			},
			{
				name: "CSS",
				icon: CssIcon,
			},
		],
	},
	{
		id: "3",
		logo: bangkitImage,
		techStack: [
			{
				name: "Google Cloud",
				icon: GoogleCloudIcon,
			},
			{
				name: "Node.js",
				icon: NodeIcon,
			},
			{
				name: "GitHub",
				icon: GithubIcon,
			},
			{
				name: "REST API",
				icon: CodeBracketIcon,
			},
			{
				name: "JavaScript",
				icon: JavascriptIcon,
			},
			{
				name: "Back-End",
				icon: ServerStackIcon,
			},
		],
	},
	{
		id: "2",
		logo: assistantImage,
		techStack: [
			{
				name: "HTML",
				icon: HTMLIcon,
			},
			{
				name: "CSS",
				icon: CssIcon,
			},
			{
				name: "JavaScript",
				icon: JavascriptIcon,
			},
			{
				name: "PHP",
				icon: PhpIcon,
			},
			{
				name: "Laravel",
				icon: LaravelIcon,
			},
		],
	},
	{
		id: "1",
		logo: emifImage,
		logoClassName: "object-cover",
		techStack: [
			{
				name: "Figma",
				icon: FigmaIcon,
			},
			{
				name: "Canva",
				icon: CanvaIcon,
			},
		],
	},
];

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const slideVariants = (dir: "left" | "right" | "up") => {
	const dx = dir === "left" ? -36 : dir === "right" ? 36 : 0;
	const dy = dir === "up" ? 24 : 0;
	return {
		hidden: { opacity: 0, x: dx, y: dy },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 0.7, ease: easeOutExpo },
		},
	};
};

function SlideInOnView({
	dir,
	children,
	amount = 0.35,
}: {
	dir: "left" | "right" | "up";
	children: ReactNode;
	amount?: number;
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			variants={slideVariants(dir)}
			viewport={{ once: false, amount, margin: "-10% 0px -10% 0px" }}
		>
			{children}
		</motion.div>
	);
}

export const ExperiencesSection = () => {
	const { t } = useLanguage();
	const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
	const experiences: Experience[] = experienceAssets.map((experience) => ({
		...experience,
		...t.experiences.items[experience.id],
	}));
	const selectedExperience = experiences.find(
		(experience) => experience.id === selectedExperienceId,
	);

	const closeModal = () => setSelectedExperienceId(null);

	return (
		<section
			id="experiences"
			className="scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-16 md:py-20 lg:py-28"
		>
			<SectionBackground />
			<div className="container tablet-portrait:max-w-none">
				<SectionHeader
					eyebrow={t.experiences.eyebrow}
					title={t.experiences.title}
					description={t.experiences.description}
				/>

				<div className="mt-10 md:mt-20 relative">
					<motion.div
						className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b/srgb from-emerald-300 to-sky-400 hidden md:block tablet-portrait:hidden"
						initial={{ opacity: 0, scaleY: 0.9 }}
						whileInView={{ opacity: 1, scaleY: 1 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.6, ease: easeOutExpo }}
						style={{ transformOrigin: "top" }}
					/>

					<div className="space-y-8 md:space-y-16">
						{experiences.map((experience, index) => (
							<div
								key={experience.id}
								className={`relative flex flex-col md:flex-row items-center gap-8 tablet-portrait:flex-col ${
									index % 2 === 0 ? "md:flex-row-reverse" : ""
								}`}
							>
								<motion.div
									aria-hidden
									className="hidden md:block absolute left-1/2 top-1/2 tablet-portrait:hidden"
									style={{ x: "-50%", y: "-50%" }}
									initial={{ scale: 0.6, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.45, ease: easeOutExpo }}
								>
									<span className="relative block size-4 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
										<span className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
										<span className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-10" />
									</span>
								</motion.div>

								<div className="hidden md:block md:w-1/2 tablet-portrait:hidden" />

								<div
									className={`w-full md:w-1/2 tablet-portrait:w-full tablet-portrait:mx-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
								>
									<div className="block md:hidden tablet-portrait:block">
										<SlideInOnView dir="up">
											<Card
												className="card-focus p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
												onClick={() => setSelectedExperienceId(experience.id)}
											>
												<ExperienceCardInner experience={experience} />
											</Card>
										</SlideInOnView>
									</div>

									<div className="hidden md:block tablet-portrait:hidden">
										<SlideInOnView dir={index % 2 === 0 ? "left" : "right"}>
											<Card
												className="card-focus p-6 tablet-portrait:p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
												onClick={() => setSelectedExperienceId(experience.id)}
											>
												<ExperienceCardInner experience={experience} />
											</Card>
										</SlideInOnView>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{selectedExperience && (
				<Modal
					onClose={closeModal}
					label={selectedExperience.title}
					className="bg-black/80 backdrop-blur-xs p-4"
				>
					<div className="bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90dvh] overflow-y-auto overscroll-contain relative">
						<div className="sticky top-0 z-10 bg-gray-800 p-4 pr-14 sm:p-6 sm:pr-14 border-b border-white/10 rounded-t-3xl">
							<button
								type="button"
								onClick={closeModal}
								className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl focus:outline-hidden focus-visible:text-emerald-300"
								aria-label={t.controls.close}
							>
								×
							</button>
							<div className="flex flex-col md:flex-row items-start gap-4">
								<ExperienceLogo experience={selectedExperience} className="md:h-20 md:w-24" />
								<div>
									<h2 className="font-serif text-lg md:text-2xl text-white">
										{selectedExperience.title}
									</h2>
									<p className="text-emerald-300 text-lg font-medium">
										{selectedExperience.company}
									</p>
									<p className="text-white/60">{selectedExperience.period}</p>
								</div>
							</div>
						</div>

						<div className="p-6">
							<div className="mb-6">
								<h3 className="font-serif text-xl text-white mb-3">
									{t.experiences.descriptionLabel}
								</h3>
								<p className="text-white/80 leading-relaxed">{selectedExperience.description}</p>
							</div>

							<div className="mb-6">
								<h3 className="font-serif text-xl text-white mb-3">
									{t.experiences.responsibilities}
								</h3>
								<ul className="space-y-2">
									{selectedExperience.responsibilities.map((r) => (
										<li key={r} className="flex items-start gap-3 text-white/80">
											<div className="w-2 h-2 bg-linear-to-r/srgb from-emerald-300 to-sky-400 rounded-full mt-2 shrink-0" />
											{r}
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="font-serif text-xl text-white mb-3">{t.experiences.skills}</h3>
								<div className="flex flex-wrap items-center gap-3">
									{selectedExperience.techStack.map((tech) => {
										const Icon = tech.icon;
										return (
											<div
												key={tech.name}
												className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900/60"
												title={tech.name}
											>
												{Icon && (
													<Icon
														className="w-5 h-5 shrink-0 fill-current text-white"
														role="img"
														aria-label={tech.name}
													/>
												)}
												<span className="text-sm text-white">{tech.name}</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</section>
	);
};

function ExperienceLogo({ experience, className }: { experience: Experience; className?: string }) {
	return (
		<div
			className={twMerge(
				"h-16 w-20 shrink-0 rounded-xl bg-linear-to-r/srgb from-emerald-300 to-sky-400 p-0.5",
				className,
			)}
		>
			<div className="size-full rounded-[10px] bg-white p-2">
				<div className="relative size-full overflow-hidden">
					<Image
						src={experience.logo}
						alt={experience.company}
						fill
						sizes="(min-width: 768px) 76px, 60px"
						className={twMerge("object-contain", experience.logoClassName)}
					/>
				</div>
			</div>
		</div>
	);
}

function ExperienceCardInner({ experience }: { experience: Experience }) {
	const { t } = useLanguage();
	return (
		<div className="flex items-start gap-4 tablet-portrait:gap-3">
			<ExperienceLogo
				experience={experience}
				className="tablet-portrait:h-12 tablet-portrait:w-16"
			/>
			<div className="flex-1 min-w-0">
				<h3 className="font-serif text-lg md:text-2xl text-white group-hover:text-emerald-300 transition-colors">
					{experience.title}
				</h3>
				<p className="text-emerald-300 font-medium">{experience.company}</p>
				<p className="text-white/60 text-sm mt-1">{experience.period}</p>
				<p className="text-white/80 text-sm mt-3 line-clamp-2">{experience.description}</p>

				<button
					type="button"
					className="mt-4 text-emerald-300 hover:text-emerald-200 text-sm font-medium transition-colors"
				>
					{t.experiences.viewDetails} →
				</button>
			</div>
		</div>
	);
}
