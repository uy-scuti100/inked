"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { MobileFooter } from "./footer-components/mobile-footer";
import { DesktopFooter } from "./footer-components/desktop-footer";

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
			if (screensize <= 960) {
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
		<footer className="my-10 px-4">
			{isMobile ? (
				<MobileFooter email={email} setEmail={setEmail} />
			) : (
				<DesktopFooter email={email} setEmail={setEmail} />
			)}
		</footer>
	);
}
