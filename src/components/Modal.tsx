"use client";

import { useEffect, useRef, type KeyboardEvent, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const focusableSelector = [
	"button:not([disabled])",
	"a[href]",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	'[tabindex]:not([tabindex="-1"])',
].join(", ");

export const Modal = ({
	children,
	onClose,
	label,
	className,
	onKeyDown,
}: {
	children: ReactNode;
	onClose: () => void;
	label: string;
	className?: string;
	onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
}) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const activeElement = document.activeElement;
		const rootOverflow = document.documentElement.style.overflow;
		const bodyOverflow = document.body.style.overflow;
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";
		const firstElement = dialogRef.current?.querySelector<HTMLElement>(focusableSelector);
		(firstElement ?? dialogRef.current)?.focus({ preventScroll: true });

		return () => {
			document.documentElement.style.overflow = rootOverflow;
			document.body.style.overflow = bodyOverflow;
			if (activeElement instanceof HTMLElement) {
				activeElement.focus({ preventScroll: true });
			}
		};
	}, []);

	return (
		<div
			ref={dialogRef}
			role="dialog"
			aria-modal="true"
			aria-label={label}
			tabIndex={-1}
			onKeyDown={(event) => {
				onKeyDown?.(event);
				if (event.defaultPrevented) return;
				if (event.key === "Escape") {
					event.preventDefault();
					onClose();
				} else if (event.key === "Tab") {
					const elements = Array.from(
						dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
					).filter((element) => element.getClientRects().length > 0);
					if (elements.length === 0) {
						event.preventDefault();
						dialogRef.current?.focus();
						return;
					}
					const index = elements.indexOf(document.activeElement as HTMLElement);
					if (event.shiftKey && index <= 0) {
						event.preventDefault();
						elements[elements.length - 1].focus();
					} else if (!event.shiftKey && (index < 0 || index === elements.length - 1)) {
						event.preventDefault();
						elements[0].focus();
					}
				}
			}}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
			className={twMerge("fixed inset-0 z-50 flex items-center justify-center", className)}
		>
			{children}
		</div>
	);
};
