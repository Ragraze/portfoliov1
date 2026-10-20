"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionStars } from "@/components/SectionStars";
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
	id: string;
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

const experiences: Experience[] = [
	{
		id: "5",
		title: "Web Developer",
		company: "Tri-Wall Natura Surabaya",
		period: "Jan 2026 - Apr 2026",
		logo: twnsImage,
		description:
			"Remote web developer building a bilingual company website to support product visibility and lead generation.",
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
		responsibilities: [
			"Built and optimized a bilingual company website for product visibility and lead generation",
			"Implemented on-page SEO for multiple product articles targeting packaging-related keywords",
		],
	},
	{
		id: "4",
		title: "IT Staff",
		company: "Tri-Wall Indonesia",
		period: "Oct 2025 - Apr 2026",
		logo: triwallImage,
		description:
			"On-site IT Staff in Nagasari, Bekasi, responsible for the company's multilingual website and internal media.",
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
		responsibilities: [
			"Developed and maintained a multilingual company website (4 languages, 76+ pages), covering product pages, SEO optimization, and responsive design",
			"Managed site performance, security, and multilingual content to ensure a consistent user experience across devices",
			"Produced a Safety Induction video for internal company use",
		],
	},
	{
		id: "3",
		title: "Bangkit 2024 Batch 1 - Cloud Computing Learning Path",
		company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
		period: "Feb 2024 - Jun 2024",
		logo: bangkitImage,
		description:
			"Remote cloud computing learning path in Bangkit Academy, ending with a capstone project building a mobile application together with a cross-path team.",
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
		responsibilities: [
			"Collaborated with 5 other cohorts to complete a capstone project to create a mobile application",
			"Learned directly from mentors about creating backend APIs and deploying AI models to the cloud for mobile applications",
		],
	},
	{
		id: "2",
		title: "Laboratory Teaching Assistant of Web Programming",
		company: "Faculty of Computer Science (FILKOM), Universitas Brawijaya",
		period: "Feb 2024 - May 2024",
		logo: assistantImage,
		description:
			"Part-time teaching assistant for the Web Programming laboratory, guiding students through web development fundamentals.",
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
		responsibilities: [
			"Guided 25 students through the foundational concepts of web development",
			"Provided explanations on HTML, CSS, JavaScript, PHP, and the Laravel framework",
		],
	},
	{
		id: "1",
		title: "Design and Multimedia Documentation Staff of ROMANTICS 2022",
		company: "Informatics Student Executive Board (EMIF) - Universitas Brawijaya",
		period: "Sep 2022 - Nov 2022",
		logo: emifImage,
		logoClassName: "object-cover",
		description:
			"ROMANTICS 2022 is a program organized by EMIF's HR Development Department to support extracurricular talents and gaming interests among Informatics students at the Faculty of Computer Science, Universitas Brawijaya.",
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
		responsibilities: [
			"Created 32 graphic designs such as feeds, stories and reels for content publication",
			"Documented 7 competition matches, including live streaming for participants",
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
	const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

	const closeModal = () => setSelectedExperience(null);

	return (
		<section
			id="experiences"
			className="scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-20 lg:py-28"
		>
			<SectionStars />
			<div className="container tablet-portrait:max-w-none">
				<SectionHeader
					eyebrow="Career Journey"
					title="Professional Experiences"
					description="My journey through various roles and projects"
				/>

				<div className="mt-20 relative">
					<motion.div
						className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-300 to-sky-400 hidden md:block tablet-portrait:hidden"
						initial={{ opacity: 0, scaleY: 0.9 }}
						whileInView={{ opacity: 1, scaleY: 1 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.6, ease: easeOutExpo }}
						style={{ x: "-50%", transformOrigin: "top" }}
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
									<span className="relative block size-4 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
										<span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
										<span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
									</span>
								</motion.div>

								<div className="hidden md:block md:w-1/2 tablet-portrait:hidden" />

								<div
									className={`w-full md:w-1/2 tablet-portrait:w-full tablet-portrait:mx-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
								>
									<div className="block md:hidden tablet-portrait:block">
										<SlideInOnView dir="up">
											<Card
												className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
												onClick={() => setSelectedExperience(experience)}
											>
												<ExperienceCardInner experience={experience} />
											</Card>
										</SlideInOnView>
									</div>

									<div className="hidden md:block tablet-portrait:hidden">
										<SlideInOnView dir={index % 2 === 0 ? "left" : "right"}>
											<Card
												className="p-6 tablet-portrait:p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
												onClick={() => setSelectedExperience(experience)}
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
					className="bg-black/80 backdrop-blur-sm p-4"
				>
					<div className="bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90dvh] overflow-y-auto overscroll-contain relative">
						<div className="sticky top-0 z-10 bg-gray-800 p-4 pr-14 sm:p-6 sm:pr-14 border-b border-white/10 rounded-t-3xl">
							<button
								type="button"
								onClick={closeModal}
								className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl focus:outline-none focus-visible:text-emerald-300"
								aria-label="Close"
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
								<h3 className="font-serif text-xl text-white mb-3">Description</h3>
								<p className="text-white/80 leading-relaxed">{selectedExperience.description}</p>
							</div>

							<div className="mb-6">
								<h3 className="font-serif text-xl text-white mb-3">Key Responsibilities</h3>
								<ul className="space-y-2">
									{selectedExperience.responsibilities.map((r, idx) => (
										<li key={idx} className="flex items-start gap-3 text-white/80">
											<div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full mt-2 flex-shrink-0" />
											{r}
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="font-serif text-xl text-white mb-3">Skills</h3>
								<div className="flex flex-wrap items-center gap-3">
									{selectedExperience.techStack.map((tech, index) => {
										const Icon = tech.icon;
										return (
											<div
												key={index}
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
				"h-16 w-20 shrink-0 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 p-0.5",
				className,
			)}
		>
			<div className="size-full rounded-[10px] bg-white p-2">
				<div className="relative size-full overflow-hidden">
					<Image
						src={experience.logo}
						alt={`${experience.company} logo`}
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
					View Details →
				</button>
			</div>
		</div>
	);
}
