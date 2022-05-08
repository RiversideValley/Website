<script lang="ts">
	import { dev } from "$app/env";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	import { Footer, Navbar } from "$layout";
	import { links, NavbarItem } from "$data/links";
	import { docs } from "$data/docs";

	import "fluent-svelte/theme.css";

	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	import Person from "@fluentui/svg-icons/icons/person_24_regular.svg?raw";
	import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw";

	const { github, discord } = links;

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
			label: "Discord",
			href: `https://discord.gg/${ discord }`,
			icon: Chat
		},
		{
			label: "GitHub",
			href: `https://github.com/${ github.owner }`,
			icon: Code
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
	<meta content="Codrex" name="og:site_name">

	<meta content="website" name="og:type">

	<link
		href="/branding/logo.png"
		rel="icon"
		type="image/svg+xml"
	>
	<meta
		content="Tikka, Jupiter, DeveloperWOW64, Developer, Fluent, Svelte, Eclipse, computer, code, Codrex, Andrex, Python, XAML, Fluent-Svelte, Files, DeveloperWEB64, DeveloperDWNLD64, DownloadWEB64, "
		name="keywords"
	>

	<meta content="#084840" name="theme-color">

	<meta content="summary_large_image" name="twitter:card">
	<meta content="@DeveloperWOW64" name="twitter:site">
	<meta content="@DeveloperWOW64" name="twitter:creator">
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
