<script lang="ts">
	import { dev } from "$app/env";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	import { Footer, Navbar } from "$layout";
	import { links, NavbarItem } from "$data/links";
	import { docs } from "$data/docs";

	import "fluent-svelte/theme.css";

	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	import Person from "@fluentui/svg-icons/icons/person_24_regular.svg?raw";
	import Twitter from "$static/ui/icons/twitter.svg?raw";
	import Discord from "$static/ui/icons/discord.svg?raw";
	import GitHub from "$static/ui/icons/github.svg?raw";

	const { github } = links;

	const navbarItems: NavbarItem[] = [
		{
			name: "Home",
			path: "/",
			icon: Home
		},
		{
			name: "Docs",
			path: "/docs",
			sidebarTree: docs,
			icon: Book
		},
		{
			name: "Blog",
			path: "/blog",
			icon: News
		},
		{
			name: "About",
			path: "/about",
			icon: Person
		}
	];

	const navbarButtons = [
		{
			label: "GitHub",
			href: `https://github.com/${ links.github }`,
			icon: GitHub
		},
		{
			label: "Discord",
			href: `https://discord.com/${ links.discord }`,
			icon: Discord
		},
		{
			label: "Twitter",
			href: `https://twitter.com/${ links.twitter }`,
			icon: Twitter
		}
	];

	let theme: "light" | "dark" = "light";

	onMount(() => {
		theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
			theme = e.matches ? "dark" : "light";
		});
	});

</script>

<svelte:head>
	<meta content="Depth" name="og:site_name">

	<meta content="website" name="og:type">

	<link
		href="/branding/logo.png"
		rel="icon"
		type="image/svg+xml"
	>
	<meta
		content="Depth, Protocol, Otherworld, GitHub, Developers, Codename Depth, DepthCDLS, Cube, Area, Heaven, Gaming, Tikka, Jupiter, DeveloperWOW64, Developer, Fluent, Svelte, Eclipse, computer, code, Codrex, Andrex, Python, XAML, Fluent-Svelte, Files, DeveloperWEB64, DeveloperDWNLD64, DownloadWEB64, "
		name="keywords"
	>

	<meta content="#084840" name="theme-color">

</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
