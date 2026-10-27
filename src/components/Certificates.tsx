"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import expressJsCertificate from "../../public/certificates/expressjs.webp";
import msibCertificate from "../../public/certificates/msib.webp";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Card } from "@/components/Card";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
	domAnimation,
	frame,
	cancelFrame,
	LazyMotion,
	m as motion,
	useMotionValue,
	useReducedMotion,
	useTransform,
	useInView,
	type FeatureBundle,
	type MotionValue,
} from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import type { Translations } from "@/lib/translations";

const ImageViewer = dynamic(() =>
	import("@/components/ImageViewer").then((module) => module.ImageViewer),
);

const certificateAssets: {
	id: keyof Translations["certificates"]["items"];
	image: string;
}[] = [
	{
		id: "21",
		image: "/certificates/maganghub-tri-wall-indonesia.webp",
	},
	{
		id: "25",
		image: "/certificates/internship-tri-wall-indonesia.webp",
	},
	{
		id: "22",
		image: "/certificates/bangkit-academy.webp",
	},
	{
		id: "23",
		image: "/certificates/teaching-assistant.webp",
	},
	{
		id: "26",
		image: msibCertificate.src,
	},
	{
		id: "2",
		image: "/certificates/google-cloud.webp",
	},
	{
		id: "8",
		image: "/certificates/web-programming.webp",
	},
	{
		id: "9",
		image: "/certificates/javascript.webp",
	},
	{
		id: "10",
		image: "/certificates/git.webp",
	},
	{
		id: "11",
		image: "/certificates/data-science.webp",
	},
	{
		id: "12",
		image: "/certificates/python.webp",
	},
	{
		id: "13",
		image: "/certificates/sql.webp",
	},
	{
		id: "17",
		image: "/certificates/back-end.webp",
	},
	{
		id: "18",
		image: "/certificates/front-end.webp",
	},
	{
		id: "19",
		image: "/certificates/java.webp",
	},
	{
		id: "20",
		image: "/certificates/machine-learning.webp",
	},
	{
		id: "1",
		image: "/certificates/it-support.webp",
	},
	{
		id: "3",
		image: "/certificates/cybersecurity.webp",
	},
	{
		id: "4",
		image: "/certificates/ccna-itn.webp",
	},
	{
		id: "5",
		image: "/certificates/alibaba.webp",
	},
	{
		id: "6",
		image: "/certificates/mongodb.webp",
	},
	{
		id: "7",
		image: "/certificates/reactjs.webp",
	},
	{
		id: "16",
		image: expressJsCertificate.src,
	},
	{
		id: "14",
		image: "/certificates/office.webp",
	},
	{
		id: "15",
		image: "/certificates/toefl.webp",
	},
	{
		id: "27",
		image: "/certificates/pkm-rsh2-maba.webp",
	},
	{
		id: "24",
		image: "/certificates/accreditation.webp",
	},
];

const maskImage =
	"linear-gradient(to right, transparent, rgba(0,0,0,0.15) 4%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.85) 16%, black 20%, black 80%, rgba(0,0,0,0.85) 84%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.15) 96%, transparent)";

type CarouselMetrics = { width: number; step: number; cardWidth: number };

const CertificateSlide = ({
	children,
	index,
	x,
	metrics,
	reduceMotion,
}: {
	children: ReactNode;
	index: number;
	x: MotionValue<number>;
	metrics: CarouselMetrics;
	reduceMotion: boolean | null;
}) => {
	const progress = useTransform(x, (offset) => {
		if (!metrics.width) return 0;
		const center = offset + index * metrics.step + metrics.cardWidth / 2;
		return (center - metrics.width / 2) / (metrics.width / 2);
	});
	const scale = useTransform(progress, [-1, 0, 1], [0.72, 1.08, 0.72]);
	const rotateY = useTransform(progress, [-1, 0, 1], [30, 0, -30]);
	const depth = useTransform(progress, [-1, 0, 1], [-120, 40, -120]);
	const zIndex = useTransform(progress, (value) =>
		Math.round(100 - Math.min(Math.abs(value), 1) * 50),
	);
	const hasDepth = metrics.width > 0 && !reduceMotion;

	return (
		<motion.div
			className="relative pointer-events-auto w-72 sm:w-80 md:w-96 shrink-0"
			style={{
				scale: hasDepth ? scale : 1,
				rotateY: hasDepth ? rotateY : 0,
				z: hasDepth ? depth : 0,
				zIndex: hasDepth ? zIndex : 0,
				transformStyle: "preserve-3d",
			}}
		>
			{children}
		</motion.div>
	);
};

export const CertificatesSection = () => {
	const { t } = useLanguage();
	const certificates = certificateAssets.map((certificate) => ({
		...certificate,
		...t.certificates.items[certificate.id],
	}));
	const loopedCertificates = ["first", "second"].flatMap((copy) =>
		certificates.map((certificate) => ({ ...certificate, key: `${certificate.id}-${copy}` })),
	);
	const reduceMotion = useReducedMotion();
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

	const containerRef = useRef<HTMLElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const wasDragged = useRef(false);

	const x = useMotionValue(0);
	const [speed, setSpeed] = useState(40);
	const [isHover, setIsHover] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const isNearViewport = useInView(containerRef, { margin: "200px" });
	const [dragFeatures, setDragFeatures] = useState<FeatureBundle>(domAnimation);

	useEffect(() => {
		if (!isNearViewport || dragFeatures !== domAnimation) return;
		let active = true;
		void import("@/lib/motionFeatures").then((module) => {
			if (active) setDragFeatures(module.default);
		});
		return () => {
			active = false;
		};
	}, [isNearViewport, dragFeatures]);

	const [chunk, setChunk] = useState(0);
	const [metrics, setMetrics] = useState<CarouselMetrics>({ width: 0, step: 0, cardWidth: 0 });

	useEffect(() => {
		const container = containerRef.current;
		const section = container?.closest("#certificates");
		const measure = () => {
			const track = trackRef.current;
			const trackW = track?.scrollWidth ?? 0;
			setChunk(trackW / 2);
			const firstCard = track?.firstElementChild;
			if (container && track && firstCard instanceof HTMLElement) {
				const cardWidth = firstCard.offsetWidth;
				const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
				const width = container.clientWidth;
				const step = cardWidth + gap;
				setMetrics((current) =>
					current.width === width && current.step === step && current.cardWidth === cardWidth
						? current
						: { width, step, cardWidth },
				);
			}
		};
		measure();
		const ro = new ResizeObserver(measure);
		if (containerRef.current) ro.observe(containerRef.current);
		if (trackRef.current) ro.observe(trackRef.current);
		if (section) ro.observe(section);
		return () => ro.disconnect();
	}, []);

	useEffect(() => {
		if (
			!isNearViewport ||
			reduceMotion ||
			isHover ||
			isDragging ||
			isFocused ||
			isFullscreen ||
			chunk <= 0
		)
			return;
		const advance = ({ delta }: { delta: number }) => {
			const dx = (speed * delta) / 1000;
			const next = x.get() - dx;
			x.set(-(((-next % chunk) + chunk) % chunk));
		};
		frame.update(advance, true);
		return () => cancelFrame(advance);
	}, [isNearViewport, reduceMotion, isHover, isDragging, isFocused, isFullscreen, chunk, speed, x]);

	const dragConstraints = useMemo(() => {
		return { left: -chunk, right: 0 };
	}, [chunk]);

	const openFullscreen = (loopIndex: number) => {
		const baseIndex = loopIndex % certificates.length;
		setCurrentCertificateIndex(baseIndex);
		setIsFullscreen(true);
	};
	const closeFullscreen = () => setIsFullscreen(false);
	const nextCertificate = () =>
		setCurrentCertificateIndex((p) => (p === certificates.length - 1 ? 0 : p + 1));
	const prevCertificate = () =>
		setCurrentCertificateIndex((p) => (p === 0 ? certificates.length - 1 : p - 1));

	return (
		<LazyMotion features={dragFeatures} strict>
			<section
				id="certificates"
				className="relative isolate scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-16 lg:py-24"
			>
				<SectionBackground />
				<div className="container relative z-10">
					<SectionHeader
						title={t.certificates.title}
						eyebrow={t.certificates.eyebrow}
						description={t.certificates.description}
					/>

					<section
						ref={containerRef}
						aria-label={t.certificates.title}
						className="md:mt-12 lg:mt-20 relative overflow-hidden max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-screen lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(1280px,calc(100vw-4rem))] tablet-portrait:left-1/2 tablet-portrait:-translate-x-1/2 tablet-portrait:w-screen"
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						onFocusCapture={() => setIsFocused(true)}
						onBlurCapture={(event) => {
							if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
						}}
					>
						<div
							className="py-10 md:py-12"
							style={{ maskImage, WebkitMaskImage: maskImage, perspective: "1200px" }}
						>
							<motion.div
								ref={trackRef}
								className="pointer-events-none flex gap-2 md:gap-8 tablet-portrait:gap-8 pr-2 md:pr-8 tablet-portrait:pr-8 min-w-max transform-gpu will-change-transform cursor-grab"
								style={{ x, touchAction: "pan-y", transformStyle: "preserve-3d" }}
								drag="x"
								dragConstraints={dragConstraints}
								dragElastic={0.2}
								dragMomentum
								onDragStart={() => {
									wasDragged.current = true;
									setIsDragging(true);
								}}
								onDragEnd={() => {
									setSpeed(40);
								}}
								onDragTransitionEnd={() => setIsDragging(false)}
								whileTap={{ cursor: "grabbing" }}
							>
								{loopedCertificates.map((certificate, idx) => (
									<CertificateSlide
										key={certificate.key}
										index={idx}
										x={x}
										metrics={metrics}
										reduceMotion={reduceMotion}
									>
										<Card className="card-focus h-full p-4 sm:p-6 md:p-8">
											<div className="text-center w-full">
												<button
													type="button"
													className="w-full h-48 sm:h-56 md:h-60 bg-gray-700 inline-flex items-center justify-center rounded-lg shrink-0 mx-auto mb-4 cursor-zoom-in focus:outline-hidden focus:ring-2 focus:ring-white/40"
													onClick={(event) => {
														if (event.detail === 0 || !wasDragged.current) openFullscreen(idx);
													}}
													aria-label={`${t.certificates.viewImage} ${certificate.title}`}
													onPointerDownCapture={() => {
														wasDragged.current = false;
														setSpeed(10);
													}}
													onPointerUp={() => setSpeed(40)}
													onPointerCancel={() => setSpeed(40)}
												>
													<Image
														src={certificate.image}
														alt={certificate.title}
														width={320}
														height={240}
														sizes="(min-width: 768px) 320px, (min-width: 375px) 272px, 256px"
														draggable={false}
														className="rounded-lg object-scale-down w-full h-full transition duration-300"
													/>
												</button>

												<div className="font-semibold text-lg">{certificate.title}</div>
												<div className="text-sm text-white/40 mt-2">{certificate.description}</div>
											</div>
										</Card>
									</CertificateSlide>
								))}
							</motion.div>
						</div>
					</section>
				</div>
			</section>

			{isFullscreen && (
				<ImageViewer
					isOpen={isFullscreen}
					onClose={closeFullscreen}
					images={certificates}
					currentIndex={currentCertificateIndex}
					onNext={nextCertificate}
					onPrev={prevCertificate}
					label={t.certificates.imageLabel}
					imageClassName="h-[calc(100dvh-7rem)] w-full"
				/>
			)}
		</LazyMotion>
	);
};
