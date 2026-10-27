"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useHydrated } from "@/lib/useHydrated";

export const PageLoader = ({ children }: { children: ReactNode }) => {
	const { t } = useLanguage();
	const isHydrated = useHydrated();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		const rootOverflow = document.documentElement.style.overflow;
		const bodyOverflow = document.body.style.overflow;
		let firstFrame = 0;
		let secondFrame = 0;
		let isFinishing = false;

		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";

		const restoreScrolling = () => {
			document.documentElement.style.overflow = rootOverflow;
			document.body.style.overflow = bodyOverflow;
		};

		const finish = () => {
			if (isFinishing || controller.signal.aborted) return;
			isFinishing = true;
			window.clearTimeout(timeout);
			firstFrame = window.requestAnimationFrame(() => {
				secondFrame = window.requestAnimationFrame(() => {
					restoreScrolling();
					setIsLoading(false);
				});
			});
		};

		const timeout = window.setTimeout(finish, 8000);
		const images = Array.from(document.images).filter((image) => {
			if (image.loading !== "lazy") return true;
			const bounds = image.getBoundingClientRect();
			return (
				bounds.top < window.innerHeight &&
				bounds.bottom > 0 &&
				bounds.left < window.innerWidth &&
				bounds.right > 0
			);
		});

		void Promise.allSettled([document.fonts.ready, ...images.map((image) => image.decode())]).then(
			finish,
		);

		return () => {
			controller.abort();
			window.clearTimeout(timeout);
			window.cancelAnimationFrame(firstFrame);
			window.cancelAnimationFrame(secondFrame);
			restoreScrolling();
		};
	}, []);

	return (
		<>
			<div aria-busy={isLoading} inert={isHydrated && isLoading}>
				{children}
			</div>
			<div
				id="page-loader"
				role="status"
				aria-label={t.controls.loading}
				aria-hidden={!isLoading}
				data-loading={isLoading}
				className={`fixed inset-0 z-90 flex items-center justify-center bg-gray-900 transition-opacity duration-200 motion-reduce:transition-none ${isLoading ? "opacity-100" : "pointer-events-none opacity-0"}`}
			>
				<span
					aria-hidden="true"
					className={`size-10 rounded-full border-2 border-white/15 border-t-emerald-300 ${isLoading ? "motion-safe:animate-spin" : ""}`}
				/>
			</div>
			<noscript>
				<style>{"#page-loader { display: none; }"}</style>
			</noscript>
		</>
	);
};
