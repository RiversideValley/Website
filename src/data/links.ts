import type { DocsMap } from "$data/docs";

export const links = {
	github: {
		owner: "DepthCDLS"
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
