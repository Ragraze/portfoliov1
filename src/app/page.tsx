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
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ProfilePage",
					"@id": "https://rakanfadhil.com/#profile",
					url: "https://rakanfadhil.com/",
					name: "Rakan Fadhil Prayata | Portfolio",
					inLanguage: ["en", "id"],
					mainEntity: {
						"@type": "Person",
						"@id": "https://rakanfadhil.com/#person",
						name: "Rakan Fadhil Prayata",
						url: "https://rakanfadhil.com/",
						sameAs: ["https://github.com/Ragraze", "https://www.linkedin.com/in/rakanfadhilp/"],
						alumniOf: {
							"@type": "CollegeOrUniversity",
							name: "Universitas Brawijaya",
						},
					},
				}).replace(/</g, "\\u003c")}
			</script>
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
