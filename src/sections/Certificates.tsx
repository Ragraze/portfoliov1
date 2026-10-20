"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionStars } from "@/components/SectionStars";
import Image from "next/image";
import { Card } from "@/components/Card";
import { useEffect, useMemo, useRef, useState } from "react";
import { ImageViewer } from "@/components/ImageViewer";
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";

const certificates = [
	{
		id: 21,
		title: "IT Staff — Tri-Wall Indonesia",
		description: "Maganghub internship completion at PT. Tri Wall Indonesia",
		image: "/certificates/maganghub-tri-wall-indonesia.webp",
	},
	{
		id: 25,
		title: "IT Staff Internship — Tri-Wall Indonesia",
		description: "Certificate of appreciation from PT. Tri-Wall Indonesia",
		image: "/certificates/internship-tri-wall-indonesia.webp",
	},
	{
		id: 22,
		title: "Bangkit Academy — Cloud Computing",
		description: "Certificate of completion for the 2024 Cloud Computing learning path",
		image: "/certificates/bangkit-academy.webp",
	},
	{
		id: 23,
		title: "Web Programming Teaching Assistant",
		description: "Practicum assistant certificate from FILKOM, Universitas Brawijaya",
		image: "/certificates/teaching-assistant.webp",
	},
	{
		id: 26,
		title: "MSIB Batch 6 — Certified Independent Study",
		description:
			"Participation and completion certificate from Kampus Merdeka at Dicoding Indonesia",
		image: "/certificates/msib.webp",
	},
	{
		id: 2,
		title: "Google Cloud Architecture",
		description: "Google Cloud architecture course from Dicoding",
		image: "/certificates/google-cloud.webp",
	},
	{
		id: 8,
		title: "Web Programming",
		description: "Web programming fundamentals course from Dicoding",
		image: "/certificates/web-programming.webp",
	},
	{
		id: 9,
		title: "JavaScript",
		description: "JavaScript programming fundamentals course from Dicoding",
		image: "/certificates/javascript.webp",
	},
	{
		id: 10,
		title: "Git & GitHub",
		description: "Git and GitHub fundamentals course from Dicoding",
		image: "/certificates/git.webp",
	},
	{
		id: 11,
		title: "Data Science",
		description: "Data science fundamentals course from Dicoding",
		image: "/certificates/data-science.webp",
	},
	{
		id: 12,
		title: "Python",
		description: "Python programming course from Dicoding",
		image: "/certificates/python.webp",
	},
	{
		id: 13,
		title: "SQL",
		description: "Structured Query Language fundamentals course from Dicoding",
		image: "/certificates/sql.webp",
	},
	{
		id: 17,
		title: "Back-End with Google Cloud",
		description: "Beginner back-end application development course from Dicoding",
		image: "/certificates/back-end.webp",
	},
	{
		id: 18,
		title: "Front-End Web Development",
		description: "Beginner front-end web development course from Dicoding",
		image: "/certificates/front-end.webp",
	},
	{
		id: 19,
		title: "Java",
		description: "Java programming course from Dicoding",
		image: "/certificates/java.webp",
	},
	{
		id: 20,
		title: "Machine Learning with Google Cloud",
		description: "Applied machine learning with Google Cloud course from Dicoding",
		image: "/certificates/machine-learning.webp",
	},
	{
		id: 1,
		title: "Google IT Support",
		description: "Professional Certificate from Google through Coursera",
		image: "/certificates/it-support.webp",
	},
	{
		id: 3,
		title: "Google Cybersecurity",
		description: "Professional Certificate from Google through Coursera",
		image: "/certificates/cybersecurity.webp",
	},
	{
		id: 4,
		title: "CCNA: Introduction to Networks",
		description: "Networking fundamentals course from Cisco Networking Academy",
		image: "/certificates/ccna-itn.webp",
	},
	{
		id: 5,
		title: "Alibaba Cloud Certified Developer",
		description: "Certificate for developing applications with Alibaba Cloud",
		image: "/certificates/alibaba.webp",
	},
	{
		id: 6,
		title: "MongoDB",
		description: "MongoDB database course from CODEPOLITAN",
		image: "/certificates/mongodb.webp",
	},
	{
		id: 7,
		title: "ReactJS",
		description: "ReactJS development course from CODEPOLITAN",
		image: "/certificates/reactjs.webp",
	},
	{
		id: 16,
		title: "Express.js",
		description: "Express.js fundamentals course from CODEPOLITAN",
		image: "/certificates/expressjs.webp",
	},
	{
		id: 14,
		title: "Microsoft Office",
		description: "Desktop application training from TRUST Training Partners",
		image: "/certificates/office.webp",
	},
	{
		id: 15,
		title: "TOEFL ITP",
		description: "English proficiency certificate with a total score of 523",
		image: "/certificates/toefl.webp",
	},
	{
		id: 27,
		title: "2nd Place — PKM-RSH",
		description:
			"PKM MABA competition, PK2MABA & Startup Academy 2021, FILKOM Universitas Brawijaya",
		image: "/certificates/pkm-rsh2-maba.webp",
	},
	{
		id: 24,
		title: "Universitas Brawijaya Accreditation",
		description: "BAN-PT institutional accreditation with an Unggul rating",
		image: "/certificates/accreditation.webp",
	},
];

const loopedCertificates = [...certificates, ...certificates];
const maskImage =
	"linear-gradient(to right, transparent, rgba(0,0,0,0.15) 4%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.85) 16%, black 20%, black 80%, rgba(0,0,0,0.85) 84%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.15) 96%, transparent)";

export const CertificatesSection = () => {
	const reduceMotion = useReducedMotion();
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);

	const x = useMotionValue(0);
	const [speed, setSpeed] = useState(40);
	const [isHover, setIsHover] = useState(false);
	const [isDragging, setIsDragging] = useState(false);

	const [chunk, setChunk] = useState(0);

	useEffect(() => {
		const measure = () => {
			const trackW = trackRef.current?.scrollWidth ?? 0;
			setChunk(trackW / 2);
		};
		measure();
		const ro = new ResizeObserver(measure);
		if (containerRef.current) ro.observe(containerRef.current);
		if (trackRef.current) ro.observe(trackRef.current);
		return () => ro.disconnect();
	}, []);

	useAnimationFrame((_time, delta) => {
		if (reduceMotion || isHover || isDragging || isFullscreen || chunk <= 0) return;
		const dx = (speed * delta) / 1000;
		const next = x.get() - dx;
		x.set(-(((-next % chunk) + chunk) % chunk));
	});

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
		<>
			<section
				id="certificates"
				className="relative isolate scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-16 lg:py-24"
			>
				<SectionStars />
				<div className="container relative z-10">
					<SectionHeader
						title="My Certificates"
						eyebrow="Achievements"
						description="See my professional certificates and achievements"
					/>

					<div
						ref={containerRef}
						className="mt-12 lg:mt-20 relative overflow-hidden py-2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-screen lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(1280px,calc(100vw-4rem))] tablet-portrait:left-1/2 tablet-portrait:-translate-x-1/2 tablet-portrait:w-screen"
						style={{
							maskImage,
							WebkitMaskImage: maskImage,
						}}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						<motion.div
							ref={trackRef}
							className="flex gap-4 sm:gap-8 pr-4 sm:pr-8 min-w-max transform-gpu will-change-transform cursor-grab"
							style={{ x, touchAction: "pan-y" }}
							drag="x"
							dragConstraints={dragConstraints}
							dragElastic={0.2}
							dragMomentum
							onDragStart={() => setIsDragging(true)}
							onDragEnd={() => {
								setSpeed(40);
							}}
							onDragTransitionEnd={() => setIsDragging(false)}
							whileTap={{ cursor: "grabbing" }}
						>
							{loopedCertificates.map((certificate, idx) => (
								<Card
									key={`${certificate.id}-${idx}`}
									className="w-72 sm:w-80 md:w-96 p-4 sm:p-6 md:p-8 hover:-rotate-3 transition duration-300 flex-shrink-0"
								>
									<div className="text-center w-full">
										<button
											type="button"
											className="w-full h-48 sm:h-56 md:h-60 bg-gray-700 inline-flex items-center justify-center rounded-lg flex-shrink-0 mx-auto mb-4 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-white/40"
											onClick={() => openFullscreen(idx)}
											onPointerDownCapture={() => setSpeed(10)}
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
												className="rounded-lg object-scale-down w-full h-full transition duration-300 hover:scale-105"
											/>
										</button>

										<div className="font-semibold text-lg">{certificate.title}</div>
										<div className="text-sm text-white/40 mt-2">{certificate.description}</div>
									</div>
								</Card>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			<ImageViewer
				isOpen={isFullscreen}
				onClose={closeFullscreen}
				images={certificates}
				currentIndex={currentCertificateIndex}
				onNext={nextCertificate}
				onPrev={prevCertificate}
				label="Certificate"
			/>
		</>
	);
};
