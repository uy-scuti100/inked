import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface TestimonialProp {
	name: string;
	body: string;
	image: string;
}
interface InfoProp {
	title: string;
	label: string;
}
interface MasterProp {
	image: string;
	name: string;
	info: string;
}
export const info: InfoProp[] = [
	{
		title: "750",
		label: "Positive Reviews",
	},
	{
		title: "10+",
		label: "Years of experience",
	},
	{
		title: "830+",
		label: "Completed works",
	},
	{
		title: "20+",
		label: "Award winnings",
	},
];

interface footerLinks {
	title: string;
	links: string[];
}
export const ICONS = {
	twitter: FaXTwitter,
	instagram: FaInstagram,
	star: FaStar,
	rightArrow: MdOutlineArrowRightAlt,
	menu: FiMenu,
	close: IoMdClose,
};

export const masters: MasterProp[] = [
	{
		image: "/master1.webp",
		name: "Wiliam Smith",
		info: "Gothic, Graphics BAW overlap ",
	},
	{
		image: "/master2.jpeg",
		name: "Alma Brown",
		info: "Color Realism, BAW Realism",
	},
	{
		image: "/master3.jpeg",
		name: "Emily Miller",
		info: "Old School, Graphics, Abstraction",
	},
	{
		image: "/master4.jpeg",
		name: "Alison Brown",
		info: "Minimalism, Dotwork, Abstraction",
	},
];
export const testimonial: TestimonialProp[] = [
	{
		name: "Scarlett Johnson",
		body: "I visited Inkly tattoo parlour for the first time and was delighted!. The masters were professionals, the work was done efficiently and without pain. I am happy with the result and plan to come back again. Thanks for the excellent service.",
		image: "/hs2.webp",
	},
	{
		name: "Jacob Smith",
		body: "Super impressions from the salon. Professional and friendly craftsmen, pleasant atmosphere and perfect result. I am very happy, I will definitely come back!",
		image: "/hs1.webp",
	},
	{
		name: "Olivia Williams",
		body: "Visiting the salon pleased me at all levels - a pleasant and cozy atmosphere, professional craftsmen who embodied my idea in a tattoo perfectly. I am delighted with the result and will definitely come back here again.",
		image: "/hs4.webp",
	},
	{
		name: "Ava Thompson",
		body: "Visiting Inkly was a pleasnt suprise - the show of professionalism by the masters, the cozy atmosphere and the tattoo exceeded my expectations. I am very pleased with the result and will definitely come back here again. ",
		image: "/hs3.webp",
	},
];

export const footerLinks = [
	{
		title: "inkly tattos",
		links: [
			"We have been doing tattoos for 7 years, we have hundreds of positive reviews. ",
			"Moscow, Russia",
			"+7 999 555-55-55",
			"www.inklytattoo.com",
		],
	},
	{
		title: "About",
		links: ["Masters", "Works", "Reviews", "FAQ", "About Us"],
	},
	{
		title: "Social Media",
		links: ["facebook", "Instgram", "Twitter (X)", "Telegram"],
	},
	{
		title: "Security",
		links: ["Privacy Policy", "User Agreements", "Copyright"],
	},
];
