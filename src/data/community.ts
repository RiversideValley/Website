import { links } from "$data/links";

const github = links.github;

export type ContributorData = {
	login: string;
	avatar_url: string;
	html_url: string;
};

// Returns a list of 25 paged contributors to the
export const getContributors: (
	pageNumber: number
) => Promise<ContributorData[]> = async (pageNumber = 0) =>
	await fetch(
		`https://api.github.com/orgs/${github}/members`
	)
		// Parse body to object
		.then(result => result.json())
		// Error handler
		.catch(err => {
			console.error(err);
			return "";
		});