import triwallImage from "@/assets/images/tri-wall-indonesia.webp";
import twnsImage from "@/assets/images/tri-wall-natura-surabaya.webp";
import bangkitImage from "@/assets/images/bangkit.webp";
import assistantImage from "@/assets/images/teaching-assistant.webp";
import emifImage from "@/assets/images/emif.webp";
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
import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";
import { CodeBracketIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import type { Translations } from "@/data/translations";

export interface Experience {
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

export const experienceAssets: Omit<
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
