"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import { Card } from "@/components/Card";
import profile from "@/assets/images/profile.webp";
import Image from "next/image";
import JavascriptIcon from "simple-icons/icons/javascript.svg";
import TypescriptIcon from "simple-icons/icons/typescript.svg";
import ReactIcon from "simple-icons/icons/react.svg";
import FramerIcon from "simple-icons/icons/framer.svg";
import GithubIcon from "simple-icons/icons/github.svg";
import CssIcon from "simple-icons/icons/css.svg";
import HTMLIcon from "simple-icons/icons/html5.svg";
import LaravelIcon from "simple-icons/icons/laravel.svg";
import FigmaIcon from "simple-icons/icons/figma.svg";
import CanvaIcon from "@/assets/icons/canva.svg";
import CloudflareIcon from "simple-icons/icons/cloudflare.svg";
import NodeIcon from "simple-icons/icons/nodedotjs.svg";
import ExpressIcon from "simple-icons/icons/express.svg";
import WordpressIcon from "simple-icons/icons/wordpress.svg";
import TailwindCssIcon from "simple-icons/icons/tailwindcss.svg";
import PhpIcon from "simple-icons/icons/php.svg";
import FirebaseIcon from "simple-icons/icons/firebase.svg";
import GoogleCloudIcon from "simple-icons/icons/googlecloud.svg";
import NextjsIcon from "simple-icons/icons/nextdotjs.svg";
import ProxmoxIcon from "simple-icons/icons/proxmox.svg";
import LinuxIcon from "simple-icons/icons/linux.svg";
import WindowsIcon from "@/assets/icons/windows.svg";
import GitIcon from "simple-icons/icons/git.svg";
import BootstrapIcon from "simple-icons/icons/bootstrap.svg";
import OpencodeIcon from "simple-icons/icons/opencode.svg";
import PostgresqlIcon from "simple-icons/icons/postgresql.svg";
import DockerIcon from "simple-icons/icons/docker.svg";
import ViteIcon from "simple-icons/icons/vite.svg";
import ObsStudioIcon from "simple-icons/icons/obsstudio.svg";
import VegasIcon from "simple-icons/icons/vegas.svg";
import ClaudeCodeIcon from "simple-icons/icons/claudecode.svg";
import PythonIcon from "simple-icons/icons/python.svg";
import AstroIcon from "simple-icons/icons/astro.svg";
import VercelIcon from "simple-icons/icons/vercel.svg";
import MongodbIcon from "simple-icons/icons/mongodb.svg";
import AlibabaCloudIcon from "simple-icons/icons/alibabacloud.svg";
import CiscoIcon from "simple-icons/icons/cisco.svg";
import VisualStudioCodeIcon from "@/assets/icons/visual-studio-code.svg";
import CursorIcon from "simple-icons/icons/cursor.svg";
import FlaskIcon from "simple-icons/icons/flask.svg";
import CodexIcon from "@/assets/icons/codex.svg";
import mapImage from "@/assets/images/map.webp";
import smileMemoji from "@/assets/images/memoji-smile.webp";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const topToolboxItems = [
	{ title: "Git", iconType: GitIcon },
	{ title: "GitHub", iconType: GithubIcon },
	{ title: "Visual Studio Code", iconType: VisualStudioCodeIcon },
	{ title: "Figma", iconType: FigmaIcon },
	{ title: "Canva", iconType: CanvaIcon },
	{ title: "OBS Studio", iconType: ObsStudioIcon },
	{ title: "VEGAS Pro", iconType: VegasIcon },
	{ title: "WordPress", iconType: WordpressIcon },
	{ title: "Vite", iconType: ViteIcon },
	{ title: "Docker", iconType: DockerIcon },
	{ title: "Proxmox", iconType: ProxmoxIcon },
	{ title: "Linux", iconType: LinuxIcon },
	{ title: "Windows", iconType: WindowsIcon },
	{ title: "PostgreSQL", iconType: PostgresqlIcon },
	{ title: "MongoDB", iconType: MongodbIcon },
	{ title: "Firebase", iconType: FirebaseIcon },
	{ title: "Google Cloud", iconType: GoogleCloudIcon },
	{ title: "Alibaba Cloud", iconType: AlibabaCloudIcon },
	{ title: "Cloudflare", iconType: CloudflareIcon },
	{ title: "Vercel", iconType: VercelIcon },
	{ title: "Claude Code", iconType: ClaudeCodeIcon },
	{ title: "Codex", iconType: CodexIcon },
	{ title: "Cursor", iconType: CursorIcon },
	{ title: "OpenCode", iconType: OpencodeIcon },
	{ title: "Cisco", iconType: CiscoIcon },
];

const bottomToolboxItems = [
	{ title: "JavaScript", iconType: JavascriptIcon },
	{ title: "TypeScript", iconType: TypescriptIcon },
	{ title: "Python", iconType: PythonIcon },
	{ title: "PHP", iconType: PhpIcon },
	{ title: "HTML5", iconType: HTMLIcon },
	{ title: "CSS3", iconType: CssIcon },
	{ title: "ReactJS", iconType: ReactIcon },
	{ title: "Framer Motion", iconType: FramerIcon },
	{ title: "Next.js", iconType: NextjsIcon },
	{ title: "Astro", iconType: AstroIcon },
	{ title: "Laravel", iconType: LaravelIcon },
	{ title: "Node.js", iconType: NodeIcon },
	{ title: "Express.js", iconType: ExpressIcon },
	{ title: "Flask", iconType: FlaskIcon },
	{ title: "Tailwind CSS", iconType: TailwindCssIcon },
	{ title: "Bootstrap", iconType: BootstrapIcon },
];

export const AboutSection = () => {
	const { t } = useLanguage();
	const v = {
		up: { hidden: { y: -40, opacity: 0 }, show: { y: 0, opacity: 1 } },
		right: { hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1 } },
		left: { hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1 } },
		down: { hidden: { y: 60, opacity: 0 }, show: { y: 0, opacity: 1 } },
	};
	const spring = { type: "spring", stiffness: 120, damping: 18 };

	return (
		<section
			id="about"
			className="relative scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-16 md:py-20 lg:py-28"
		>
			<SectionBackground />
			<div className="container tablet-portrait:max-w-5xl">
				<SectionHeader
					eyebrow={t.about.eyebrow}
					title={t.about.title}
					description={t.about.description}
				/>

				<div className="mt-10 md:mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 tablet-portrait:grid-cols-2">
						<motion.div
							variants={v.up}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-2 lg:col-span-1 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:-1.5deg] h-[320px]">
								<CardHeader
									title={t.about.profile}
									description=""
									className="tablet-portrait:px-6"
								/>
								<div className="w-52 mx-auto -mt-12 flex-1 flex items-start justify-center">
									<Image src={profile} alt="Rakan Fadhil Prayata" sizes="208px" />
								</div>
							</Card>
						</motion.div>

						<motion.div
							variants={v.right}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.12 }}
							className="md:col-span-3 lg:col-span-2 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:1.5deg] pb-4 md:h-[320px] md:pb-0 tablet-portrait:h-[320px] tablet-portrait:pb-0">
								<CardHeader
									title={t.about.techStack}
									description=""
									className="p-4 tablet-portrait:py-8 tablet-portrait:px-10"
								/>
								<ToolboxItems
									items={topToolboxItems}
									itemsWrapperClassName="animate-move-left [animation-duration:100s] hover:[animation-play-state:paused]"
								/>
								<ToolboxItems
									items={bottomToolboxItems}
									className="mt-4 md:mt-6 tablet-portrait:mt-6"
									itemsWrapperClassName="animate-move-right [animation-duration:64s] hover:[animation-play-state:paused]"
								/>
							</Card>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 tablet-portrait:grid-cols-2">
						<motion.div
							variants={v.left}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-3 lg:col-span-2 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:1.5deg] min-h-[320px] p-0 flex flex-col">
								<CardHeader
									title={t.about.myself}
									description=""
									className="px-6 pt-6 pb-0 md:pt-8 md:pb-0 lg:pt-10"
								/>
								<div>
									<p className="px-6 pt-2 pb-6 text-[13px] md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base text-white/60 tablet-portrait:px-6 tablet-portrait:pb-6 tablet-portrait:text-[13px]">
										{t.about.biography.map((part) =>
											part.strong ? (
												<strong key={part.text} className="font-bold text-gray-300">
													{part.text}
												</strong>
											) : (
												<Fragment key={part.text}>{part.text}</Fragment>
											),
										)}
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div
							variants={v.down}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.1 }}
							transition={{ ...spring, delay: 0.12 }}
							className="md:col-span-2 lg:col-span-1 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:-1.5deg] h-[320px] p-0 relative tablet-portrait:h-full tablet-portrait:min-h-[320px]">
								<Image
									src={mapImage}
									alt={t.about.mapAlt}
									sizes="(min-width: 1024px) and (orientation: portrait) and (pointer: coarse) 464px, (min-width: 768px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 3rem), (min-width: 600px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 2rem), (min-width: 1200px) 304px, (min-width: 768px) 40vw, 100vw"
									className="h-full w-full object-cover object-left-top md:object-center tablet-portrait:origin-right tablet-portrait:scale-115"
								/>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full">
									<div className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
									<div className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-10" />
									<Image
										src={smileMemoji}
										alt={t.about.memojiAlt}
										className="size-12"
										sizes="48px"
									/>
								</div>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
