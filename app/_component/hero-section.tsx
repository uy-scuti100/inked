"use client";
import Image from "next/image";
import heroImage from "../../public/hero-tat.webp";
import wavy from "../../public/wavy.png";
import { ICONS } from "@/constants";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Herosection() {
	const headerRef = useRef<HTMLHeadingElement | null>(null);
	const subHeaderRef = useRef<HTMLHeadingElement | null>(null);
	const wavyRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);
	const heroImageRef = useRef<HTMLDivElement | null>(null);
	const mobileCardRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);
	const tl2 = useRef<gsap.core.Timeline | null>(null);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		tl.current = gsap.timeline();
		tl2.current = gsap.timeline();
		const box = mobileCardRef.current;

		tl.current
			.to(headerRef.current, {
				x: 0,
				duration: 1,
				opacity: 1,
				ease: "power3.in",
			})
			.to(subHeaderRef.current, {
				y: 0,
				opacity: 1,
				ease: "power2.inOut",
			});

		tl2.current
			.to(".word", {
				delay: 1,
				duration: 1,
				y: 0,
				opacity: 1,
				stagger: {
					amount: 0.9,
				},
				ease: "power4.inOut",
			})
			.to(
				wavyRef.current,
				{
					x: 0,
					duration: 1,
					opacity: 1,
					ease: "power3.in",
				},
				"-=1"
			)
			.to(
				cardRef.current,
				{
					x: 0,
					duration: 1,
					opacity: 1,
					ease: "power3.in",
				},
				"-=1"
			)
			.to(
				buttonRef.current,
				{
					// delay: 0.3,
					x: 0,
					duration: 1,
					opacity: 1,
					ease: "power3.in",
				},
				"-=1"
			)
			.to(
				heroImageRef.current,
				{
					// delay: -0.6,
					duration: 1,
					opacity: 1,
					ease: "power4.in",
				},
				"-=1"
			);

		gsap.to(box, {
			scrollTrigger: {
				trigger: box,
				start: "top 90%",
				end: "bottom 80%",
				scrub: true,
				once: true,
			},
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 1,
		});
	});

	return (
		<section className="px-4 pt-5">
			<h1
				ref={headerRef}
				className="pt-[90px] sm:pt-0 text-center lg:text-[9.8rem] md:text-[8rem] sm:text-[7.5rem] text-[7rem] border-b border-greyish mb-7 mt-3 leading-[100%] opacity-0 translate-x-[-5%]"
			>
				WE CREATE ART ON <br className="sm:hidden" /> PEOPLE&apos;S BODIES
			</h1>
			<div>
				<div className="flex flex-col items-center md:flex-row gap-10 lg:gap-20 px-2">
					<div className="basis-1/2">
						<h2
							ref={subHeaderRef}
							className="text-[3.5rem] sm:text-[4rem] text-center md:text-left whitespace-nowrap translate-y-5 opacity-0"
						>
							Art on the skin is the imprint of your soul
						</h2>
						<div className="md:flex justify-between items-center">
							<p className="text-center md:text-left mon-light">
								<span className="word">Trust&nbsp;</span>
								<span className="word">the&nbsp;</span>
								<span className="word">professionals&nbsp;</span>
								<span className="word">and&nbsp;</span>
								<span className="word">create&nbsp;</span>
								<br className="hidden md:block" />
								<span className="word">a&nbsp;</span>
								<span className="word">unique&nbsp;</span>
								<span className="word">tattoo&nbsp;</span>
								<span className="word">that&nbsp;</span>
								<span className="word">will&nbsp;</span>
								<br className="hidden sm:block md:hidden" />
								<span className="word">become&nbsp;</span>
								<span className="word">part&nbsp;</span>
								<span className="word">of&nbsp;</span>
								<span className="word">your&nbsp;</span>
								<span className="word">story&nbsp;</span>
								<span className="word">and&nbsp;</span>
								<span className="word">emphasize&nbsp;</span>
								<span className="word">your&nbsp;</span>
								{/* <br className="hidden md:block" /> */}
								<span className="word">personality.&nbsp;</span>
							</p>

							<div
								className="hidden md:block translate-x-[50px] opacity-0"
								ref={wavyRef}
							>
								<Image
									src={wavy}
									alt="wavy Image"
									width={200}
									height={200}
									className="rounded-md  object-cover h-[80px] w-[80px] "
								/>
							</div>
						</div>

						<div className="mt-5 hidden md:block">
							<div className="flex items-end justify-between">
								<div
									ref={cardRef}
									className="rounded-2xl border border-black flex flex-col p-3 translate-x-[-50px] opacity-0"
								>
									<div className="flex items-center mb-3">
										<Image
											src="/hs4.webp"
											alt="trust icons"
											className="rounded-full w-8 h-8 object-cover"
											height={32}
											width={32}
										/>
										<Image
											src="/hs2.webp"
											alt="trust icons"
											className="rounded-full w-8 h-8 object-cover translate-x-[-10px]"
											height={32}
											width={32}
										/>
										<Image
											src="/hs3.webp"
											alt="trust icons"
											className="rounded-full w-8 h-8 object-cover translate-x-[-20px]"
											height={32}
											width={32}
										/>
										<div className="relative w-8 h-8 rounded-full">
											<Image
												src="/hs1.webp"
												alt="trust icons"
												className="rounded-full w-8 h-8 object-cover translate-x-[-30px]
                                                "
												height={32}
												width={32}
											/>
											<div className="absolute inset-0 backdrop-blur-sm z-20 translate-x-[-30px] rounded-full flex justify-center items-center text-xs">
												{" "}
												+70
											</div>
										</div>
									</div>

									<button className="rounded-2xl flex items-center gap-2 border border-greyish w-fit px-2 mb-3 mon-light">
										{<ICONS.star className="text-orange" />}{" "}
										<span className="text-sm">4.85</span>
									</button>

									<p className="text-xs mon-light">
										look at the reviews of <br /> our customers
									</p>
								</div>
								<div
									ref={buttonRef}
									className="flex items-center translate-x-[-50px] opacity-0"
								>
									<button className="lg:px-12 md:px-8 py-3 bg-black rounded-2xl flex justify-center items-center text-white whitespace-nowrap">
										Book Now
									</button>
									<button className="p-2 flex justify-center items-center rounded-full border border-black">
										<span>
											{<ICONS.rightArrow className="-rotate-[45deg] h-8 w-8" />}
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* hero image */}
					<div
						className="relative h-full w-full basis-1/2 opacity-0"
						ref={heroImageRef}
					>
						<Image
							src={heroImage}
							alt="hero section Image"
							width={500}
							height={327}
							// fill
							className="rounded-2xl object-cover h-[327px] w-full "
						/>
					</div>
				</div>

				<div
					className="my-5 md:hidden px-2 opacity-0 scale-110 translate-y-5"
					ref={mobileCardRef}
				>
					<div className="flex items-end justify-between ">
						<div className="rounded-2xl border border-black flex flex-col p-3 relative">
							<div className="absolute top-0 right-[-40%]">
								<Image
									src={wavy}
									alt="wavy Image"
									width={70}
									height={70}
									className="rounded-md  object-cover h-[50px] w-[50px] "
								/>
							</div>
							<div className="flex items-center mb-3">
								<Image
									src="/hs4.webp"
									alt="trust icons"
									className="rounded-full w-8 h-8 object-cover"
									height={32}
									width={32}
								/>
								<Image
									src="/hs2.webp"
									alt="trust icons"
									className="rounded-full w-8 h-8 object-cover translate-x-[-10px]"
									height={32}
									width={32}
								/>
								<Image
									src="/hs3.webp"
									alt="trust icons"
									className="rounded-full w-8 h-8 object-cover translate-x-[-20px]"
									height={32}
									width={32}
								/>
								<div className="relative w-8 h-8 rounded-full">
									<Image
										src="/hs1.webp"
										alt="trust icons"
										className="rounded-full w-8 h-8 object-cover translate-x-[-30px]"
										height={32}
										width={32}
									/>
									<div className="absolute inset-0 backdrop-blur-sm z-20 translate-x-[-30px] rounded-full flex justify-center items-center text-xs">
										{" "}
										+70
									</div>
								</div>
							</div>

							<button className="rounded-2xl flex items-center gap-2 border border-greyish w-fit px-2 mb-3 mon-light">
								{<ICONS.star className="text-orange" />}{" "}
								<span className="text-sm">4.85</span>
							</button>

							<p className="text-xs mon-light">
								look at the reviews of <br /> our customers
							</p>
						</div>
						<div className="flex items-center">
							<button className="px-6 py-3 bg-black rounded-2xl flex justify-center items-center text-white whitespace-nowrap">
								Book Now
							</button>
							<button className="p-2 flex justify-center items-center rounded-full border border-black">
								<span>
									{<ICONS.rightArrow className="-rotate-[45deg] h-8 w-8" />}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// Animate each word
// anime.timeline({ loop: false }).add({
// 	targets: ".word",
// 	translateY: [-10, 0],
//     color: ["#fff", "#000"],
// 	opacity: [1],
// 	easing: "easeOutExpo",
// 	duration: 3600,
// 	delay: (_, i) => 100 * i,
// });

// scrollTrigger: {
//     trigger: ".container",
//     pin: true, // pin the trigger element while active
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "+=500", // end after scrolling 500px beyond the start
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
