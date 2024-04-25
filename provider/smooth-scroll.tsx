"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 0.005,
				syncTouchLerp: 0.075,
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
