import React from "react";
import Herosection from "./_components/hero-section";
import AboutUs from "./_components/about-us";
import OurMasters from "./_components/our-masters";
import OurWork from "./_components/our-work";
import Testimonials from "./_components/testimonials";

export default function hello() {
	return (
		<main>
			<Herosection />
			<AboutUs />
			<OurMasters />
			<OurWork />
			<Testimonials />
		</main>
	);
}
