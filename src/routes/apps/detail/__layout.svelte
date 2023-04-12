<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ url, fetch }) => ({
		props: {
			post: await fetch(`${ url.pathname }.json`).then(response => response.json())
		}
	});
</script>

<script lang="ts">
	import { Metadata, externalLink } from "$lib";
	import Share from "@fluentui/svg-icons/icons/share_24_regular.svg?raw";
	import ArrowLeft from "@fluentui/svg-icons/icons/arrow_left_24_regular.svg?raw";
	import { IconButton, InfoBar, InfoBadge } from "fluent-svelte";

	export let post: {
		metadata: {
			title: string;
			description: string;
			thumbnail: string;
			date: string;
			author: string;
			wip: boolean;
		}
	};

	const { title, description, thumbnail, author, date, wip } = post.metadata;
</script>

<svelte:head>
	<Metadata title="{title}" image={thumbnail} />
</svelte:head>

<section class="blog-post">
	<article>
		<div class="post-title">
			<IconButton
				--icon-color="var(--text-color-secondary)"
				aria-label="Back to Blog"
				class="back-button"
				href="/apps"
				title="Back to Riverside Apps Center"
			>
				{@html ArrowLeft}
			</IconButton>
			<h1>{title}</h1>
		</div>
		{#if author === "RiversideValley"}
		<div class="post-info-riverside">
			<img alt="{author} avatar" src="https://github.com/{author}.png">
			<a
				class="hyperlink"
				href="https://github.com/{author}"
				{...externalLink}>@{author}</a
			>
			<span>|</span>
			<IconButton
				on:click={
					() => navigator.share({
						title,
						url: window.location.href
					})}
				size={20} 
				aria-label="Share" 
				class="share-button" 
				title="Share" 
				placement="bottom"
			>
				{@html Share}
			</IconButton>
			{#if wip}
			<InfoBadge
				aria-label="Work in progress"
				class="wip"
				severity="caution"
				title="Work in progress"
			/>
			{/if}
		</div>
		{:else}
		<div class="post-info">
			<img alt="{author} avatar" src="https://github.com/{author}.png">
			<a
				class="hyperlink"
				href="https://github.com/{author}"
				{...externalLink}>@{author}</a
			>
			<span>|</span>
			<IconButton
				on:click={
					() => navigator.share({
						title,
						url: window.location.href
					})}
				size={20} 
				aria-label="Share" 
				class="share-button" 
				title="Share" 
				placement="bottom"
			>
				{@html Share}
			</IconButton>
			{#if wip}
				<InfoBadge
					aria-label="Work in progress"
					class="wip"
					severity="caution"
					title="Work in progress"
				/>
			{/if}
		</div>
		{/if}
		{#if wip}
			<InfoBar
				aria-label="Work in progress"
				severity="caution"
				class="wip"
				icon="Info"
				title="Work in progress"
				message="{title} is a work in progress. That means that the project is not yet finished, and may not work as expected."
				placement="bottom"
			/>
			<br/>
		{/if}
		{#if thumbnail}
			<img class="post-thumbnail" src={thumbnail} alt="Thumbnail">
		{/if}
		<div class="markdown-body">
			<slot />
		</div>
	</article>
</section>

<style lang="scss">
	@use "../src/styles/pages/blogPost";
</style>