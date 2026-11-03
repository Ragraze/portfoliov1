"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { FloatingButton } from "@/components/FloatingButton";

export const LanguageToggle = ({ isVisible = true }: { isVisible?: boolean }) => {
	const { language, setLanguage, t } = useLanguage();

	return (
		<FloatingButton
			tabIndex={isVisible ? 0 : -1}
			aria-label={t.controls.changeLanguage}
			title={t.controls.changeLanguage}
			onClick={() => setLanguage(language === "en" ? "id" : "en")}
		>
			<span className="text-sm font-semibold tracking-wide">{language.toUpperCase()}</span>
		</FloatingButton>
	);
};
