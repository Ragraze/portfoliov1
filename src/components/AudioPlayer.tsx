"use client";

import grainImage from "@/assets/images/grain.webp";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AudioPlayer = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isMuted, setIsMuted] = useState(true);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const removeListeners = () => {
			window.removeEventListener("click", startPlayback);
			window.removeEventListener("touchend", startPlayback);
			window.removeEventListener("keydown", startPlayback);
		};

		function startPlayback() {
			if (!audio) return;
			void audio
				.play()
				.then(removeListeners)
				.catch(() => {
					// Retry on the next user interaction if the browser blocks autoplay.
				});
		}

		window.addEventListener("click", startPlayback);
		window.addEventListener("touchend", startPlayback, { passive: true });
		window.addEventListener("keydown", startPlayback);
		startPlayback();

		return () => {
			removeListeners();
			audio.pause();
		};
	}, []);

	return (
		<>
			<audio
				ref={audioRef}
				autoPlay
				muted={isMuted}
				loop
				preload="auto"
				hidden
				aria-hidden="true"
				onVolumeChange={() => setIsMuted(audioRef.current?.muted ?? false)}
			>
				<source src="/audio/divine-throne-ost.mp3" type="audio/mpeg" />
			</audio>
			<motion.button
				type="button"
				aria-label={isMuted ? "Unmute audio" : "Mute audio"}
				onClick={() => {
					const audio = audioRef.current;
					if (audio) audio.muted = !audio.muted;
				}}
				initial={reduceMotion ? false : { opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={reduceMotion ? undefined : { y: -3, scale: 1.05 }}
				whileTap={reduceMotion ? undefined : { scale: 0.95 }}
				className="fixed bottom-4 right-4 z-40 inline-flex size-12 items-center justify-center bg-gray-800 rounded-3xl overflow-hidden text-white after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 md:bottom-6 md:right-6"
			>
				<span
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 -z-10 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				/>
				{isMuted ? <SpeakerXMarkIcon className="size-5" /> : <SpeakerWaveIcon className="size-5" />}
			</motion.button>
		</>
	);
};
