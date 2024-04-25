"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "../app/globals.css";

function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 0.005,
				smoothWheel: true,
				syncTouch: true,
				easing: (t: number): number => (Math.cos(Math.PI * t) - 1) / 2,
			}}
		>
			{children}
		</ReactLenis>
	);
}
export default SmoothScroll;
