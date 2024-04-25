"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 0.0001,
				// lerp: 0.1,
				smoothWheel: true,
				syncTouch: true,
				// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				easing: (t) => t,
			}}
		>
			{children}
		</ReactLenis>
	);
}
export default SmoothScroll;
