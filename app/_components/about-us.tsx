import { ICONS, info } from "@/constants";
import Image from "next/image";
import pen from "@/public/tatto-pen.webp";

export default function AboutUs() {
	return (
		<section id="about-us" className="px-4 py-2 mt-20">
			<div className="flex flex-col sm:flex-row sm:justify-between  justify-center items-center">
				<h2 className="text-center py-10 text-7xl uppercase">
					your reliable tattoo studio
				</h2>
				<p className="hidden sm:block w-[250px] mon-light text-sm">
					Our tattoo artists will help you turn your ideas into incredible
					images on your skin. Trust the real professionals of your buiness.
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-between mt-5 md:gap-6 gap-10">
				<div className="basis-3/6 ">
					<div className="grid grid-cols-2 gap-4 ">
						{info.map((info, i) => {
							const { title, label } = info;
							return (
								<div
									key={i}
									className={` ${
										i === 1 && "bg-black text-white"
									} rounded-2xl border border-black flex flex-col p-3`}
								>
									<h1 className="text-9xl humane-bold">{title}</h1>
									<p className="text-sm">{label}</p>
								</div>
							);
						})}
					</div>
					<p className="mt-5 sm:hidden w-[250px]  text-xs">
						A cozy atmosphere, a wide range of designs, safety and
						professionalism. Create an individual piece of art on your body.
					</p>
				</div>

				<div className=" basis-4/6 rounded-2xl bg-greyish md:pl-8 md:pr-6 px-3 md:px-0 md:py-6 py-3 grid grid-cols-2 md:gap-7 gap-5">
					<div className="flex flex-col justify-between col-span-1">
						<p className="text-xs md:min-w-[170px]">
							We value every customer, <br className="hidden md:block" /> so we
							develop individual <br className="hidden md:block" /> sketches
							absolutely free of <br className="hidden md:block" /> charge. Sign
							up for a <br className="hidden md:block" /> consultation now and
							get a <br className="hidden md:block" />
							<span className="text-orange text-xs">20%</span> discount on your
							first tattoo
						</p>
						<button className="flex items-center">
							<div className="p-5 rounded-full border border-black"></div>
							<div className="p-2.5 -translate-x-4 flex justify-center items-center rounded-full bg-black text-white">
								<span>
									{<ICONS.rightArrow className="-rotate-[45deg] h-6 w-6" />}
								</span>
							</div>

							<div className="text-xs ">Learn More</div>
						</button>
					</div>
					<div className="col-span-1 min-h-[200px]">
						<Image
							src={pen}
							alt="tatto pen"
							width={300}
							height={300}
							className="rounded-2xl object-cover h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
