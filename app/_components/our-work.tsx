"use client";
import Image from "next/image";
import tat1 from "../../public/tat-1.webp";
import tat2 from "../../public/tat2.webp";
import tat3 from "../../public/tat3.webp";
import tat4 from "../../public/tat4.webp";
import { usePrefersReducedMotion } from "@/hooks/usePreferedMotion";
import { useEffect, useRef } from "react";
import { srConfig } from "@/lib/utils";
import sr from "@/lib/sr";

export default function OurWork() {
	const prefersReducedMotion = usePrefersReducedMotion();
	const workTitle = useRef<HTMLDivElement | null>(null);
	const workProjects = useRef<HTMLDivElement | null>(null);
	const workSubTitle = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}
		if (sr) {
			sr.reveal(workTitle.current!, srConfig());
			sr.reveal(workSubTitle.current!, srConfig());
			sr.reveal(workProjects.current!, srConfig());
		}
	}, []);
	return (
		<section id="work" className="px-4 py-2 mt-20">
			{" "}
			<div className="flex flex-col sm:flex-row sm:justify-between  justify-center items-center">
				<h2 className="text-center py-10 text-7xl uppercase " ref={workTitle}>
					Look at the latest works of our masters
				</h2>
				<p
					className="hidden sm:block mon-light text-xs sm:text-base"
					ref={workSubTitle}
				>
					We design all design tattoos, individually for each client.
				</p>
			</div>
			<div className="mt-5" ref={workProjects}>
				<div className="grid-container">
					<div className="item  relative">
						<Image
							src={tat3}
							alt="tatoo image"
							fill
							className="rounded-2xl object-cover"
						/>
					</div>
					<div className="item relative">
						<Image
							src={tat2}
							alt="tatoo image"
							fill
							className="object-cover rounded-2xl
                           "
						/>
					</div>
					<div className="item  relative">
						<Image
							src={tat1}
							alt="tatoo image"
							fill
							className="rounded-2xl object-cover"
						/>
					</div>
					<div className="item  relative">
						<Image
							src={tat4}
							alt="tatoo image"
							fill
							className="rounded-2xl object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
