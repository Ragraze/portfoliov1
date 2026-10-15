"use client";

import StarIcon from "@/assets/icons/star.svg";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const stars = [{ size: 14 }, { size: 14 }, { size: 10 }, { size: 10 }];

const spaceDetails = [
	{ type: "shooting-star", size: 28 },
	{ type: "ufo", size: 24 },
	{ type: "constellation", size: 36 },
	{ type: "meteor", size: 22 },
];

export const SectionStars = () => {
	const reduceMotion = useReducedMotion();
	const [positions, setPositions] = useState<{ left: string; top: string }[]>([]);

	useEffect(() => {
		setPositions(
			Array.from({ length: stars.length + spaceDetails.length }, () => ({
				left: `${3 + Math.random() * 77}%`,
				top: `${8 + Math.random() * 80}%`,
			})),
		);
	}, []);

	if (positions.length === 0) return null;

	return (
		<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
			{stars.map((star, index) => (
				<motion.span
					key={index}
					className={`absolute ${index % 2 === 0 ? "text-emerald-300" : "text-sky-400"}`}
					style={{ ...positions[index], width: star.size, height: star.size }}
					initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.5, rotate: -30 }}
					whileInView={{ opacity: 0.35, y: 0, scale: 1, rotate: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{
						duration: reduceMotion ? 0 : 0.9,
						delay: reduceMotion ? 0 : (index % 3) * 0.12,
					}}
				>
					<StarIcon className="size-full" />
				</motion.span>
			))}
			{spaceDetails.map((detail, index) => {
				const isFlying = detail.type === "shooting-star" || detail.type === "meteor";

				return (
					<motion.span
						key={detail.type}
						className="absolute text-gray-200"
						style={{ ...positions[stars.length + index], width: detail.size, height: detail.size }}
						initial={reduceMotion ? false : { opacity: 0, x: 0, y: 0 }}
						whileInView={
							reduceMotion
								? { opacity: 0.3 }
								: {
										opacity: isFlying ? [0, 0.4, 0] : 0.3,
										x: isFlying ? [0, 28] : [0, 4, 0],
										y: isFlying ? [0, 20] : [0, -3, 0],
									}
						}
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: reduceMotion ? 0 : 2, delay: reduceMotion ? 0 : index * 0.2 }}
					>
						<svg
							viewBox="0 0 32 32"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="size-full"
						>
							{detail.type === "shooting-star" && (
								<>
									<path d="M3 3 19 19M3 10l9 9" />
									<path
										d="m23 17 1.5 4.5L29 23l-4.5 1.5L23 29l-1.5-4.5L17 23l4.5-1.5Z"
										fill="currentColor"
										stroke="none"
									/>
								</>
							)}
							{detail.type === "ufo" && (
								<>
									<path d="M10 15a6 6 0 0 1 12 0M11 23l-2 4m7-3v4m5-5 2 4" />
									<ellipse cx="16" cy="17" rx="12" ry="4" />
									<path d="M10 17h1m4 1h2m4-1h1" />
								</>
							)}
							{detail.type === "constellation" && (
								<>
									<path d="m4 8 10 4 12-7-4 18-13 4 5-15 8 11" strokeOpacity="0.5" />
									{[
										[4, 8],
										[14, 12],
										[26, 5],
										[22, 23],
										[9, 27],
									].map(([cx, cy]) => (
										<circle
											key={`${cx}-${cy}`}
											cx={cx}
											cy={cy}
											r="1.5"
											fill="currentColor"
											stroke="none"
										/>
									))}
								</>
							)}
							{detail.type === "meteor" && (
								<>
									<path d="m4 4 13 13M3 11l10 10M11 3l10 10" />
									<circle cx="22" cy="22" r="5" />
									<circle cx="23" cy="21" r="1" fill="currentColor" stroke="none" />
								</>
							)}
						</svg>
					</motion.span>
				);
			})}
		</div>
	);
};
