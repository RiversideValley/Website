import type { DocsMap } from "$data/docs";

export const links = {
	github: "RiversideValley",
	twitter: "RIVERS1D3",
	youtube: "@RiversideValley",
	figma: "@Riverside",
	discord: "invite/Z74UAQ5vPR",
	mail: {
		business: "business@theriversi.de",
		support: "support@theriversi.de",
		apply: "apply@theriversi.de"
	},
	cdn: {
		download: "https://flare.esmerelda.tech",
		content: "https://cloud.esmerelda.tech",
		js: "https://components.esmerelda.tech"
	}
};

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: any;
	type?: string;
	sidebarTree?: DocsMap[];
};
