"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { scrollToSection as scrollSection } from "@/lib/navigation";

const links = [
	{ id: "/", label: "home", href: "/" },
	{ id: "about", label: "about", href: "/about" },
	{ id: "experiences", label: "experiences", href: "/experience" },
	{ id: "projects", label: "projects", href: "/project" },
	{ id: "certificates", label: "certificates", href: "/certificates" },
] as const;

export const Header = () => {
	const { t } = useLanguage();
	const [active, setActive] = useState("/");
	const reduceMotion = useReducedMotion();
	const navRef = useRef<HTMLElement>(null);

	const scrollToSection = useCallback((id: string, behavior: ScrollBehavior) => {
		if (scrollSection(id, behavior)) setActive(id);
	}, []);

	const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		e.preventDefault();
		scrollToSection(id, reduceMotion ? "instant" : "smooth");
		if (window.location.pathname !== href || window.location.hash) {
			history.pushState(null, "", href);
		}
	};

	useEffect(() => {
		const sections = links.flatMap((link) => {
			const element = document.getElementById(link.id);
			return element ? [{ id: link.id, element, top: 0 }] : [];
		});
		let headerOffset = 80;
		let frameId = 0;

		const locationHandler = () => {
			const hash = window.location.hash.replace("#", "");
			const link = links.find((link) =>
				hash ? link.id === hash : link.href === window.location.pathname,
			);
			if (!link) return;
			if (hash) history.replaceState(null, "", link.href);
			scrollToSection(link.id, "instant");
		};

		const scrollHandler = () => {
			frameId = 0;
			const position = window.scrollY + headerOffset;
			for (let i = sections.length - 1; i >= 0; i--) {
				if (sections[i].top <= position) {
					setActive(sections[i].id);
					return;
				}
			}
			setActive("/");
		};
		const scheduleScroll = () => {
			if (!frameId) frameId = window.requestAnimationFrame(scrollHandler);
		};
		const observer = new ResizeObserver(() => {
			headerOffset = (navRef.current?.parentElement?.getBoundingClientRect().bottom ?? 64) + 16;
			const scrollY = window.scrollY;
			sections.forEach((section) => {
				section.top = section.element.getBoundingClientRect().top + scrollY;
			});
			scheduleScroll();
		});
		sections.forEach(({ element }) => {
			observer.observe(element);
		});
		if (navRef.current?.parentElement) observer.observe(navRef.current.parentElement);

		locationHandler();
		window.addEventListener("popstate", locationHandler);
		window.addEventListener("hashchange", locationHandler);
		window.addEventListener("scroll", scheduleScroll, { passive: true });

		return () => {
			window.removeEventListener("popstate", locationHandler);
			window.removeEventListener("hashchange", locationHandler);
			window.removeEventListener("scroll", scheduleScroll);
			window.cancelAnimationFrame(frameId);
			observer.disconnect();
		};
	}, [scrollToSection]);

	return (
		<div className="flex justify-center items-center fixed top-3 w-full z-10 max-md:inset-x-0">
			<div className="relative flex max-w-full">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm"
				/>
				<nav
					id="main-navigation"
					ref={navRef}
					aria-label={t.nav.label}
					className="relative -my-1.5 flex max-w-full overflow-x-auto gap-1 p-0.5 border border-transparent rounded-full"
				>
					{links.map((link) => (
						<a
							key={link.id}
							href={link.href}
							onClick={(e) => handleClick(e, link.id, link.href)}
							aria-current={active === link.id ? "location" : undefined}
							className={`nav-item group shrink-0 whitespace-nowrap max-md:px-1.5 max-md:text-[11px] ${
								active === link.id ? "text-gray-900 hover:text-gray-900" : ""
							}`}
						>
							<span
								aria-hidden="true"
								className={`pointer-events-none absolute inset-x-0 inset-y-1.5 -z-10 rounded-full transition duration-300 ${active === link.id ? "bg-white group-hover:bg-white/70" : "group-hover:bg-white/10"}`}
							/>
							{t.nav[link.label]}
						</a>
					))}
				</nav>
			</div>
		</div>
	);
};
