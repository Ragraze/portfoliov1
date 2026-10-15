"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionStars } from "@/components/SectionStars";
import { Card } from "@/components/Card";
import profile from "@/assets/images/Profile.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CssIcon from "@/assets/icons/css3.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import LaravelIcon from "@/assets/icons/laravel-brands-solid-full.svg";
import FigmaIcon from "@/assets/icons/figma-brands-solid-full.svg";
import CanvaIcon from "@/assets/icons/canva.svg";
import CloudflareIcon from "@/assets/icons/cloudflare-brands-solid-full.svg";
import NodeIcon from "@/assets/icons/node-brands-solid-full.svg";
import WordpressIcon from "@/assets/icons/wordpress-brands-solid-full.svg";
import TailwindCssIcon from "@/assets/icons/tailwind-css-brands-solid-full.svg";
import PhpIcon from "@/assets/icons/php-brands-solid-full.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import GoogleCloudIcon from "@/assets/icons/googlecloud.svg";
import NextjsIcon from "@/assets/icons/nextdotjs.svg";
import ProxmoxIcon from "@/assets/icons/proxmox.svg";
import DebianIcon from "@/assets/icons/debian.svg";
import GitIcon from "@/assets/icons/git.svg";
import BootstrapIcon from "@/assets/icons/bootstrap-brands-solid-full.svg";
import OpencodeIcon from "@/assets/icons/opencode.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import DockerIcon from "@/assets/icons/docker-brands-solid-full.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import ObsStudioIcon from "@/assets/icons/obsstudio.svg";
import VegasIcon from "@/assets/icons/vegas.svg";
import ClaudeCodeIcon from "@/assets/icons/claudecode.svg";
import PythonIcon from "@/assets/icons/python.svg";
import AstroIcon from "@/assets/icons/astro.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import AlibabaCloudIcon from "@/assets/icons/alibabacloud.svg";
import CiscoIcon from "@/assets/icons/cisco.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

const topToolboxItems = [
	{ title: "Git", iconType: GitIcon },
	{ title: "GitHub", iconType: GithubIcon },
	{ title: "Figma", iconType: FigmaIcon },
	{ title: "Canva", iconType: CanvaIcon },
	{ title: "OBS Studio", iconType: ObsStudioIcon },
	{ title: "VEGAS Pro", iconType: VegasIcon },
	{ title: "WordPress", iconType: WordpressIcon },
	{ title: "Vite", iconType: ViteIcon },
	{ title: "Docker", iconType: DockerIcon },
	{ title: "Proxmox", iconType: ProxmoxIcon },
	{ title: "Debian", iconType: DebianIcon },
	{ title: "PostgreSQL", iconType: PostgresqlIcon },
	{ title: "MongoDB", iconType: MongodbIcon },
	{ title: "Firebase", iconType: FirebaseIcon },
	{ title: "Google Cloud", iconType: GoogleCloudIcon },
	{ title: "Alibaba Cloud", iconType: AlibabaCloudIcon },
	{ title: "Cloudflare", iconType: CloudflareIcon },
	{ title: "Vercel", iconType: VercelIcon },
	{ title: "Claude Code", iconType: ClaudeCodeIcon },
	{ title: "OpenCode", iconType: OpencodeIcon },
	{ title: "Cisco", iconType: CiscoIcon },
];

const bottomToolboxItems = [
	{ title: "JavaScript", iconType: JavascriptIcon },
	{ title: "Python", iconType: PythonIcon },
	{ title: "PHP", iconType: PhpIcon },
	{ title: "HTML5", iconType: HTMLIcon },
	{ title: "CSS3", iconType: CssIcon },
	{ title: "ReactJS", iconType: ReactIcon },
	{ title: "Next.js", iconType: NextjsIcon },
	{ title: "Astro", iconType: AstroIcon },
	{ title: "Laravel", iconType: LaravelIcon },
	{ title: "Node.js", iconType: NodeIcon },
	{ title: "Tailwind CSS", iconType: TailwindCssIcon },
	{ title: "Bootstrap", iconType: BootstrapIcon },
];

export const AboutSection = () => {
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
			className="relative scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-20 lg:py-28"
		>
			<SectionStars />
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My World"
					description="Get to know me a bit better"
				/>

				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<motion.div
							variants={v.up}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-2 lg:col-span-1"
						>
							<Card className="h-[320px]">
								<CardHeader title="Profile" description="" />
								<div className="w-52 mx-auto -mt-12 flex-1 flex items-start justify-center">
									<Image src={profile} alt="book" />
								</div>
							</Card>
						</motion.div>

						<motion.div
							variants={v.right}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.12 }}
							className="md:col-span-3 lg:col-span-2"
						>
							<Card className="pb-4 md:h-[320px] md:pb-0">
								<CardHeader title="Tech Stack" description="" className="p-4" />
								<ToolboxItems
									items={topToolboxItems}
									className=""
									itemsWrapperClassName="animate-move-left [animation-duration:84s] hover:[animation-play-state:paused]"
								/>
								<ToolboxItems
									items={bottomToolboxItems}
									className="mt-4 md:mt-6"
									itemsWrapperClassName="animate-move-right [animation-duration:56s] hover:[animation-play-state:paused]"
								/>
							</Card>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
						<motion.div
							variants={v.left}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-3 lg:col-span-2"
						>
							<Card className="min-h-[320px] p-0 flex flex-col">
								<CardHeader
									title="About Myself"
									description=""
									className="px-6 pt-6 pb-0 md:pt-8 md:pb-0 lg:pt-10"
								/>
								<div>
									<p className="px-6 pt-2 pb-6 text-[13px] md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base text-white/60">
										Hi, I’m Rakan Fadhil Prayata — an Informatics Engineering (GPA 3.56) graduate
										from Universitas Brawijaya. During my internships, I built multilingual company
										websites, supported IT operations, and produced a safety induction video. I also
										worked on a capstone project through Bangkit Academy and helped students learn
										web programming as a teaching assistant at my faculty. My thesis focused on
										analyzing public sentiment using NLP and machine learning. Currently, I’m
										interested in self-hosting and running a home server.
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
							className="md:col-span-2 lg:col-span-1"
						>
							<Card className="h-[320px] p-0 relative">
								<Image
									src={mapImage}
									alt="map"
									className="h-full w-full object-cover object-left-top md:object-center"
								/>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full  after:content-[''] after:absolute after: inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-20 animate-ping [animation-duration:2s]"></div>
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400  -z-10"></div>
									<Image src={smileMemoji} alt="smile memoji" className="size-12" />
								</div>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
