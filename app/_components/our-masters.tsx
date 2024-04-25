import { masters } from "@/constants";
import Image from "next/image";
import React from "react";

export default function OurMasters() {
	return (
		<section id="masters" className="px-4 py-2 mt-20">
			<div className="flex justify-between items-center border-b  border-greyish">
				<h2 className="py-10 text-7xl uppercase whitespace-nowrap">
					Our Masters
				</h2>
				<p className="ml-8 sm:ml-0 w-[250px] mon-light text-xs sm:text-sm">
					Our tattoo artists will help you turn your ideas into incredible
					images on your skin. Trust the real professionals of your business.
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 mt-6">
				{masters.map((master, i) => {
					const { name, image, info } = master;
					return (
						<div key={i}>
							<div className="relative sm:h-[250px] h-[200px] mb-2">
								<Image
									src={image}
									alt={name}
									// height={300}
									// width={300}
									fill
									className="rounded-2xl object-cover bg-top"
								/>
							</div>
							<p className="master_name pb-2">{name}</p>
							<p className="text-xs mon-light pt-2">{info}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
