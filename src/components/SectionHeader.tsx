"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

export const SectionHeader = ({
	title,
	eyebrow,
	description,
	className,
}: {
	title: string;
	eyebrow: string;
	description?: string;
	className?: string;
}) => {
	return (
		<motion.div
			className={twMerge("mx-auto", className)}
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.35 }}
		>
			<motion.div variants={item} className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest bg-linear-to-r/srgb from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
					{eyebrow}
				</p>
			</motion.div>

			<motion.h2 variants={item} className="font-serif text-3xl md:text-5xl text-center mt-6">
				{title}
			</motion.h2>

			{description ? (
				<motion.p
					variants={item}
					className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"
				>
					{description}
				</motion.p>
			) : null}
		</motion.div>
	);
};
