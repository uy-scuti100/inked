"use client";
import { useState, useEffect } from "react";

export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
		// Check for server-side rendering and default to true
		if (typeof window === "undefined") return true;

		// Efficiently check media query using window.matchMedia
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

// https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
