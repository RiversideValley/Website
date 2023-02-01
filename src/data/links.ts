import type { DocsMap } from "$data/docs";

export const links = {
	github: "RiversideValley",
	twitter: "RIVERS1D3",
	discord: "invite/Z74UAQ5vPR",
	mail: {
		business: "business@andrexial.org.uk",
		personal: "me@andrexial.org.uk",
		apply: "apply@andrexial.org.uk"
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
