"use client";

import portfolioImage from "@/assets/images/portfolio.webp";
import homeServerTopology from "@/assets/images/home-server-topology.webp";
import sentimentAnalysisImage from "@/assets/images/ikn-sentiment-analysis.webp";
import osteoporosisImage from "@/assets/images/classify-osteoporosis.webp";
import twiLandingPage from "@/assets/images/tri-wall-indonesia-landing-page.webp";
import twnsLandingPage from "@/assets/images/tri-wall-natura-surabaya-landing-page.webp";
import inductionImage from "@/assets/images/safety-induction.webp";
import Image from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import NextjsIcon from "simple-icons/icons/nextdotjs.svg";
import ReactIcon from "simple-icons/icons/react.svg";
import FramerIcon from "simple-icons/icons/framer.svg";
import TailwindCssIcon from "simple-icons/icons/tailwindcss.svg";
import HTMLIcon from "simple-icons/icons/html5.svg";
import CssIcon from "simple-icons/icons/css.svg";
import JavascriptIcon from "simple-icons/icons/javascript.svg";
import TypescriptIcon from "simple-icons/icons/typescript.svg";
import WordpressIcon from "simple-icons/icons/wordpress.svg";
import PythonIcon from "simple-icons/icons/python.svg";
import CloudflareIcon from "simple-icons/icons/cloudflare.svg";
import LinuxIcon from "simple-icons/icons/linux.svg";
import GmailIcon from "simple-icons/icons/gmail.svg";
import StarIcon from "@/assets/icons/star.svg";
import VegasIcon from "simple-icons/icons/vegas.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import { Card } from "@/components/Card";
import { ImageViewer } from "@/components/ImageViewer";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const projectAssets = [
	{
		id: "portfolio" as const,
		year: "2026",
		category: "App/Website",
		techStack: [
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "TypeScript", iconType: TypescriptIcon },
			{ title: "Next.js", iconType: NextjsIcon },
			{ title: "ReactJS", iconType: ReactIcon },
			{ title: "Framer Motion", iconType: FramerIcon },
			{ title: "Tailwind CSS", iconType: TailwindCssIcon },
		],
		link: "https://rakanfadhil.com",
		image: portfolioImage,
	},
	{
		id: "twi" as const,
		year: "2026",
		category: "App/Website",
		techStack: [
			{ title: "WordPress", iconType: WordpressIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
		],
		link: "https://tri-wallindonesia.co.id",
		image: twiLandingPage,
	},
	{
		id: "twns" as const,
		year: "2026",
		category: "App/Website",
		techStack: [
			{ title: "WordPress", iconType: WordpressIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
		],
		link: "https://twns.co.id",
		image: twnsLandingPage,
	},
	{
		id: "sentiment" as const,
		year: "2026",
		category: "Data Science/AI",
		techStack: [{ title: "Python", iconType: PythonIcon }],
		link: "https://github.com/Ragraze/ikn-sentiment-analysis",
		image: sentimentAnalysisImage,
	},
	{
		id: "osteoporosis" as const,
		year: "2023",
		category: "Data Science/AI",
		techStack: [{ title: "Python", iconType: PythonIcon }],
		link: "https://github.com/Ragraze/classify-osteoporosis",
		image: osteoporosisImage,
	},
	{
		id: "server" as const,
		year: "2026",
		category: "Network",
		techStack: [
			{ title: "Linux", iconType: LinuxIcon },
			{ title: "Cloudflare Tunnel", iconType: CloudflareIcon },
			{ title: "Gmail", iconType: GmailIcon },
		],
		link: "",
		image: homeServerTopology,
	},
	{
		id: "induction" as const,
		year: "2026",
		category: "Digital Content",
		techStack: [{ title: "VEGAS Pro", iconType: VegasIcon }],
		link: "",
		image: inductionImage,
	},
];

const filterCategories = ["App/Website", "Data Science/AI", "Network", "Digital Content"] as const;

export const ProjectsSection = () => {
	const { language, t } = useLanguage();
	const portfolioProjects = projectAssets.map((project) => ({
		...project,
		...t.projects.items[project.id],
	}));
	const [activeFilter, setActiveFilter] = useState("App/Website");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [cardHeight, setCardHeight] = useState(0);
	const projectsRef = useRef<HTMLDivElement>(null);

	const filteredProjects = portfolioProjects.filter((project) => project.category === activeFilter);
	const projectImages = filteredProjects.flatMap((project) =>
		project.image ? [{ ...project, image: project.image }] : [],
	);

	const openFullscreen = (id: string) => {
		setCurrentProjectIndex(projectImages.findIndex((project) => project.id === id));
		setIsFullscreen(true);
	};
	const closeFullscreen = () => setIsFullscreen(false);
	const nextProject = () =>
		setCurrentProjectIndex((p) => (p === projectImages.length - 1 ? 0 : p + 1));
	const prevProject = () =>
		setCurrentProjectIndex((p) => (p === 0 ? projectImages.length - 1 : p - 1));

	// biome-ignore lint/correctness/useExhaustiveDependencies: Category and language changes replace the DOM nodes being measured.
	useEffect(() => {
		const contents = Array.from(
			projectsRef.current?.querySelectorAll<HTMLDivElement>("[data-project-content]") ?? [],
		);
		if (contents.length < 2) {
			setCardHeight(0);
			return;
		}

		const measure = () => {
			const heights = contents.map((content) => {
				const card = content.parentElement;
				if (!card) return 0;
				const styles = window.getComputedStyle(card);
				if (styles.display === "flex") return 0;
				return (
					content.getBoundingClientRect().height +
					parseFloat(styles.paddingTop) +
					parseFloat(styles.paddingBottom)
				);
			});
			setCardHeight(Math.ceil(Math.max(...heights)));
		};

		measure();
		const observer = new ResizeObserver(measure);
		contents.forEach((content) => {
			observer.observe(content);
		});
		window.addEventListener("resize", measure);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", measure);
		};
	}, [activeFilter, language]);

	return (
		<section
			id="projects"
			className="scroll-mt-36 md:scroll-mt-40 desktop:scroll-mt-44 max-md:pt-16 pb-16 desktop:py-24"
		>
			<SectionBackground />
			<div className="container tablet-portrait:max-w-none">
				<SectionHeader
					eyebrow={t.projects.eyebrow}
					title={t.projects.title}
					description={t.projects.description}
				/>

				<div className="flex flex-wrap gap-3 mt-10 md:mt-16 justify-center">
					{filterCategories.map((category) => (
						<button
							type="button"
							key={category}
							aria-pressed={activeFilter === category}
							onClick={() => setActiveFilter(category)}
							className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
								activeFilter === category
									? "bg-linear-to-r/srgb from-emerald-300 to-sky-400 text-white"
									: "bg-gray-700 text-white/80 hover:bg-gray-600"
							}`}
						>
							{t.projects.categories[category]}
						</button>
					))}
				</div>

				<div
					ref={projectsRef}
					className="isolate mt-10 md:mt-12 desktop:mt-20 flex flex-col gap-20 tablet-landscape:gap-[max(5rem,30svh)]"
				>
					{filteredProjects.length === 0 && (
						<p className="text-center text-sm md:text-base text-white/60">{t.projects.empty}</p>
					)}
					{filteredProjects.map((project, projectIndex) => (
						<Card
							key={project.id}
							className="px-8 pt-8 pb-0 md:p-6 desktop:pt-16 desktop:px-20 desktop:pb-0 flex flex-col md:grid md:grid-cols-5 desktop:grid-cols-2 md:gap-4 desktop:gap-16 tablet:pb-0 tablet-portrait:grid tablet-portrait:grid-cols-2 tablet-portrait:gap-4 tablet-portrait:p-6 tablet-portrait:pb-0 sticky top-16 desktop:top-28 tablet:[--project-card-min-height:min(var(--project-card-height),calc(100svh-5rem))] tablet:max-h-[calc(100svh-5rem)] tablet:overflow-y-auto after:z-10"
							style={
								{
									"--project-card-height": `${cardHeight}px`,
									"--project-image-aspect-ratio": project.image
										? `${project.image.width} / ${project.image.height}`
										: undefined,
									minHeight: cardHeight
										? `var(--project-card-min-height, ${cardHeight}px)`
										: undefined,
									zIndex: projectIndex + 1,
								} as CSSProperties
							}
						>
							<div
								data-project-content
								className={`md:self-start desktop:pb-16 tablet:pb-6 tablet-portrait:self-start tablet-portrait:pb-6 ${project.image ? "tablet:col-span-3 tablet-portrait:col-span-1" : "max-md:pb-8 md:col-span-full tablet-portrait:col-span-full"}`}
							>
								<div className="bg-linear-to-r/srgb from-emerald-300 to-sky-400 inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-bold uppercase tracking-widest text-sm md:text-xs desktop:text-sm text-transparent bg-clip-text">
									<StarIcon className="size-5 shrink-0 text-emerald-300" aria-hidden="true" />
									<span>{project.company}</span>
									<span>&bull;</span>
									<span>{project.year}</span>
								</div>
								<h3 className="font-serif text-xl mt-2 desktop:mt-5 desktop:text-4xl break-words">
									{project.title}
								</h3>
								<hr className="border-t-2 border-white/5 mt-4 md:mt-3 desktop:mt-5" />
								<ul className="flex flex-col gap-4 md:gap-2 desktop:gap-4 mt-4 md:mt-3 desktop:mt-5">
									{project.results.map((result) => (
										<li key={result} className="flex gap-2 text-sm desktop:text-base text-white/50">
											<CheckCircleIcon className="size-5 desktop:size-6 shrink-0" />
											<span>{result}</span>
										</li>
									))}
								</ul>
								{project.techStack.length > 0 && (
									<div className="mt-6 md:mt-4 desktop:mt-6">
										<p className="text-xs font-semibold text-white/60">
											{project.category === "Digital Content"
												? t.projects.skills
												: t.projects.techStack}
										</p>
										<div className="flex flex-wrap gap-3 md:gap-2 desktop:gap-3 mt-2">
											{project.techStack.map((tech) => {
												const Icon = tech.iconType;
												return (
													<span key={tech.title} title={tech.title}>
														<Icon
															className="size-5 desktop:size-6 fill-current text-white/80"
															role="img"
															aria-label={tech.title}
														/>
													</span>
												);
											})}
										</div>
									</div>
								)}
								{(project.link || project.category === "App/Website") && (
									<div className="flex items-center gap-3 mt-8 md:mt-4 desktop:mt-8">
										{project.link ? (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-white text-gray-950 hover:bg-gray-900 hover:text-white transition-colors duration-200 h-12 md:h-11 desktop:h-12 w-full md:w-auto tablet-portrait:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
											>
												<span>{t.projects.view}</span>
												<ArrowUpRightIcon className="size-4" strokeWidth={2} />
											</a>
										) : (
											<button
												type="button"
												disabled
												className="bg-white/60 text-gray-950 h-12 md:h-11 desktop:h-12 w-full md:w-auto tablet-portrait:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-not-allowed"
											>
												<span>{t.projects.view}</span>
											</button>
										)}
									</div>
								)}
							</div>
							{/* Keep the tablet card height while the image extends to its edges. */}
							{project.image && (
								<button
									data-project-image
									type="button"
									onClick={() => openFullscreen(project.id)}
									aria-label={`${t.projects.viewImage} ${project.title}`}
									className="relative flow-root w-full tablet:col-span-2 tablet:self-stretch tablet:pb-6 tablet:before:block tablet:before:aspect-[var(--project-image-aspect-ratio)] tablet-portrait:col-span-1 tablet-portrait:self-stretch tablet-portrait:mt-0 tablet-portrait:pb-6 tablet-portrait:before:block tablet-portrait:before:aspect-[var(--project-image-aspect-ratio)] cursor-zoom-in focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40"
								>
									<Image
										src={project.image}
										alt={project.title}
										draggable={false}
										sizes="(min-width: 768px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 2.5rem), (min-width: 600px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 1.5rem), (min-width: 1200px) and (pointer: coarse) 380px, (min-width: 1200px) 1000px, (min-width: 768px) 277px, (min-width: 375px) 279px, calc(100vw - 6rem)"
										className="mt-4 -mb-4 h-auto w-full object-cover object-left-top [clip-path:inset(1px_round_3%/5%)] md:mt-0 md:-mb-0 md:h-full tablet:absolute tablet:top-0 tablet:left-0 tablet:w-auto tablet:max-w-none tablet-portrait:absolute tablet-portrait:top-0 tablet-portrait:left-0 tablet-portrait:mt-0 tablet-portrait:mb-0 tablet-portrait:h-full tablet-portrait:w-auto tablet-portrait:max-w-none desktop:absolute desktop:top-0 desktop:left-0 desktop:h-full desktop:w-auto desktop:max-w-none"
									/>
								</button>
							)}
						</Card>
					))}
				</div>
			</div>

			<ImageViewer
				isOpen={isFullscreen}
				onClose={closeFullscreen}
				images={projectImages}
				currentIndex={currentProjectIndex}
				onNext={nextProject}
				onPrev={prevProject}
				label={t.projects.imageLabel}
				imageClassName="[clip-path:inset(1px_round_3%/5%)]"
			/>
		</section>
	);
};
