import { Header } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero";
import { AboutSection } from "@/components/About";
import { ExperiencesSection } from "@/components/Experiences";
import { ProjectsSection } from "@/components/Projects";
import { CertificatesSection } from "@/components/Certificates";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { StarCursor } from "@/components/StarCursor";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ExperiencesSection />
				<ProjectsSection />
				<CertificatesSection />
			</main>
			<Footer />
			<ScrollToTop />
			<StarCursor />
		</>
	);
}
