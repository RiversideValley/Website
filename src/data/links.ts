import type { DocsMap } from "$data/docs";

export const links = {
	github: "OpenAndrexial",
	twitter: "OpenAndrexial",
	discord: "Z74UAQ5vPR"
};

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: any;
	type?: string;
	sidebarTree?: DocsMap[];
};
