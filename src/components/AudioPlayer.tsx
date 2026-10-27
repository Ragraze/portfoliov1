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

		return () => {
			audio.pause();
		};
	}, []);

	return (
		<>
			<audio
				ref={audioRef}
				muted={isMuted}
				loop
				preload="none"
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
					if (!audio) return;
					audio.muted = !audio.muted;
					if (!audio.muted) {
						void audio.play().catch(() => {
							audio.muted = true;
						});
					}
				}}
			>
				{isMuted ? <SpeakerXMarkIcon className="size-5" /> : <SpeakerWaveIcon className="size-5" />}
			</FloatingButton>
		</>
	);
};
