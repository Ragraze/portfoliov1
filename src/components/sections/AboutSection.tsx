"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionBackground } from "@/components/SectionBackground";
import { Card } from "@/components/Card";
import profile from "@/assets/images/profile.webp";
import { topToolboxItems, bottomToolboxItems } from "@/data/toolbox";
import Image from "next/image";
import mapImage from "@/assets/images/map.webp";
import smileMemoji from "@/assets/images/memoji-smile.webp";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { m as motion } from "framer-motion";
import { Fragment } from "react";
import { useLanguage } from "@/providers/LanguageProvider";

export const AboutSection = () => {
	const { t } = useLanguage();
	const v = {
		up: { hidden: { y: -40, opacity: 0 }, show: { y: 0, opacity: 1 } },
		right: { hidden: { x: 60, opacity: 0 }, show: { x: 0, opacity: 1 } },
		left: { hidden: { x: -60, opacity: 0 }, show: { x: 0, opacity: 1 } },
		down: { hidden: { y: 60, opacity: 0 }, show: { y: 0, opacity: 1 } },
	};
	const spring = { type: "spring", stiffness: 120, damping: 18 };

	return (
		<section
			id="about"
			className="relative scroll-mt-36 md:scroll-mt-40 lg:scroll-mt-44 py-16 md:py-20 lg:py-28"
		>
			<SectionBackground variant="about" />
			<div className="container tablet-portrait:max-w-5xl">
				<SectionHeader
					eyebrow={t.about.eyebrow}
					title={t.about.title}
					description={t.about.description}
				/>

				<div className="mt-10 md:mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 tablet-portrait:grid-cols-2 tablet-portrait-wide:grid-cols-3">
						<motion.div
							variants={v.up}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-2 lg:col-span-1 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:-1.5deg] h-[320px] after:z-10">
								<CardHeader
									title={t.about.profile}
									description=""
									className="tablet-portrait:max-[1024px]:px-6"
								/>
								<div className="w-52 mx-auto -mt-12 flex-1 flex items-start justify-center">
									<Image src={profile} alt="Rakan Fadhil Prayata" sizes="208px" />
								</div>
							</Card>
						</motion.div>

						<motion.div
							variants={v.right}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.12 }}
							className="md:col-span-3 lg:col-span-2 tablet-portrait:col-span-1 tablet-portrait:min-w-0 tablet-portrait-wide:col-span-2"
						>
							<Card className="about-card [--about-card-tilt:1.5deg] pb-4 md:h-[320px] md:pb-0 tablet-portrait:h-[320px] tablet-portrait:pb-0">
								<CardHeader
									title={t.about.techStack}
									description=""
									className="p-4 tablet-portrait:py-8 tablet-portrait:px-10"
								/>
								<ToolboxItems
									items={topToolboxItems}
									itemsWrapperClassName="animate-move-left [animation-duration:100s] hover:[animation-play-state:paused]"
								/>
								<ToolboxItems
									items={bottomToolboxItems}
									className="mt-4 md:mt-6 tablet-portrait:mt-6"
									itemsWrapperClassName="animate-move-right [animation-duration:64s] hover:[animation-play-state:paused]"
								/>
							</Card>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 tablet-portrait:grid-cols-2 tablet-portrait-wide:grid-cols-3">
						<motion.div
							variants={v.left}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ ...spring, delay: 0.05 }}
							className="md:col-span-3 lg:col-span-2 tablet-portrait:col-span-1 tablet-portrait:min-w-0 tablet-portrait-wide:col-span-2"
						>
							<Card className="@container about-card [--about-card-tilt:1.5deg] h-full min-h-[320px] p-0 flex flex-col">
								<CardHeader
									title={t.about.myself}
									description=""
									className="px-6 pt-6 pb-0 md:pt-8 md:pb-0 lg:pt-10 tablet-portrait-wide:pt-10"
								/>
								<div>
									<p className="px-6 pt-2 pb-6 text-[13px] md:py-2 md:text-sm lg:px-8 lg:py-4 lg:text-base text-white/60 tablet-portrait:max-[1024px]:px-6 tablet-portrait:max-[1024px]:pb-6 tablet-portrait:max-[1024px]:text-[clamp(0.8125rem,3.5cqi,1rem)] tablet-portrait:max-[1024px]:leading-normal tablet-portrait-wide:px-8 tablet-portrait-wide:py-4 tablet-portrait-wide:text-base">
										{t.about.biography.map((part) =>
											part.strong ? (
												<strong key={part.text} className="font-bold text-gray-300">
													{part.text}
												</strong>
											) : (
												<Fragment key={part.text}>{part.text}</Fragment>
											),
										)}
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div
							variants={v.down}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.1 }}
							transition={{ ...spring, delay: 0.12 }}
							className="md:col-span-2 lg:col-span-1 tablet-portrait:col-span-1 tablet-portrait:min-w-0"
						>
							<Card className="about-card [--about-card-tilt:-1.5deg] h-full min-h-[320px] p-0 relative">
								<Image
									src={mapImage}
									alt={t.about.mapAlt}
									fill
									sizes="(min-width: 1024px) and (orientation: portrait) and (pointer: coarse) 304px, (min-width: 768px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 3rem), (min-width: 600px) and (orientation: portrait) and (pointer: coarse) calc(50vw - 2rem), (min-width: 1200px) 304px, (min-width: 768px) calc(40vw - 2.4rem), calc(100vw - 2rem)"
									className="object-cover object-left-top md:object-center tablet-portrait:max-[1024px]:origin-right tablet-portrait:max-[1024px]:scale-115"
								/>
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full">
									<div className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
									<div className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-emerald-300 to-sky-400 -z-10" />
									<Image
										src={smileMemoji}
										alt={t.about.memojiAlt}
										className="size-12"
										sizes="48px"
									/>
								</div>
							</Card>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};
