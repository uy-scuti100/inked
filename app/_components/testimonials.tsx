import { ICONS, testimonial } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
	return (
		<section id="tßestimonials" className="px-4 py-2 mt-20">
			<h2 className="text-center py-10 text-6xl sm:text-7xl uppercase sm:text-left">
				Not sure about your decisions? see the reviews of people who trusted us!
			</h2>

			<div className="mt-5">
				<div className="grid  grid-cols-1 sm:grid-cols-2 gap-6">
					{testimonial.map((t, i) => {
						const { name, body, image } = t;
						return (
							<figure key={i} className="bg-greyish rounded-2xl px-8 py-6">
								<figcaption className=" gap-10 flex flex-col justify-between">
									<div className="flex flex-col gap-3">
										<Image
											src={image}
											alt={name}
											height={50}
											width={50}
											className="rounded-full object-cover w-[50px] h-[50px] bg-bottom"
										/>

										<p className="mon-light text-sm">{body}</p>
									</div>
									<div>
										<p className="font-bold">{name}</p>
										<div className="flex items-center">
											{new Array(5).fill(null).map((_, i) => (
												<div key={i}>
													{<ICONS.star className="text-amber-300 w-6 h-6" />}
												</div>
											))}
										</div>
									</div>
								</figcaption>
							</figure>
						);
					})}
				</div>
			</div>
		</section>
	);
}
