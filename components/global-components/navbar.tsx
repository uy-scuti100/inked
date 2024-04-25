"use client";

import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);
	const toggleNav = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<div
				className={` ${
					visible ? "fixed nav-visible" : "absolute nav-hidden"
				}  flex sm:static top-3  justify-between left-0 right-0 w-[98%] z-[999999] sm:pt-3 items-center flex-col px-2 py-3 border border-greyish rounded-full bg-greyish sm:mt-3 mx-auto navbar`}
			>
				<div className="justify-between items-center flex w-full">
					<Link href={"/"}>
						<Image
							src={logo}
							width={330}
							height={326}
							alt="logo"
							placeholder="blur"
							className="w-12 h-12 rounded-full object-cover"
						/>
					</Link>
					<nav className="hidden sm:flex items-center gap-10">
						<Link href={"#about-us"}>About us</Link>
						<Link href={"#work"}>Work</Link>
						<Link href={"#contact"}>Contact</Link>
						<Link href={"#masters"}>Masters</Link>
					</nav>
					<div>
						<div className="hidden sm:block">
							<button className="text-orange">
								{<ICONS.twitter className="h-8 w-8" />}
							</button>

							<button className="text-orange ml-4">
								{<ICONS.instagram className="h-8 w-8" />}
							</button>
						</div>
						<button
							onClick={toggleNav}
							className="sm:hidden justify-center items-center flex p-3 rounded-full border border-black"
						>
							{<ICONS.menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
				<nav
					style={{ height: "calc(100vh - 70px)" }}
					className={`absolute transition-all rounded-2xl top-[78px] duration-300 ease-linear h-full z-50 sm:hidden w-full bg-greyish text-black} ${
						open ? " left-0 " : "left-[-150%]"
					}`}
				>
					<div className="flex flex-col items-center gap-10 pt-20">
						<Link
							onClick={toggleNav}
							href={"#about-us"}
							className="text-7xl font-bold mon-light text-center"
						>
							About Us
						</Link>
						<Link
							onClick={toggleNav}
							href={"#work"}
							className="font-bold text-7xl mon-light text-center"
						>
							Work
						</Link>
						<Link
							onClick={toggleNav}
							href={"#contact"}
							className="text-7xl font-bold mon-light text-center "
						>
							Contact
						</Link>
						<Link
							onClick={toggleNav}
							href={"#masters"}
							className="font-bold text-7xl mon-light text-center"
						>
							Masters
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
}
