<script lang="ts">
	import type { NavbarItem } from "$data/links";

	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { links } from "$data/links";
	import Discord from "$static/ui/icons/discord.svg?raw";
	import Github from "$static/ui/icons/github.svg?raw";
	import Twitter from "$static/ui/icons/twitter.svg?raw";
	import Mail from "@fluentui/svg-icons/icons/mail_24_filled.svg?raw"

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
	{#if innerWidth > 912}
		<div class="rainbow-background"/>
	{/if}
	<div class="column">
		<a class="logo" href="/" sveltekit:prefetch>
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="{links.cdn.content}/Branding/Logo.png">
				<source media="(prefers-color-scheme: light)" srcset="{links.cdn.content}/Branding/Logo.png">
				<img alt="Riverside logo" height="32" src="{links.cdn.content}/Branding/Logo.png" width="32">
			</picture>
			Riverside Valley
		</a>
		<p> Copyright ©️ 2023 Riverside Valley Corporation </p>
		<div class="social-links">
			<IconButton
				href="https://github.com/{links.github}/"
				title="GitHub"
				aria-label="GitHub"
				{...externalLink}
			>
				{@html Github}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.discord}/"
				title="Discord"
				aria-label="Discord"
				{...externalLink}
			>
				{@html Discord}
			</IconButton>
			<IconButton
				href="https://twitter.com/{links.twitter}/"
				title="Twitter"
				aria-label="Twitter"
				{...externalLink}
			>
				{@html Twitter}
			</IconButton>
			<IconButton
				href="mailto:{links.mail.business}/"
				title="Mail"
				aria-label="Mail"
				{...externalLink}
			>
				{@html Mail}
			</IconButton>
		</div>
		<br/>
		<a href="https://vercel.com/?utm_source=riversidevalley&utm_campaign=oss" {...externalLink}>
			<picture>
				<source media="(prefers-color-scheme: dark)" srcset="{links.cdn.content}/Branding/Clientele/Vercel/BusinessConcepts/OSSInitiative/Banner.Dark.svg">
				<source media="(prefers-color-scheme: light)" srcset="{links.cdn.content}/Branding/Clientele/Vercel/BusinessConcepts/OSSInitiative/Banner.Light.svg">
				<img alt= "Powered by Vercel" src="{links.cdn.content}/Branding/Clientele/Vercel/BusinessConcepts/OSSInitiative/Banner.Dark.svg" width="192">
			</picture>
		</a>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
