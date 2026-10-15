"use client";
import portfolioImage from "@/assets/images/portfolio.png";
import homeServerTopology from "@/assets/images/topologi-homeserver-portfolio.png";
import sentimentAnalysisImage from "@/assets/images/sentimen-analysis.png";
import twiLandingPage from "@/assets/images/landingpagetwi.png";
import twnsLandingPage from "@/assets/images/landingpagetwns.png";
import inductionImage from "@/assets/images/induction.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import NextjsIcon from "@/assets/icons/nextdotjs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindCssIcon from "@/assets/icons/tailwind-css-brands-solid-full.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import WordpressIcon from "@/assets/icons/wordpress-brands-solid-full.svg";
import PythonIcon from "@/assets/icons/python.svg";
import CloudflareIcon from "@/assets/icons/cloudflare-brands-solid-full.svg";
import DebianIcon from "@/assets/icons/debian.svg";
import GmailIcon from "@/assets/icons/gmail.svg";
import GithubIcon from "@/assets/icons/github.svg";
import StarIcon from "@/assets/icons/star.svg";
import VegasIcon from "@/assets/icons/vegas.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ImageViewer } from "@/components/ImageViewer";
import { useEffect, useRef, useState } from "react";

const portfolioProjects = [
	{
		company: "Personal Project",
		year: "2026",
		title: "Web Portfolio 1.0",
		category: "App/Website",
		techStack: [
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
			{ title: "Next.js", iconType: NextjsIcon },
			{ title: "ReactJS", iconType: ReactIcon },
			{ title: "Tailwind CSS", iconType: TailwindCssIcon },
		],
		results: [
			{ title: "Responsive personal portfolio built with Next.js and Tailwind CSS" },
			{ title: "Interactive sections for experiences, certificates, and projects" },
			{ title: "Smooth animations and category-based project filtering" },
		],
		link: "https://rakanfadhil.com",
		githubLink: "",
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
		githubLink: "",
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
		githubLink: "",
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
		githubLink: "",
		image: sentimentAnalysisImage,
	},
	{
		company: "Personal Project",
		year: "2026",
		title: "Self-Hosted Home Server with Hyper-V & Cloudflare Tunnel",
		category: "Network",
		techStack: [
			{ title: "Debian", iconType: DebianIcon },
			{ title: "Cloudflare Tunnel", iconType: CloudflareIcon },
			{ title: "Gmail", iconType: GmailIcon },
		],
		results: [
			{ title: "Home server lab using Hyper-V virtual machines" },
			{ title: "Publish self-hosted services through Cloudflare Tunnel" },
			{ title: "Explore virtual networking and remote service access" },
		],
		link: "",
		githubLink: "",
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
		githubLink: "",
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
		if (contents.length < 2) {
			setCardHeight(0);
			return;
		}

		const measure = () => {
			const heights = contents.map((content) => {
				const card = content.parentElement;
				if (!card) return 0;
				const styles = window.getComputedStyle(card);
				if (styles.display !== "grid") return 0;
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
	}, [activeFilter]);

	return (
		<section id="projects" className="scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 pb-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Real-World Results"
					title="Featured Projects"
					description="Explore my projects in web development, data science, AI, networking, and videography."
				/>

				<div className="flex flex-wrap gap-3 mt-10 md:mt-16 justify-center ">
					{filterCategories.map((category) => (
						<button
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

				<div ref={projectsRef} className="isolate mt-10 md:mt-20 flex flex-col gap-20">
					{filteredProjects.length === 0 && (
						<p className="text-center text-sm md:text-base text-white/60">
							No projects in this category yet.
						</p>
					)}
					{filteredProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 sticky after:z-10"
							style={{
								top: `calc(64px + ${projectIndex === 1 ? 20 : projectIndex * 40}px)`,
								minHeight: cardHeight || undefined,
								zIndex: projectIndex + 1,
							}}
						>
							<div data-project-content className="lg:self-start lg:pb-16">
								<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
									<StarIcon className="size-5 shrink-0 text-emerald-300" aria-hidden="true" />
									<span>{project.company}</span>
									<span>&bull;</span>
									<span>{project.year}</span>
								</div>
								<h3 className="font-serif text-xl mt-2 md:mt-5 md:text-4xl break-words">
									{project.title}
								</h3>
								<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
								<ul className="flex flex-col gap-4 mt-4 md:mt-5">
									{project.results.map((result) => (
										<li
											key={result.title}
											className="flex gap-2 text-sm md:text-base text-white/50"
										>
											<CheckCircleIcon className="size-5 md:size-6 shrink-0" />
											<span>{result.title}</span>
										</li>
									))}
								</ul>
								{project.techStack.length > 0 && (
									<div className="mt-6">
										<p className="text-xs font-semibold text-white/60">
											{project.category === "Videography" ? "Skills" : "Tech Stack"}
										</p>
										<div className="flex flex-wrap gap-3 mt-2">
											{project.techStack.map((tech) => {
												const Icon = tech.iconType;
												return (
													<span key={tech.title} title={tech.title}>
														<Icon
															className="size-5 md:size-6 fill-current text-white/80"
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
									<div className="flex items-center gap-3 mt-8">
										{project.link ? (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
											>
												<span>View</span>
												<ArrowUpRightIcon className="size-4" />
											</a>
										) : (
											<button
												type="button"
												disabled
												className="bg-white/60 text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-not-allowed"
											>
												<span>View</span>
											</button>
										)}
										{project.githubLink && (
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`View ${project.title} on GitHub`}
												title="View GitHub Repository"
												className="bg-white text-gray-950 size-12 shrink-0 rounded-xl inline-flex items-center justify-center"
											>
												<GithubIcon className="size-5 fill-current" aria-hidden="true" />
											</a>
										)}
									</div>
								)}
							</div>
							<button
								type="button"
								onClick={() => openFullscreen(projectIndex)}
								aria-label={`View ${project.title} image`}
								className="relative flow-root w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
							>
								<Image
									src={project.image}
									alt={project.title}
									draggable={false}
									sizes="(min-width: 1200px) 1000px, (min-width: 768px) 624px, (min-width: 375px) 279px, calc(100vw - 6rem)"
									className="mt-4 -mb-4 h-auto w-full [clip-path:inset(0_round_3%/5%)] md:mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:top-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
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
				imageClassName="[clip-path:inset(0_round_3%/5%)]"
			/>
		</section>
	);
};
