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
	import Mail from "@fluentui/svg-icons/icons/mail_24_filled.svg?raw"
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
		},
		{
			label: "Mail",
			href: `mailto:${ links.mail.business }`,
			icon: Mail
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
		content="Depth, Depth Open Source, Depth github, Depth website, Depth enterprises, Depth company, Depth limited, Depth careers, Andrexial, Andrex github, Andrex developer, Codrex.dev, andrexial.org.uk, andrexial.net, andrexial.co.uk, andrexial.uk, andrexial.dev, crescent@andrexial.org.uk, @andrexial.org.uk, noob@andrexial.org.uk, business@andrexial.org.uk, apply@andrexial.org.uk, Esmerelda, Esmerelda-Community, Esme, Esme AI, Esmerelda Intelligence, Esmerelda.NET, Esmerelda flux, Python flux, codename fluxduct, codename capacitor, codename inspire, Emerald, Emerald Minecraft, emerald support, emerald problem, Emerald github, OpenAndrexial github, Crescent, Crescential, Crescential Campus, Crescent Technology, Crescential Life, Protocol, Protocol SDK, download Protocol, Protocol support, Protocol website, Flux, Foundation, Foundation classes, download flux, download flux developer edition, Inspire, Inspire web, Inspire home, Inspire support, Inspire IDE, Depth_(enterprise), Depth OSS, Depth computer, Depth software, Depth Enterprises Limited, Depth Enterprises Ltd, Flux support, help with flux, Othergame, Otheregional, Other, Otherworld game, Otherworld videogame, Otherworld, GitHub, Developers, Codename Depth, CrescentDepth, DepthCDLS, Cube, Cube game, Cube otherworld, Othercube, Area, Area game, Area 64, Area 32, Area 72, Area 52, Heaven, Heaven Otherworld, Gaming, Tikka, Tikkalon, Jupiter, DeveloperWOW64, Developer, Fluent, Svelte, Eclipse, computer, code, Codrex, Andrex, Python, XAML, Fluent-Svelte, fluent svelte, Files, DeveloperWEB64, DeveloperDWNLD64, Fluent design, WinUI, uses python "
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
