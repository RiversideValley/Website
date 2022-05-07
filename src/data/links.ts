import type { DocsMap } from "$data/docs";

export const links = {
	discord: "kUDTrD7w3M",
	twitter: "DeveloperWOW64",
	github: {
		owner: "DeveloperWOW64",
		repo: "#"
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
