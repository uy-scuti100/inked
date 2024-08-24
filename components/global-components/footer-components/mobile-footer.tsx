import { ICONS, footerLinks } from "@/constants";
import sr from "@/lib/sr";
import { srConfig } from "@/lib/utils";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useEffect, useRef } from "react";

export const MobileFooter = ({
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

	const footerTitle = useRef<HTMLDivElement | null>(null);
	const footerProjects = useRef<(HTMLDivElement | null)[]>([]);
	const footerSubTitle = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (sr) {
			sr.reveal(footerTitle.current!, srConfig());
			sr.reveal(footerSubTitle.current!, srConfig());
			footerProjects.current.forEach(
				(ref, i) => ref && sr?.reveal(ref, srConfig(i * 100))
			);
		}
	}, []);

	return (
		<div>
			<div className="rounded-2xl bg-black py-10">
				<h2
					className="text-center text-7xl uppercase text-white "
					ref={footerTitle}
				>
					Ready to work with us?
				</h2>
				<p className="text-sm text-white text-center" ref={footerSubTitle}>
					The discount for the first tattoo is{" "}
					<span className="text-orange text-sm">20%</span>
				</p>
				<div className="flex justify-center">
					<form
						onSubmit={handleSubmit}
						className="mt-5 flex justify-between border-white/50 border rounded-2xl py-2 px-4  "
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
			<div className="mt-10">
				<div className="grid grid-cols-2 gap-8">
					{footerLinks.map((f, i) => {
						const { title, links } = f;
						return (
							<div
								key={i}
								ref={(el) => {
									if (el) {
										footerProjects.current[i] = el;
									}
								}}
							>
								<h3 className="capitalize text-xl font-bold mb-3">{title}</h3>
								<div className={`flex flex-col gap-4`}>
									{i === 0 ? (
										<div className="flex flex-col gap-4 opacity-70">
											{links.map((l, j) => (
												<div key={j}>
													{j === 1 ? (
														<div className="flex gap-2 items-center">
															<MapPin className="w-4 h-4" />
															<p className="text-sm opacity-70">{l}</p>
														</div>
													) : j === 2 ? (
														<div className="flex gap-2 items-center">
															<Phone className="w-4 h-4" />
															<a href={"#"} className="text-sm opacity-70">
																{l}
															</a>
														</div>
													) : (
														<Link href={"/"} className="text-sm opacity-70">
															{l}
														</Link>
													)}
												</div>
											))}
										</div>
									) : (
										<div className="flex flex-col gap-4">
											{links.map((l, j) => (
												<div key={j}>
													<Link href={"/"} className="text-sm opacity-70">
														{l}
													</Link>
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
