"use client";

import Image, { type StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { Modal } from "./Modal";

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
	const currentImage = images[currentIndex];
	const imageLabel = label.toLowerCase();

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (images.length > 1 && event.key === "ArrowRight") {
			event.preventDefault();
			onNext();
		} else if (images.length > 1 && event.key === "ArrowLeft") {
			event.preventDefault();
			onPrev();
		}
	};

	if (!isOpen || !currentImage) return null;

	return (
		<Modal
			onClose={onClose}
			label={`${label} viewer`}
			onKeyDown={handleKeyDown}
			className="bg-black/90 px-2 py-14 sm:px-4"
		>
			<div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-full">
				<button
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
		</Modal>
	);
};
