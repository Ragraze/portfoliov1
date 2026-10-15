"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const links = [
	{ id: "/", label: "Home", href: "/" },
	{ id: "about", label: "About", href: "/about" },
	{ id: "experiences", label: "Experiences", href: "/experience" },
	{ id: "projects", label: "Projects", href: "/project" },
	{ id: "certificates", label: "Certificates", href: "/certificates" },
];

export const Header = () => {
	const [active, setActive] = useState<string>("/");
	const navRef = useRef<HTMLElement>(null);

	const scrollToSection = useCallback((id: string, behavior: ScrollBehavior) => {
		const target = document.getElementById(id);
		if (!target) return;
		const headerOffset = (navRef.current?.getBoundingClientRect().bottom ?? 64) + 16;
		const elementPosition = target.getBoundingClientRect().top + window.scrollY;
		const offsetPosition = Math.max(0, elementPosition - headerOffset);
		window.scrollTo({ top: offsetPosition, behavior });
		setActive(id);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		e.preventDefault();
		scrollToSection(id, "smooth");
		if (window.location.pathname !== href || window.location.hash) {
			history.pushState(null, "", href);
		}
	};

	useEffect(() => {
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
			const headerOffset = (navRef.current?.getBoundingClientRect().bottom ?? 64) + 16;
			let found = false;
			for (let i = links.length - 1; i >= 0; i--) {
				const section = document.getElementById(links[i].id);
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= headerOffset) {
						setActive(links[i].id);
						found = true;
						break;
					}
				}
			}
			if (!found) setActive("/");
		};

		scrollHandler();
		locationHandler();
		window.addEventListener("popstate", locationHandler);
		window.addEventListener("hashchange", locationHandler);
		window.addEventListener("scroll", scrollHandler, { passive: true });
		window.addEventListener("resize", scrollHandler);

		return () => {
			window.removeEventListener("popstate", locationHandler);
			window.removeEventListener("hashchange", locationHandler);
			window.removeEventListener("scroll", scrollHandler);
			window.removeEventListener("resize", scrollHandler);
		};
	}, [scrollToSection]);

	return (
		<div className="flex justify-center items-center fixed top-3 w-full z-10 max-md:inset-x-0">
			<nav
				ref={navRef}
				className="flex max-w-full overflow-x-auto gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
			>
				{links.map((link) => (
					<a
						key={link.id}
						href={link.href}
						onClick={(e) => handleClick(e, link.id, link.href)}
						aria-current={active === link.id ? "location" : undefined}
						className={`nav-item shrink-0 whitespace-nowrap max-md:px-1.5 max-md:text-[11px] ${
							active === link.id
								? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
								: ""
						}`}
					>
						{link.label}
					</a>
				))}
			</nav>
		</div>
	);
};
