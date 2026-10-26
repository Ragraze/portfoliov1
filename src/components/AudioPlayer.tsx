"use client";

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { FloatingButton } from "@/components/FloatingButton";

export const AudioPlayer = ({ isVisible = true }: { isVisible?: boolean }) => {
	const { t } = useLanguage();
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isMuted, setIsMuted] = useState(true);

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
				onVolumeChange={() => setIsMuted(audioRef.current?.muted ?? false)}
			>
				<source src="/audio/divine-throne-ost.mp3" type="audio/mpeg" />
			</audio>
			<FloatingButton
				tabIndex={isVisible ? 0 : -1}
				aria-label={isMuted ? t.controls.unmute : t.controls.mute}
				onClick={() => {
					const audio = audioRef.current;
					if (audio) audio.muted = !audio.muted;
				}}
			>
				{isMuted ? <SpeakerXMarkIcon className="size-5" /> : <SpeakerWaveIcon className="size-5" />}
			</FloatingButton>
		</>
	);
};
