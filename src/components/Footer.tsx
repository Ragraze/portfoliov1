"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "simple-icons/icons/github.svg";
import WhatsappIcon from "simple-icons/icons/whatsapp.svg";
import GmailIcon from "simple-icons/icons/gmail.svg";
import { useLanguage } from "@/lib/LanguageContext";

const footerLinks = [
	{ title: "LinkedIn", href: "https://www.linkedin.com/in/rakanfadhilp/", iconType: LinkedinIcon },
	{ title: "GitHub", href: "https://github.com/Ragraze", iconType: GithubIcon },
	{ title: "WhatsApp", href: "https://wa.me/6285157573405", iconType: WhatsappIcon },
	{
		title: "Email",
		href: "mailto:rakanfadhilp@gmail.com",
		iconType: GmailIcon,
	},
];

export const Footer = () => {
	const { t } = useLanguage();
	return (
		<footer className="relative z-0 overflow-x-clip">
			<div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
			<div className="container">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-8">
					<div className="text-white/40">
						&copy; {new Date().getFullYear()}. {t.footer.rights}
					</div>
					<nav className="flex items-center gap-4 md:gap-8" aria-label={t.footer.socialLinks}>
						{footerLinks.map(({ title, href, iconType: Icon }) => (
							<a
								href={href}
								key={title}
								aria-label={title}
								title={title}
								className="group inline-flex items-center justify-center gap-1.5 max-md:size-11"
							>
								<Icon className="size-6 fill-current md:hidden" aria-hidden="true" />
								<span className="hidden md:inline-block relative z-10 font-semibold">
									{title}
									<span
										aria-hidden
										className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
									>
										<span className="block h-full w-[200%] -translate-x-1/2 bg-linear-to-r/srgb from-emerald-300 via-cyan-300 to-blue-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
									</span>
								</span>
								<ArrowUpRightIcon
									className="hidden md:block size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									strokeWidth={2}
								/>
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
