import { Header } from "@/sections/Navbar";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ExperiencesSection } from "@/sections/Experiences";
import { ProjectsSection } from "@/sections/Projects";

import { CertificatesSection } from "@/sections/Certificates";

import { Footer } from "@/sections/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
	return (
		<div>
			<Header />
			<HeroSection />

			<AboutSection />
			<ExperiencesSection />
			<ProjectsSection />
			<CertificatesSection />

			<Footer />
			<AudioPlayer />
			<ScrollToTop />
		</div>
	);
}
