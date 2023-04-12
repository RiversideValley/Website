<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ fetch }) => ({
		props: {
			posts: await fetch("/apps.json").then(response => response.json())
		}
	})
</script>

<script lang="ts">
	import { PageSection, HeaderChip, BlogCard, tilt, Metadata } from "$lib";
	import { Button } from "fluent-svelte";

	type Post = {
		path: string;
		metadata: {
			title: string;
			description: string;
			author: string;
			thumbnail: string;
		};
	}

	export let posts: Post[]

	const mainPost: Post = posts[0]

	let scrollY: number;
</script>

<svelte:head>
	<Metadata title="Riverside | The future of computing starts now." image="blog" />
</svelte:head>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="blog">
	<div class="blog-backdrop">
		<picture>
			<source srcset="https://learn.microsoft.com/en-us/media/home-and-directory/home-hero_light.png?branch=main" media="(prefers-color-scheme: light)" />
			<source srcset="https://learn.microsoft.com/en-us/media/home-and-directory/home-hero_dark.png?branch=main" media="(prefers-color-scheme: dark)" />
			<img
				alt="Riverside Valley"
				src="https://learn.microsoft.com/en-us/media/home-and-directory/home-hero_light.png?branch=main"
				style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
				width="0"
			>
		</picture>
	</div>
	<div class="main-post">
		<a href="/apps/{mainPost.path.replace(/\.[^/.]+$/, '')}/">
			<img
				alt="Main post thumbnail"
				height="422"
				src={mainPost.metadata.thumbnail}
				use:tilt={{ max: 2.5, scale: 1.01 }}
				width="633"
			>
		</a>
		<div class="main-post-info">
			<h2>{mainPost.metadata.title}</h2>
			<p>{mainPost.metadata.description}</p>
			<Button
				href="/apps/{mainPost.path.replace(/\.[^/.]+$/, '')}/"
				variant="accent"
			>
				Read More
			</Button>
		</div>
	</div>
	{#if posts.slice(1).length > 0}
		<div class="blog-cards">
			{#each posts.slice(1) as post}
				<BlogCard path={post.path} {...post.metadata}/>
			{/each}
		</div>
	{:else}
		<p>More apps coming soon!</p>
	{/if}
</PageSection>

<style lang="scss">
	@use "../src/styles/pages/blog";
</style>