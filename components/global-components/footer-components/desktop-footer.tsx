import { ICONS, footerLinks } from "@/constants";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent } from "react";
import logo from "@/public/logo.png";

export const DesktopFooter = ({
	email,
	setEmail,
}: {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
	};

	return (
		<div className="rounded-2xl bg-black py-10 px-4">
			<div>
				<div className="flex justify-between items-center  border-b border-greyish/20 pb-10">
					<div>
						<h2 className=" text-7xl uppercase text-white ">
							Ready to work with us?
						</h2>
						<p className="text-sm text-white">
							The discount for the first tattoo is{" "}
							<span className="text-orange text-sm">20%</span>
						</p>
					</div>
					<div className="text-5xl happy-monkey text-white">
						Your tattoo studio
					</div>
				</div>
			</div>

			<div className="flex justify-between items-end mt-5">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2">
							<Image
								src={logo}
								width={330}
								height={326}
								alt="logo"
								placeholder="blur"
								className="w-12 h-12 rounded-full object-cover"
							/>

							<h2 className="text-white text-4xl">Inkly Tattoos</h2>
						</div>
						<p className="text-white text-sm opacity-60">
							A studio that will make <br /> your body a little more unique
						</p>
					</div>
					<div className="flex justify-center">
						<form
							onSubmit={handleSubmit}
							className="mt-5 flex justify-between border-white/50 border rounded-2xl py-2 px-2"
						>
							<input
								required
								placeholder="hey@egmail.com"
								type="email"
								className="bg-transparent pr-4 text-white outline-none"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							<div className="p-2.5 flex justify-center items-center rounded-full bg-white text-white">
								<button type="submit">
									<ICONS.rightArrow className="text-black -rotate-[45deg] h-6 w-6" />
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-10 text-white">
					<div className="flex items-start gap-8">
						{footerLinks.map((f, i) => {
							const { title, links } = f;
							return (
								<div key={i} className=" flex gap-4">
									<div>
										<h3 className="capitalize font-bold mb-3 text-sm">
											{title}
										</h3>
										<div className={`flex flex-col gap-4`}>
											{i === 0 ? (
												<div className="flex flex-col gap-2 opacity-70">
													{links.map((l, j) => (
														<div key={j}>
															{j === 0 ? (
																<div className="flex gap-2 items-center">
																	<p className="text-[10px] opacity-70 max-w-[150px]">
																		{l}
																	</p>
																</div>
															) : j === 1 ? (
																<div className="flex gap-2 items-center">
																	<MapPin className="w-4 h-4" />
																	<p className="text-[10px] opacity-70">{l}</p>
																</div>
															) : j === 2 ? (
																<div className="flex gap-2 items-center">
																	<Phone className="w-4 h-4" />
																	<a
																		href={"#"}
																		className="text-[10px] opacity-70"
																	>
																		{l}
																	</a>
																</div>
															) : (
																<Link
																	href={"/"}
																	className="text-[10px] opacity-70"
																>
																	{l}
																</Link>
															)}
														</div>
													))}
												</div>
											) : (
												<div className="flex flex-col gap-0">
													{links.map((l, j) => (
														<div key={j}>
															<Link
																href={"/"}
																className="text-[10px] opacity-70"
															>
																{l}
															</Link>
														</div>
													))}
												</div>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
