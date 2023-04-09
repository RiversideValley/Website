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
				<source media="(prefers-color-scheme: dark)" srcset="/branding/logo.png">
				<source media="(prefers-color-scheme: light)" srcset="/branding/logo.png">
				<img alt="Riverside logo" height="32" src="/branding/logo.png" width="32">
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
		<div class="social-links column">
			<Button variant="accent" sveltekit:prefetch href="/">
				Home
			</Button>
			<Button variant="accent" sveltekit:prefetch href="/apps">
				Appcenter
			</Button>
			<Button variant="accent" sveltekit:prefetch href="/about">
				Who we are
			</Button>
		</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
