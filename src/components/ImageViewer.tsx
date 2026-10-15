"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ViewerImage {
	title: string;
	image: string | StaticImageData;
}

interface ImageViewerProps {
	isOpen: boolean;
	onClose: () => void;
	images: ViewerImage[];
	currentIndex: number;
	onNext: () => void;
	onPrev: () => void;
	label: string;
	imageClassName?: string;
}

export const ImageViewer = ({
	isOpen,
	onClose,
	images,
	currentIndex,
	onNext,
	onPrev,
	label,
	imageClassName,
}: ImageViewerProps) => {
	const dialogRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);
	const currentImage = images[currentIndex];
	const isVisible = isOpen && !!currentImage;
	const imageLabel = label.toLowerCase();

	useEffect(() => {
		if (!isVisible) return;
		const activeElement = document.activeElement;
		const rootOverflow = document.documentElement.style.overflow;
		const bodyOverflow = document.body.style.overflow;
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";
		closeButtonRef.current?.focus({ preventScroll: true });

		return () => {
			document.documentElement.style.overflow = rootOverflow;
			document.body.style.overflow = bodyOverflow;
			if (activeElement instanceof HTMLElement) {
				activeElement.focus({ preventScroll: true });
			}
		};
	}, [isVisible]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Escape") {
			event.preventDefault();
			onClose();
		} else if (images.length > 1 && event.key === "ArrowRight") {
			event.preventDefault();
			onNext();
		} else if (images.length > 1 && event.key === "ArrowLeft") {
			event.preventDefault();
			onPrev();
		} else if (event.key === "Tab") {
			const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button");
			if (!buttons?.length) return;
			const firstButton = buttons[0];
			const lastButton = buttons[buttons.length - 1];
			if (event.shiftKey && document.activeElement === firstButton) {
				event.preventDefault();
				lastButton.focus();
			} else if (!event.shiftKey && document.activeElement === lastButton) {
				event.preventDefault();
				firstButton.focus();
			}
		}
	};

	if (!isVisible) return null;

	return (
		<div
			ref={dialogRef}
			role="dialog"
			aria-modal="true"
			aria-label={`${label} viewer`}
			onKeyDown={handleKeyDown}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
			className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-2 py-14 sm:px-4"
		>
			<div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-full">
				<button
					ref={closeButtonRef}
					type="button"
					onClick={onClose}
					aria-label={`Close ${imageLabel} viewer`}
					className="absolute -top-12 right-0 h-11 w-11 text-white text-xl sm:text-2xl hover:text-gray-300 transition-colors z-10"
				>
					✕
				</button>

				{images.length > 1 && (
					<>
						<button
							type="button"
							onClick={onPrev}
							aria-label={`Previous ${imageLabel}`}
							className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-gray-300 transition-colors bg-black/50 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center z-10"
						>
							‹
						</button>

						<button
							type="button"
							onClick={onNext}
							aria-label={`Next ${imageLabel}`}
							className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl hover:text-gray-300 transition-colors bg-black/50 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center z-10"
						>
							›
						</button>
					</>
				)}

				<Image
					src={currentImage.image}
					alt={currentImage.title}
					width={typeof currentImage.image === "string" ? 800 : currentImage.image.width}
					height={typeof currentImage.image === "string" ? 600 : currentImage.image.height}
					sizes="(min-width: 1200px) 896px, (min-width: 768px) 672px, (min-width: 375px) 448px, 320px"
					className={twMerge(
						"mx-auto h-auto w-auto max-w-full max-h-[calc(100dvh-7rem)] object-contain rounded-lg",
						imageClassName,
					)}
				/>
			</div>
		</div>
	);
};
