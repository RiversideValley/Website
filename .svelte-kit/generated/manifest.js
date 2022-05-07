const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\about\\index.svelte"),
	() => import("..\\..\\src\\routes\\blog\\index.svelte"),
	() => import("..\\..\\src\\routes\\blog\\posts\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\blog\\posts\\web-release.md"),
	() => import("..\\..\\src\\routes\\docs\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\docs\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\fluxduct\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\fluxduct\\syntax\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\fluxduct\\style\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\personal\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\depth\\index.md"),
	() => import("..\\..\\src\\routes\\docs\\depth\\assets\\index.md")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/about/index.svelte
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/blog/posts/web-release.md
	[/^\/blog\/posts\/web-release\/?$/, [c[0], c[5], c[6]], [c[1]]],

	// src/routes/docs/index.md
	[/^\/docs\/?$/, [c[0], c[7], c[8]], [c[1]]],

	// src/routes/docs/fluxduct/index.md
	[/^\/docs\/fluxduct\/?$/, [c[0], c[7], c[9]], [c[1]]],

	// src/routes/docs/fluxduct/syntax/index.md
	[/^\/docs\/fluxduct\/syntax\/?$/, [c[0], c[7], c[10]], [c[1]]],

	// src/routes/docs/fluxduct/style/index.md
	[/^\/docs\/fluxduct\/style\/?$/, [c[0], c[7], c[11]], [c[1]]],

	// src/routes/docs/personal/index.md
	[/^\/docs\/personal\/?$/, [c[0], c[7], c[12]], [c[1]]],

	// src/routes/docs/depth/index.md
	[/^\/docs\/depth\/?$/, [c[0], c[7], c[13]], [c[1]]],

	// src/routes/docs/depth/assets/index.md
	[/^\/docs\/depth\/assets\/?$/, [c[0], c[7], c[14]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];