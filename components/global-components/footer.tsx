"use client";

import { ICONS, footerLinks } from "@/constants";
import { LocateIcon, Phone } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";

export const handleSubmit = (e: FormEvent, email: string) => {
	e.preventDefault();
	console.log(email);
};

export default function Footer() {
	const [isMobile, setIsMobile] = useState(true);
	const [email, setEmail] = useState("");

	useEffect(() => {
		const handleChange = () => {
			const screensize = window.innerWidth;
			if (screensize <= 640) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleChange();

		window.addEventListener("resize", handleChange);
		return () => window.removeEventListener("resize", handleChange);
	}, []);

	return (
		<footer className="my-20 px-4">
			{isMobile ? (
				<MobileFooter email={email} setEmail={setEmail} />
			) : (
				<DesktopFooter email={email} setEmail={setEmail} />
			)}
		</footer>
	);
}

const MobileFooter = ({
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
		<div>
			<div className="rounded-2xl bg-black py-10">
				<h2 className="text-center text-7xl uppercase text-white ">
					Ready to work with us?
				</h2>
				<p className="text-sm text-white text-center">
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
							<div key={i} className={`${i % 2 === 0 && "self-end"}`}>
								<h3 className="capitalize text-xl font-bold mb-3">{title}</h3>

								{i === 0 ? (
									<div className="flex flex-col gap-4 opacity-70">
										{links.map((l, i) => (
											<div key={i}>
												{i === 1 ? (
													<div className="flex gap-2 items-center">
														<LocateIcon className="w-4 h-4" />
														<p className="text-sm opacity-70"> {l}</p>
													</div>
												) : i === 2 ? (
													<div className="flex gap-2 items-center">
														<Phone className="w-4 h-4" />
														<Link href={"/"} className="text-sm opacity-70">
															{" "}
															{l}
														</Link>
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
									<div className="flex flex-col gap-4 ">
										{links.map((l, i) => (
											<div key={i}>
												<Link href={"/"} className="text-sm opacity-70 ">
													{l}
												</Link>
											</div>
										))}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
const DesktopFooter = ({
	email,
	setEmail,
}: {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return <div>desktop</div>;
};
