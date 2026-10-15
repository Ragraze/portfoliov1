"use client";

import { ImageViewer } from "./ImageViewer";

interface Certificate {
	id: number;
	title: string;
	description: string;
	image: string;
}

interface CertificateViewerProps {
	isOpen: boolean;
	onClose: () => void;
	certificates: Certificate[];
	currentIndex: number;
	onNext: () => void;
	onPrev: () => void;
}

export const CertificateViewer = ({
	isOpen,
	onClose,
	certificates,
	currentIndex,
	onNext,
	onPrev,
}: CertificateViewerProps) => {
	return (
		<ImageViewer
			isOpen={isOpen}
			onClose={onClose}
			images={certificates}
			currentIndex={currentIndex}
			onNext={onNext}
			onPrev={onPrev}
			label="Certificate"
		/>
	);
};
