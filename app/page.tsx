import React from "react";
import Herosection from "./_component/hero-section";
import AboutUs from "./_component/about-us";
import OurMasters from "./_component/our-masters";
import OurWork from "./_component/our-work";
import Testimonials from "./_component/testimonials";

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
