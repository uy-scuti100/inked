"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "../app/globals.css";

function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.5,
				lerp: 0.1,
				smoothWheel: true,
				syncTouch: true,
				easing: (t: number): number => Math.sin((t * Math.PI) / 2),
			}}
		>
			{children}
		</ReactLenis>
	);
}
export default SmoothScroll;
