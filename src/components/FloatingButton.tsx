"use client";

import grainImage from "@/assets/images/grain.webp";
import { forwardRef, type PropsWithChildren } from "react";
import { m as motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FloatingButtonProps = PropsWithChildren<Omit<HTMLMotionProps<"button">, "children">>;

export const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
	function FloatingButton({ className, children, ...props }, ref) {
		const reduceMotion = useReducedMotion();

		return (
			<motion.button
				ref={ref}
				type="button"
				tabIndex={0}
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={reduceMotion ? { duration: 0 } : undefined}
				whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
				whileTap={reduceMotion ? undefined : { scale: 0.95 }}
				{...props}
				className={twMerge(
					"relative z-0 inline-flex size-12 items-center justify-center bg-gray-800 rounded-3xl overflow-hidden text-white after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300",
					className,
				)}
			>
				<span
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 -z-10 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				/>
				{children}
			</motion.button>
		);
	},
);
