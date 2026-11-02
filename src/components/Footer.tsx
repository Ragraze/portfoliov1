"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { scrollToSection } from "@/lib/navigation";

const footerLinks = [
	{ title: "LinkedIn", href: "https://www.linkedin.com/in/rakanfadhilp/" },
	{ title: "GitHub", href: "https://github.com/Ragraze" },
	{ title: "WhatsApp", href: "https://wa.me/6285157573405" },
	{
		title: "Email",
		href: "mailto:rakanfadhilp@gmail.com",
	},
];

export const Footer = () => {
	const { t } = useLanguage();
	const reduceMotion = useReducedMotion();
	return (
		<footer className="relative z-0 overflow-hidden">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_80%)]"
			>
				<div className="absolute inset-0 bg-gray-950/70" />
				<div className="footer-glow absolute bottom-0 left-1/4 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
				<div className="footer-glow absolute bottom-0 left-3/4 h-[400px] w-[1600px] -translate-x-1/2 bg-sky-400/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
			</div>
			<div className="footer-container">
				<div className="footer-layout text-sm">
					<p className="footer-copyright">
						&copy; {new Date().getFullYear()} {t.footer.rights}
					</p>
					<nav className="footer-socials" aria-label={t.footer.socialLinks}>
						{footerLinks.map(({ title, href }) => (
							<div key={title} className="inline-flex items-center gap-4">
								<a
									href={href}
									aria-label={title}
									title={title}
									className="footer-social-link group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
								>
									<span className="footer-social-label relative z-10">
										{title}
										<span
											aria-hidden
											className="footer-social-underline pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
										>
											<span className="block h-full w-[200%] -translate-x-1/2 bg-linear-to-r/srgb from-emerald-300 via-cyan-300 to-blue-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
										</span>
									</span>
									<ArrowUpRightIcon
										aria-hidden="true"
										className="footer-social-arrow size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
										strokeWidth={2}
									/>
								</a>
								{title === "Email" && (
									<button
										type="button"
										className="footer-social-link group md:hidden tablet-portrait:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
										onClick={() => {
											scrollToSection("/", reduceMotion ? "instant" : "smooth");
											if (window.location.pathname !== "/" || window.location.hash) {
												history.pushState(null, "", "/");
											}
										}}
									>
										<span className="footer-social-label relative z-10 whitespace-nowrap">
											{t.footer.backToTop}
											<span
												aria-hidden
												className="footer-social-underline pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
											>
												<span className="block h-full w-[200%] -translate-x-1/2 bg-linear-to-r/srgb from-emerald-300 via-cyan-300 to-blue-500 transition-transform duration-500 ease-out group-hover:translate-x-0" />
											</span>
										</span>
										<ArrowUpRightIcon
											aria-hidden="true"
											className="footer-social-arrow size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
											strokeWidth={2}
										/>
									</button>
								)}
							</div>
						))}
					</nav>
				</div>
			</div>
			<div aria-hidden="true" className="relative -mb-[2.5vw] pt-[1vw] select-none">
				<p className="whitespace-nowrap text-center text-[8.3vw] font-bold leading-[0.9] tracking-[-0.045em] text-white/20">
					RAKAN FADHIL PRAYATA
				</p>
			</div>
		</footer>
	);
};
