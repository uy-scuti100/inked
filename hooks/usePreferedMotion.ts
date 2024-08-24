"use client";

import { useState, useEffect } from "react";

function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
		if (typeof window === "undefined") return true;
		const prefersMotion = window.matchMedia(
			"(prefers-reduced-motion: no-preference)"
		);
		return !prefersMotion.matches;
	});

	useEffect(() => {
		const prefersMotion = window.matchMedia(
			"(prefers-reduced-motion: no-preference)"
		);

		const listener = () => setPrefersReducedMotion(!prefersMotion.matches);

		prefersMotion.addEventListener("change", listener);

		return () => prefersMotion.removeEventListener("change", listener);
	}, []);

	return prefersReducedMotion;
}

export default usePrefersReducedMotion;
