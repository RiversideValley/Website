import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	const modules = import.meta.glob("./detail/*.md");
	let body = [];

	for (const path in modules) {
		body.push(
			modules[path]().then(({ metadata }) => {
				return {
					metadata,
					path
				};
			})
		);
	}

	const posts = await Promise.all(body);

	// Randomise the order of the posts.

	posts.sort(() => Math.random() - 0.5);

	return { body: posts };
};
