// import { links } from "$data/links";
// 
// export type ContributorData = {
// 	login: string;
// 	avatar_url: string;
// 	html_url: string;
// 	type: "User" | "Bot";
// };
// 
// Returns a list of 35 paged members of Depth
// export const getContributors: (
// 	pageNumber: number
// ) => Promise<ContributorData[]> = async (pageNumber = 0) =>
// 	await fetch(
// 		`https://api.github.com/orgs/${links.github}/members?per_page=35&page=${pageNumber}`
// 	)
// 		// Parse body to object
// 		.then(result => result.json())
// 		// Error handler
// 		.catch(err => {
// 			console.error(err);
// 			return "";
// 		});
// 
// type ContributorPersonalData = {
// 	name: string;
// 	location: string;
// 	login: string;
// 	avatar_url: string;
// 	html_url: string;
// 	type: "User" | "Bot";
// };
// 
// Returns a list of 35 paged members of Depth
// export const getPersonalContributorData: (
// 		pageNumber: number
// ) => Promise<ContributorPersonalData[]> = async (pageNumber = 0) =>
// 	await fetch(
// 		`https://api.github.com/users/${login}?per_page=35&page=${pageNumber}`
// 	)
// 		// Parse body to object
// 		.then(result => result.json())
// 		// Error handler
// 		.catch(err => {
// 			console.error(err);
// 			return "";
// });