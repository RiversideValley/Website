<script lang="ts">
	import { externalLink } from "$lib";

	export let path = "";
	export let date = "";
	export let author = "";
	export let title = "";
	export let description = "";
	export let thumbnail = "";
</script>

<a
	class="blog-card"
	href="/apps/{path.replace(/\.[^/.]+$/, '')}"
	{...$$restProps}
>
	<img alt="{title} thumbnail" class="thumbnail" src={thumbnail}>
	<div class="body">
		<h5>{title}</h5>
		<span>{description}</span>
	</div>
	<footer>
		{#if author === "RiversideValley"}
			<img
				style="inline-size: 36px; block-size: 36px;"
				alt="{author} avatar"
				loading="lazy"
				src="https://github.com/{author}.png"
			>
			<div class="post-info">
				<object aria-label="Author link">
					<a
						href="https://github.com/{author}"
						rel="noreferrer noopener"
						{...externalLink}
					>
						Riverside Valley
					</a>
				</object>
			</div>
		{:else}
			<img
				style="inline-size: 36px; block-size: 36px; border: 1px solid var(--fds-card-stroke-default); border-radius: 50%;"
				alt="{author} avatar"
				loading="lazy"
				src="https://github.com/{author}.png"
			>
			<div class="post-info">
				<object aria-label="Author link">
					<a
						href="https://github.com/{author}"
						rel="noreferrer noopener"
						{...externalLink}
					>
						{author}
					</a>
				</object>
			</div>
		{/if}
	</footer>
	<slot />
</a>

<style lang="scss">@use "./BlogCard";
</style>
