"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import "../app/globals.css";

function SmoothScroll({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 0.4,
				// lerp: 1.2,
				smoothWheel: true,
				syncTouch: true,
				syncTouchLerp: 1.2,
				// easing: (t: number): number => Math.sin((t * Math.PI) / 2),
			}}
		>
			{children}
		</ReactLenis>
	);
}
export default SmoothScroll;
