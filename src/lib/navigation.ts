export const scrollToSection = (id: string, behavior: ScrollBehavior) => {
	const target = document.getElementById(id);
	if (!target) return;
	const nav = document.getElementById("main-navigation");
	const headerOffset = (nav?.parentElement?.getBoundingClientRect().bottom ?? 64) + 16;
	const elementPosition = target.getBoundingClientRect().top + window.scrollY;
	window.scrollTo({ top: Math.max(0, elementPosition - headerOffset), behavior });
};
