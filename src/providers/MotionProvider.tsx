"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

const loadFeatures = () => import("@/lib/animation-features").then((module) => module.default);

export const MotionProvider = ({ children }: { children: ReactNode }) => (
	<MotionConfig reducedMotion="user">
		<LazyMotion features={loadFeatures} strict>
			{children}
		</LazyMotion>
	</MotionConfig>
);
