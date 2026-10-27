"use client";

import { ArrowDownIcon as ArrowDown } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { AudioPlayer } from "@/components/AudioPlayer";
import { LanguageToggle } from "@/components/LanguageToggle";
import { FloatingButton } from "@/components/FloatingButton";
import { scrollToSection } from "@/lib/navigation";

export const ScrollToTop = () => {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [isHiddenAtFooter, setIsHiddenAtFooter] = useState(false);
	const containerRef = useRef<HTMLFieldSetElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const isHover = useRef(false);
	const pointerType = useRef("");
	const touchShouldOpen = useRef(false);
	const controlsId = useId();
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		const footer = document.querySelector("footer");
		if (!footer) return;

		const mobileQuery = window.matchMedia("(max-width: 767.98px)");
		const tabletPortraitQuery = window.matchMedia(
			"(min-width: 600px) and (orientation: portrait) and (pointer: coarse)",
		);
		let isFooterVisible = false;
		const updateVisibility = () => {
			const shouldHide = mobileQuery.matches && !tabletPortraitQuery.matches && isFooterVisible;
			setIsHiddenAtFooter(shouldHide);
			if (shouldHide) {
				isHover.current = false;
				setIsOpen(false);
			}
		};
		const observer = new IntersectionObserver(([entry]) => {
			isFooterVisible = entry.isIntersecting;
			updateVisibility();
		});
		observer.observe(footer);
		mobileQuery.addEventListener("change", updateVisibility);
		tabletPortraitQuery.addEventListener("change", updateVisibility);

		return () => {
			observer.disconnect();
			mobileQuery.removeEventListener("change", updateVisibility);
			tabletPortraitQuery.removeEventListener("change", updateVisibility);
		};
	}, []);

	const closeControls = useCallback(() => {
		if (containerRef.current?.contains(document.activeElement)) {
			buttonRef.current?.focus({ preventScroll: true });
		}
		setIsOpen(false);
	}, []);

	useEffect(() => {
		const handlePointerDown = (event: PointerEvent) => {
			if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
				closeControls();
			}
		};
		document.addEventListener("pointerdown", handlePointerDown);
		return () => document.removeEventListener("pointerdown", handlePointerDown);
	}, [closeControls]);

	return (
		<fieldset
			ref={containerRef}
			aria-label={t.controls.scrollToTop}
			inert={isHiddenAtFooter}
			className={`fixed bottom-4 right-4 z-40 size-12 min-w-0 transition-opacity duration-300 motion-reduce:transition-none md:bottom-6 md:right-6 ${isHiddenAtFooter ? "pointer-events-none opacity-0" : "opacity-100"}`}
			onPointerEnter={(event) => {
				if (event.pointerType === "touch") return;
				isHover.current = true;
				setIsOpen(true);
			}}
			onPointerLeave={(event) => {
				if (event.pointerType === "touch") return;
				isHover.current = false;
				if (!containerRef.current?.querySelector(":focus-visible")) closeControls();
			}}
			onFocusCapture={(event) => {
				if (event.target.matches(":focus-visible")) setIsOpen(true);
			}}
			onBlurCapture={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget) && !isHover.current) {
					setIsOpen(false);
				}
			}}
			onKeyDown={(event) => {
				if (event.key === "Escape") closeControls();
			}}
		>
			<FloatingButton
				ref={buttonRef}
				aria-label={t.controls.scrollToTop}
				aria-expanded={isOpen}
				aria-controls={controlsId}
				onPointerDown={(event) => {
					pointerType.current = event.pointerType;
					touchShouldOpen.current = event.pointerType === "touch" && !isOpen;
				}}
				onClick={(event) => {
					const isTouch = pointerType.current === "touch" && event.detail > 0;
					if (isTouch && touchShouldOpen.current) {
						setIsOpen(true);
						return;
					}
					scrollToSection("/", reduceMotion ? "instant" : "smooth");
					if (window.location.pathname !== "/" || window.location.hash) {
						history.pushState(null, "", "/");
					}
					if (isTouch) setIsOpen(false);
				}}
			>
				<ArrowDown className="size-5 rotate-180" />
			</FloatingButton>

			<div
				id={controlsId}
				aria-hidden={!isOpen}
				className={`absolute inset-x-0 bottom-full flex flex-col-reverse items-center gap-4 pb-4 ${isOpen ? "" : "pointer-events-none"}`}
			>
				<motion.div
					className="flex"
					initial={false}
					animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 64, scale: isOpen ? 1 : 0.85 }}
					transition={{
						duration: reduceMotion ? 0 : 0.25,
						delay: reduceMotion || isOpen ? 0 : 0.05,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<AudioPlayer isVisible={isOpen} />
				</motion.div>
				<motion.div
					className="flex"
					initial={false}
					animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 128, scale: isOpen ? 1 : 0.85 }}
					transition={{
						duration: reduceMotion ? 0 : 0.25,
						delay: reduceMotion || !isOpen ? 0 : 0.05,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<LanguageToggle isVisible={isOpen} />
				</motion.div>
			</div>
		</fieldset>
	);
};
