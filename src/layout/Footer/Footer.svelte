<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { links } from "$data/links";
	import Discord from "$static/ui/icons/discord.svg?raw";
	import Github from "$static/ui/icons/github.svg?raw";
	import Twitter from "$static/ui/icons/twitter.svg?raw";

	let innerWidth = 649; // Don't render the mobile layout before hydrationlet sidebarVisible = false;
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: HTMLButtonElement;

	const toggleSidebar = () => {
		sidebarVisible = !sidebarVisible;
	};

	const handleOuterClick = (e: MouseEvent) => {
		if (!(
			!sidebarVisible ||
			e.target === sidebarButton ||
			sidebarButton.contains(e.target as Node) ||
			e.target === sidebar ||
			sidebar.contains(e.target as Node)
		)) {
			toggleSidebar();
		}
	}
</script>

<svelte:window bind:innerWidth on:click={handleOuterClick} />

<PageSection type="footer" id="page-footer">
	<div class="column">
		<a class="logo" href="/" sveltekit:prefetch>
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="/branding/logo.png">
				<source media="(prefers-color-scheme: light)" srcset="/branding/logo.png">
				<img alt="DeveloperWOW64 logo" height="32" src="/branding/logo.png" width="32">
			</picture>
			Codrex
		</a>
		<div class="social-links">
			<IconButton
				href="https://github.com/{links.github.owner}/"
				title="GitHub"
				aria-label="GitHub"
				{...externalLink}
			>
				{@html Github}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="Twitter"
				aria-label="Twitter"
				{...externalLink}
			>
				{@html Twitter}
			</IconButton>
		</div>
		<p></p>
		<a href="https://vercel.app/" 
			{...externalLink}
		>
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="/branding/vercel-dark.svg">
				<source media="(prefers-color-scheme: light)" srcset="/branding/vercel-light.svg">
				<img alt= "Powered by Vercel" src="/branding/logo.png" width="192">
			</picture>
		</a>
	</div>
	<div class="column">
		{#if innerWidth < 648}
		<div></div>
		{:else}
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="https://github-readme-stats.vercel.app/api?username=DeveloperWOW64&include_all_commits=true&show_icons=true&hide_border=true&theme=dark"
				
			>
			<source
				media="(prefers-color-scheme: light)"
				srcset="https://github-readme-stats.vercel.app/api?username=DeveloperWOW64&include_all_commits=true&show_icons=true&hide_border=true&theme=light"
				
			>
			<img
				alt="DeveloperWOW64's GitHub Status"
				class="logo-image"
				src="https://github-readme-stats.vercel.app/api?username=DeveloperWOW64&include_all_commits=true&show_icons=true&hide_border=true&theme=dark"
				
			>
		</picture>
		{/if}
	</div>
	<p> </p>
	<div class="column">
		<p>Pages</p>
		<Button variant="hyperlink" sveltekit:prefetch href="/">
			Home
		</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/docs">
			Documentation
		</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/blog">
			Blog
		</Button>
		<Button variant="hyperlink" sveltekit:prefetch href="/about">
			About
		</Button>
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
