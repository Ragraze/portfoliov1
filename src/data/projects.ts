import portfolioImage from "@/assets/images/portfolio.webp";
import codeventureImage from "@/assets/images/codeventure.webp";
import flavoryImage from "@/assets/images/flavory.webp";
import homeServerTopology from "@/assets/images/home-server-topology.webp";
import sentimentAnalysisImage from "@/assets/images/ikn-sentiment-analysis.webp";
import agrisenseImage from "@/assets/images/agrisense.webp";
import osteoporosisImage from "@/assets/images/classify-osteoporosis.webp";
import twiLandingPage from "@/assets/images/tri-wall-indonesia-landing-page.webp";
import twnsLandingPage from "@/assets/images/tri-wall-natura-surabaya-landing-page.webp";
import inductionImage from "@/assets/images/safety-induction.webp";
import NextjsIcon from "simple-icons/icons/nextdotjs.svg";
import ReactIcon from "simple-icons/icons/react.svg";
import FramerIcon from "simple-icons/icons/framer.svg";
import TailwindCssIcon from "simple-icons/icons/tailwindcss.svg";
import HTMLIcon from "simple-icons/icons/html5.svg";
import CssIcon from "simple-icons/icons/css.svg";
import JavascriptIcon from "simple-icons/icons/javascript.svg";
import PhpIcon from "simple-icons/icons/php.svg";
import LaravelIcon from "simple-icons/icons/laravel.svg";
import TypescriptIcon from "simple-icons/icons/typescript.svg";
import WordpressIcon from "simple-icons/icons/wordpress.svg";
import PythonIcon from "simple-icons/icons/python.svg";
import PytorchIcon from "simple-icons/icons/pytorch.svg";
import HuggingFaceIcon from "simple-icons/icons/huggingface.svg";
import NumpyIcon from "simple-icons/icons/numpy.svg";
import TensorflowIcon from "simple-icons/icons/tensorflow.svg";
import UltralyticsIcon from "simple-icons/icons/ultralytics.svg";
import FlaskIcon from "simple-icons/icons/flask.svg";
import DjangoIcon from "simple-icons/icons/django.svg";
import NuxtIcon from "simple-icons/icons/nuxt.svg";
import VueIcon from "simple-icons/icons/vuedotjs.svg";
import ViteIcon from "simple-icons/icons/vite.svg";
import DockerIcon from "simple-icons/icons/docker.svg";
import CloudflareIcon from "simple-icons/icons/cloudflare.svg";
import LinuxIcon from "simple-icons/icons/linux.svg";
import GmailIcon from "simple-icons/icons/gmail.svg";
import VegasIcon from "simple-icons/icons/vegas.svg";
import type { Translations } from "@/data/translations";
import type { StaticImageData } from "next/image";
import type { ElementType } from "react";

export const filterCategories = [
	"App/Website",
	"Data Science/AI",
	"Network",
	"Digital Content",
] as const;

export type ProjectCategory = (typeof filterCategories)[number];

export const projectAssets = [
	{
		id: "portfolio" as const,
		year: "2026",
		category: "App/Website",
		techStack: [
			{ title: "Next.js", iconType: NextjsIcon },
			{ title: "ReactJS", iconType: ReactIcon },
			{ title: "TypeScript", iconType: TypescriptIcon },
			{ title: "Tailwind CSS", iconType: TailwindCssIcon },
			{ title: "Framer Motion", iconType: FramerIcon },
			{ title: "Docker", iconType: DockerIcon },
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
		id: "codeventure" as const,
		year: "2023",
		category: "App/Website",
		techStack: [
			{ title: "PHP", iconType: PhpIcon },
			{ title: "Laravel", iconType: LaravelIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
			{ title: "Vite", iconType: ViteIcon },
			{ title: "Docker", iconType: DockerIcon },
		],
		link: "https://github.com/Ragraze/codeventure",
		image: codeventureImage,
	},
	{
		id: "flavory" as const,
		year: "2023",
		category: "App/Website",
		techStack: [
			{ title: "PHP", iconType: PhpIcon },
			{ title: "Laravel", iconType: LaravelIcon },
			{ title: "HTML", iconType: HTMLIcon },
			{ title: "CSS", iconType: CssIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
			{ title: "Vite", iconType: ViteIcon },
			{ title: "Docker", iconType: DockerIcon },
		],
		link: "https://github.com/Ragraze/flavory",
		image: flavoryImage,
	},
	{
		id: "sentiment" as const,
		year: "2025",
		category: "Data Science/AI",
		techStack: [
			{ title: "Python", iconType: PythonIcon },
			{ title: "PyTorch", iconType: PytorchIcon },
			{ title: "Hugging Face Transformers", iconType: HuggingFaceIcon },
			{ title: "NumPy", iconType: NumpyIcon },
			{ title: "Flask", iconType: FlaskIcon },
			{ title: "Next.js", iconType: NextjsIcon },
			{ title: "ReactJS", iconType: ReactIcon },
			{ title: "TypeScript", iconType: TypescriptIcon },
			{ title: "Docker", iconType: DockerIcon },
		],
		link: "https://github.com/Ragraze/ikn-sentiment-analysis",
		image: sentimentAnalysisImage,
	},
	{
		id: "agrisense" as const,
		year: "2024",
		category: "Data Science/AI",
		techStack: [
			{ title: "Python", iconType: PythonIcon },
			{ title: "TensorFlow Lite", iconType: TensorflowIcon },
			{ title: "NumPy", iconType: NumpyIcon },
			{ title: "Flask", iconType: FlaskIcon },
			{ title: "Nuxt", iconType: NuxtIcon },
			{ title: "Vue.js", iconType: VueIcon },
			{ title: "TypeScript", iconType: TypescriptIcon },
			{ title: "Docker", iconType: DockerIcon },
		],
		link: "https://github.com/Ragraze/agrisense-webapp",
		image: agrisenseImage,
	},
	{
		id: "osteoporosis" as const,
		year: "2023",
		category: "Data Science/AI",
		techStack: [
			{ title: "Python", iconType: PythonIcon },
			{ title: "PyTorch", iconType: PytorchIcon },
			{ title: "Ultralytics YOLOv8", iconType: UltralyticsIcon },
			{ title: "Django", iconType: DjangoIcon },
			{ title: "ReactJS", iconType: ReactIcon },
			{ title: "JavaScript", iconType: JavascriptIcon },
			{ title: "Vite", iconType: ViteIcon },
			{ title: "Docker", iconType: DockerIcon },
		],
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
] satisfies {
	id: keyof Translations["projects"]["items"];
	category: ProjectCategory;
	year: string;
	techStack: { title: string; iconType: ElementType }[];
	link: string;
	image: StaticImageData;
}[];
