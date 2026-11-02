import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownTrayIcon, ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import profile from "@/assets/images/profile.webp";
import { Card } from "@/components/Card";
import { SectionBackground } from "@/components/SectionBackground";
import { StarCursor } from "@/components/StarCursor";
import { curriculumVitae as cv, cvPdfUrl } from "@/data/curriculum-vitae";
import "./curriculum-vitae.css";

export const metadata: Metadata = {
	title: "Curriculum Vitae | Rakan Fadhil Prayata",
	description:
		"Curriculum vitae of Rakan Fadhil Prayata: experience, education, projects, skills, and certifications. Read online or download the PDF.",
	alternates: { canonical: "/curriculum-vitae" },
	openGraph: {
		type: "website",
		url: "/curriculum-vitae",
		siteName: "Rakan Fadhil Prayata",
		title: "Curriculum Vitae | Rakan Fadhil Prayata",
		description:
			"Experience, education, projects, skills, and certifications of Rakan Fadhil Prayata, an Informatics Engineering graduate from Universitas Brawijaya.",
	},
};

export default function CurriculumVitaePage() {
	return (
		<main className="cv-page" lang="en">
			<SectionBackground variant="curriculumVitae" />
			<div className="cv-container">
				<nav className="cv-toolbar" aria-label="Curriculum vitae actions">
					<Link href="/" className="cv-back">
						<ArrowLeftIcon className="size-4" aria-hidden="true" />
						Back
					</Link>
					<a href={cvPdfUrl} className="cv-action cv-action-primary">
						<ArrowDownTrayIcon className="size-4" aria-hidden="true" />
						Download PDF
					</a>
				</nav>

				<Card className="cv-document after:z-10">
					<article aria-label="Curriculum vitae">
						<header className="cv-header">
							<div className="cv-photo">
								<Image
									src={profile}
									alt={cv.name}
									sizes="(min-width: 768px) 112px, (max-width: 374.98px) 64px, 80px"
									preload
								/>
							</div>
							<div className="min-w-0">
								<h1>{cv.name}</h1>
								<address className="cv-contacts">
									{cv.contacts.map((contact) => (
										<a href={contact.href} key={contact.href}>
											{contact.label}
										</a>
									))}
								</address>
							</div>
							<p className="cv-summary">{cv.summary}</p>
						</header>

						<section className="cv-section" aria-labelledby="cv-experiences">
							<h2 id="cv-experiences">Experiences</h2>
							<div className="cv-entries">
								{cv.experiences.map((experience) => (
									<div className="cv-entry" key={experience.organization}>
										<div className="cv-entry-heading">
											<h3>{experience.organization}</h3>
											<p className="cv-period">{experience.period}</p>
										</div>
										<p className="cv-role">{experience.role}</p>
										<ul>
											{experience.details.map((detail) => (
												<li key={detail}>{detail}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>

						<section className="cv-section" aria-labelledby="cv-education">
							<h2 id="cv-education">Education</h2>
							<div className="cv-entry">
								<div className="cv-entry-heading">
									<h3>{cv.education.organization}</h3>
									<p className="cv-period">{cv.education.period}</p>
								</div>
								<p className="cv-role">{cv.education.degree}</p>
								<ul>
									{cv.education.details.map((detail) => (
										<li key={detail}>{detail}</li>
									))}
								</ul>
								<a className="cv-text-link" href={cv.education.transcript}>
									Degree &amp; transcript
									<ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
								</a>
							</div>
						</section>

						<section className="cv-section" aria-labelledby="cv-projects">
							<h2 id="cv-projects">Project</h2>
							<div className="cv-entries">
								{cv.projects.map((project) => (
									<div className="cv-entry" key={project.name}>
										<div className="cv-entry-heading">
											<h3>{project.name}</h3>
											<p className="cv-period">{project.period}</p>
										</div>
										<p className="cv-role">{project.description}</p>
										<ul>
											<li>{project.detail}</li>
										</ul>
									</div>
								))}
							</div>
						</section>

						<section className="cv-section" aria-labelledby="cv-skills">
							<h2 id="cv-skills">Skills &amp; Certifications</h2>
							<dl className="cv-skills">
								{cv.skills.map((skill) => (
									<div key={skill.label}>
										<dt>{skill.label}</dt>
										<dd>{skill.value}</dd>
									</div>
								))}
								<div>
									<dt>Certificates</dt>
									<dd>
										<a className="cv-inline-link" href={cv.certificates.href}>
											{cv.certificates.value}
										</a>
									</dd>
								</div>
								<div>
									<dt>Publication</dt>
									<dd>
										<a className="cv-inline-link" href={cv.publication.href}>
											{cv.publication.title}
										</a>
									</dd>
								</div>
								<div>
									<dt>Portfolio</dt>
									<dd>
										<a className="cv-inline-link" href="https://rakanfadhil.com/">
											rakanfadhil.com
										</a>
										<span aria-hidden="true"> · </span>
										<a className="cv-inline-link" href="https://github.com/Ragraze">
											github.com/Ragraze
										</a>
									</dd>
								</div>
							</dl>
						</section>
					</article>
				</Card>
				<p className="cv-caption">Curriculum vitae · Rakan Fadhil Prayata</p>
			</div>
			<StarCursor />
		</main>
	);
}
