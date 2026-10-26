"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useHydrated } from "@/lib/useHydrated";

export const Typewriter = ({ words }: { words: string[] }) => {
	const isHydrated = useHydrated();
	const reduceMotion = useReducedMotion();
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		if (!isHydrated || reduceMotion) return;
		const currentWord = words[wordIndex];
		const isWordCompleted = !isDeleting && charIndex >= currentWord.length;
		const isWordCleared = isDeleting && charIndex === 0;

		let timeoutDelay = 80;
		if (isDeleting) timeoutDelay = 40;
		if (isWordCompleted) timeoutDelay = 1200;
		if (isWordCleared) timeoutDelay = 300;

		const timeoutId = setTimeout(() => {
			if (isWordCompleted) setIsDeleting(true);
			else if (isWordCleared) {
				setIsDeleting(false);
				setWordIndex((prev) => (prev + 1) % words.length);
			} else {
				setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
			}
		}, timeoutDelay);

		return () => clearTimeout(timeoutId);
	}, [charIndex, isDeleting, wordIndex, reduceMotion, words, isHydrated]);

	const typedText = isHydrated && reduceMotion ? words[0] : words[wordIndex].slice(0, charIndex);

	return <span>{typedText}</span>;
};
