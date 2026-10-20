"use client";

import portfolioImage from "@/assets/images/portfolio.webp";
import homeServerTopology from "@/assets/images/home-server-topology.webp";
import sentimentAnalysisImage from "@/assets/images/sentiment-analysis.webp";
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
import { Card } from "@/components/Card";
import { ImageViewer } from "@/components/ImageViewer";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const portfolioProjects = [
	{
		company: "Personal Project",
		year: "2026",
		title: "Portfoliov1",
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
		results: [
			{ title: "Responsive personal portfolio built with Next.js and Tailwind CSS" },
			{ title: "Interactive sections for experiences, certificates, and projects" },
			{ title: "Smooth animations and category-based project filtering" },
		],
		link: "https://rakanfadhil.com",
		image: portfolioImage,
	},
	{
		company: "Tri-Wall Indonesia",
		year: "2026",
		title: "Landing Page — tri-wallindonesia.co.id",
		category: "App/Website",
		techStack: [
			{ title: "WordPress", iconType: WordpressIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
		],
		results: [
			{ title: "Multilingual company website supporting four languages" },
			{ title: "Company and product information with responsive layouts" },
			{ title: "SEO optimization and multilingual content management" },
		],
		link: "https://tri-wallindonesia.co.id",
		image: twiLandingPage,
	},
	{
		company: "Tri-Wall Natura Surabaya",
		year: "2026",
		title: "Landing Page — twns.co.id",
		category: "App/Website",
		techStack: [
			{ title: "WordPress", iconType: WordpressIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
		],
		results: [
			{ title: "Bilingual company website for product visibility and lead generation" },
			{ title: "Landing page introducing the company and its packaging products" },
			{ title: "On-page SEO for packaging-related product articles" },
		],
		link: "https://twns.co.id",
		image: twnsLandingPage,
	},
	{
		company: "Personal Project",
		year: "2026",
		title: "Sentiment Analysis",
		category: "Data Science/AI",
		techStack: [{ title: "Python", iconType: PythonIcon }],
		results: [
			{ title: "Text preprocessing for sentiment classification" },
			{ title: "Classify text into positive, negative, and neutral sentiments" },
			{ title: "Explore sentiment trends through data visualization" },
		],
		link: "",
		image: sentimentAnalysisImage,
	},
	{
		company: "Personal Project",
		year: "2026",
		title: "Self-Hosted Home Server with Hyper-V & Cloudflare Tunnel",
		category: "Network",
		techStack: [
			{ title: "Linux", iconType: LinuxIcon },
			{ title: "Cloudflare Tunnel", iconType: CloudflareIcon },
			{ title: "Gmail", iconType: GmailIcon },
		],
		results: [
			{ title: "Home server lab using Hyper-V virtual machines" },
			{ title: "Publish self-hosted services through Cloudflare Tunnel" },
			{ title: "Explore virtual networking and remote service access" },
		],
		link: "",
		image: homeServerTopology,
	},
	{
		company: "Tri-Wall Indonesia",
		year: "2026",
		title: "Safety Induction Video",
		category: "Videography",
		techStack: [{ title: "VEGAS Pro", iconType: VegasIcon }],
		results: [
			{ title: "Safety induction video for internal company use" },
			{ title: "Produced as part of my IT Staff internship" },
		],
		link: "",
		image: inductionImage,
	},
];

const filterCategories = ["App/Website", "Data Science/AI", "Network", "Videography"];

export const ProjectsSection = () => {
	const [activeFilter, setActiveFilter] = useState("App/Website");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const [cardHeight, setCardHeight] = useState(0);
	const projectsRef = useRef<HTMLDivElement>(null);

	const filteredProjects = portfolioProjects.filter((project) => project.category === activeFilter);

	const openFullscreen = (index: number) => {
		setCurrentProjectIndex(index);
		setIsFullscreen(true);
	};
	const closeFullscreen = () => setIsFullscreen(false);
	const nextProject = () =>
		setCurrentProjectIndex((p) => (p === filteredProjects.length - 1 ? 0 : p + 1));
	const prevProject = () =>
		setCurrentProjectIndex((p) => (p === 0 ? filteredProjects.length - 1 : p - 1));

	useEffect(() => {
		const contents = Array.from(
			projectsRef.current?.querySelectorAll<HTMLDivElement>("[data-project-content]") ?? [],
		);
		const images = Array.from(
			projectsRef.current?.querySelectorAll<HTMLButtonElement>("[data-project-image]") ?? [],
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
				const image = card.querySelector<HTMLButtonElement>("[data-project-image]");
				const imageHeight =
					styles.display === "flex" ? (image?.getBoundingClientRect().height ?? 0) : 0;
				return (
					content.getBoundingClientRect().height +
					imageHeight +
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
		images.forEach((image) => {
			observer.observe(image);
		});
		window.addEventListener("resize", measure);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", measure);
		};
	}, [activeFilter]);

	return (
		<section
			id="projects"
			className="scroll-mt-36 md:scroll-mt-40 desktop:scroll-mt-44 pb-16 desktop:py-24"
		>
			<div className="container tablet-portrait:max-w-none">
				<SectionHeader
					eyebrow="Real-World Results"
					title="Featured Projects"
					description="Explore my projects in web development, data science, AI, networking, and videography."
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
									? "bg-gradient-to-r from-emerald-300 to-sky-400 text-white"
									: "bg-gray-700 text-white/80 hover:bg-gray-600"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div
					ref={projectsRef}
					className="isolate mt-10 md:mt-12 desktop:mt-20 flex flex-col gap-20 tablet-landscape:gap-[max(5rem,30svh)]"
				>
					{filteredProjects.length === 0 && (
						<p className="text-center text-sm md:text-base text-white/60">
							No projects in this category yet.
						</p>
					)}
					{filteredProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className="px-8 pt-8 pb-0 md:p-6 desktop:pt-16 desktop:px-20 desktop:pb-0 flex flex-col md:grid md:grid-cols-5 desktop:grid-cols-2 md:gap-4 desktop:gap-16 tablet:pb-0 tablet-portrait:grid tablet-portrait:grid-cols-2 tablet-portrait:gap-4 tablet-portrait:p-6 tablet-portrait:pb-0 sticky tablet:[--project-card-top:4rem] tablet-landscape:[--project-card-top:calc(4rem+var(--project-card-offset))] tablet:[--project-card-min-height:0px] tablet:max-h-[calc(100svh-var(--project-card-top)-1rem)] tablet:overflow-y-auto after:z-10"
							style={
								{
									"--project-card-offset": `${projectIndex * 20}px`,
									"--project-image-aspect-ratio": `${project.image.width} / ${project.image.height}`,
									top: `var(--project-card-top, calc(64px + ${projectIndex === 1 ? 20 : projectIndex * 40}px))`,
									minHeight: cardHeight
										? `var(--project-card-min-height, ${cardHeight}px)`
										: undefined,
									zIndex: projectIndex + 1,
								} as CSSProperties
							}
						>
							<div
								data-project-content
								className="tablet:col-span-3 md:self-start desktop:pb-16 tablet:pb-6 tablet-portrait:col-span-1 tablet-portrait:self-start tablet-portrait:pb-6"
							>
								<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-bold uppercase tracking-widest text-sm md:text-xs desktop:text-sm text-transparent bg-clip-text">
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
										<li
											key={result.title}
											className="flex gap-2 text-sm desktop:text-base text-white/50"
										>
											<CheckCircleIcon className="size-5 desktop:size-6 shrink-0" />
											<span>{result.title}</span>
										</li>
									))}
								</ul>
								{project.techStack.length > 0 && (
									<div className="mt-6 md:mt-4 desktop:mt-6">
										<p className="text-xs font-semibold text-white/60">
											{project.category === "Videography" ? "Skills" : "Tech Stack"}
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
								{project.category === "App/Website" && (
									<div className="flex items-center gap-3 mt-8 md:mt-4 desktop:mt-8">
										{project.link ? (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-white text-gray-950 h-12 md:h-11 desktop:h-12 w-full md:w-auto tablet-portrait:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
											>
												<span>View</span>
												<ArrowUpRightIcon className="size-4" strokeWidth={2} />
											</a>
										) : (
											<button
												type="button"
												disabled
												className="bg-white/60 text-gray-950 h-12 md:h-11 desktop:h-12 w-full md:w-auto tablet-portrait:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-not-allowed"
											>
												<span>View</span>
											</button>
										)}
									</div>
								)}
							</div>
							{/* Keep the tablet card height while the image extends to its edges. */}
							<button
								data-project-image
								type="button"
								onClick={() => openFullscreen(projectIndex)}
								aria-label={`View ${project.title} image`}
								className="relative flow-root w-full max-md:mt-auto tablet:col-span-2 tablet:self-stretch tablet:pb-6 tablet:before:block tablet:before:aspect-[var(--project-image-aspect-ratio)] tablet-portrait:col-span-1 tablet-portrait:self-stretch tablet-portrait:mt-0 tablet-portrait:pb-6 tablet-portrait:before:block tablet-portrait:before:aspect-[var(--project-image-aspect-ratio)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
							>
								<Image
									src={project.image}
									alt={project.title}
									draggable={false}
									sizes="(min-width: 768px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 2.5rem), (min-width: 600px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 1.5rem), (min-width: 1200px) and (pointer: coarse) 380px, (min-width: 1200px) 1000px, (min-width: 768px) 277px, (min-width: 375px) 279px, calc(100vw - 6rem)"
									className="mt-4 -mb-4 h-auto w-full object-cover object-left-top [clip-path:inset(1px_round_3%/5%)] md:mt-0 md:-mb-0 md:h-full tablet:absolute tablet:top-0 tablet:left-0 tablet:w-auto tablet:max-w-none tablet-portrait:absolute tablet-portrait:top-0 tablet-portrait:left-0 tablet-portrait:mt-0 tablet-portrait:mb-0 tablet-portrait:h-full tablet-portrait:w-auto tablet-portrait:max-w-none desktop:absolute desktop:top-0 desktop:left-0 desktop:h-full desktop:w-auto desktop:max-w-none"
								/>
							</button>
						</Card>
					))}
				</div>
			</div>

			<ImageViewer
				isOpen={isFullscreen}
				onClose={closeFullscreen}
				images={filteredProjects}
				currentIndex={currentProjectIndex}
				onNext={nextProject}
				onPrev={prevProject}
				label="Project"
				imageClassName="[clip-path:inset(1px_round_3%/5%)]"
			/>
		</section>
	);
};
