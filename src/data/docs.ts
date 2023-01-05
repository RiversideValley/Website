export type DocsMap = {
	name: string;
	path?: string;
	type?: "page" | "category";
	pages?: DocsMap[];
};

export const docs: DocsMap[] = [
	{
		name: "Overview",
		path: ""
	},
	{
		type: "category",
		name: "Personal",
		pages: [
			{
				name: "Overview",
				path: "/personal"
			}
		]
	},
	{
		type: "category",
		name: "Codename Depth",
		pages: [
			{
				name: "Overview",
				path: "/depth"
			},
			{
				name: "Asset Storage",
				path: "/depth/assets"
			}
		]
	},
	{
		type: "category",
		name: "Project Fluxduct",
		pages: [
			{
				name: "Overview",
				path: "/fluxduct"
			},
			{
				name: "Style Rules",
				path: "/fluxduct/style"
			},
			{
				name: "Syntax",
				path: "/fluxduct/syntax"
			}
		]
	}
];
