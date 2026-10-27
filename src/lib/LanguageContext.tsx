"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { translations, type Language, type Translations } from "@/lib/translations";

const storageKey = "portfolio-language";
const listeners = new Set<() => void>();
let selectedLanguage: Language | null = null;

const getLanguage = (): Language => {
	if (selectedLanguage) return selectedLanguage;
	try {
		const savedLanguage = localStorage.getItem(storageKey);
		if (savedLanguage === "en" || savedLanguage === "id") return savedLanguage;
	} catch {
		// Language switching still works when browser storage is unavailable.
	}
	return "en";
};

const getServerLanguage = (): Language => "en";

const subscribe = (listener: () => void) => {
	const handleStorage = (event: StorageEvent) => {
		if (event.key !== null && event.key !== storageKey) return;
		selectedLanguage = null;
		listener();
	};
	listeners.add(listener);
	window.addEventListener("storage", handleStorage);
	return () => {
		listeners.delete(listener);
		window.removeEventListener("storage", handleStorage);
	};
};

const changeLanguage = (nextLanguage: Language) => {
	selectedLanguage = nextLanguage;
	try {
		localStorage.setItem(storageKey, nextLanguage);
	} catch {
		// Keep the selected language in memory when the preference cannot be saved.
	}
	listeners.forEach((listener) => {
		listener();
	});
};

const LanguageContext = createContext<{
	language: Language;
	setLanguage: (language: Language) => void;
	t: Translations;
} | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const language = useSyncExternalStore(subscribe, getLanguage, getServerLanguage);

	useEffect(() => {
		document.documentElement.lang = language;
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage: changeLanguage, t: translations[language] }}
		>
			<MotionConfig reducedMotion="user">
				<LazyMotion features={domAnimation} strict>
					{children}
				</LazyMotion>
			</MotionConfig>
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
};
