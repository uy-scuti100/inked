import Image from "next/image";
import heroImage from "../../public/hero-tat.webp";
import wavy from "../../public/wavy.png";
import { ICONS } from "@/constants";

export default function Herosection() {
	return (
		<section className="px-4">
			<h1 className="pt-[70px] sm:pt-0 text-center lg:text-[9.8rem] md:text-[8rem] sm:text-[7.5rem] text-[7rem] border-b border-greyish mb-7 mt-3 leading-[100%]">
				WE CREATE ART ON <br className="sm:hidden" /> PEOPLE&apos;S BODIES
			</h1>
			<div>
				<div className="flex flex-col items-center md:flex-row gap-10 lg:gap-20 px-2">
					<div className="basis-1/2">
						<h2 className="text-[3.5rem] sm:text-[4rem] text-center md:text-left whitespace-nowrap">
							Art on the skin is the imprint of your soul
						</h2>
						<div className="md:flex justify-between items-center">
							<p className="text-center md:text-left  mon-light">
								Trust the professionals and create{" "}
								<br className="hidden md:block" /> a unique tattoo that will{" "}
								<br className="hidden sm:block md:hidden" />
								become <br className="hidden md:block" /> part of your story and
								emphasize <br className="hidden md:block" />
								your personality.
							</p>

							<div className="hidden md:block">
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
								<div className="rounded-2xl border border-black flex flex-col p-3">
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
								<div className="flex items-center">
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
					<div className="relative h-full w-full basis-1/2">
						<Image
							src={heroImage}
							alt="hero section Image"
							width={500}
							height={327}
							// fill
							className="rounded-2xl object-cover h-[327px] w-full"
						/>
					</div>
				</div>

				<div className="my-5 md:hidden px-2">
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
