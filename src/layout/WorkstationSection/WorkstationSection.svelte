<script lang="ts">
	import { links } from "$data/links";
	import { externalLink, HeaderChip, PageSection } from "$lib";
	import { Button, Flyout } from "fluent-svelte";

	let scrollY: number;
</script>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="design-section">
	<HeaderChip>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src="https://img.icons8.com/fluency/workstation">
	</HeaderChip>
	<h2>DELL XPS 9300</h2>
	<p>
		The clean, fast laptop I couldn't code without
	</p>
	<div class="buttons-spacer">
		<Button
			href="https://dl.dell.com/topicspdf/xps-13-9300-laptop_reference-guide_en-us.pdf"
			{...externalLink}
			variant="accent"
		>
			Details
		</Button>
		<Flyout>
			<Button>
			Price
			</Button>
			<svelte:fragment slot="flyout"> 
				I got mine for £750, though it could be more pricey if it was new.
			</svelte:fragment>
		</Flyout>
	</div>
	<div class="design-image">
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="/screenshots/desktop-dark.png"
			>
			<source
				media="(prefers-color-scheme: light)"
				srcset="/screenshots/desktop-light.png"
			>
			<img
				alt="Desktop wallpaper"
				class="files-wallpaper"
				height="900"
				src="/screenshots/desktop-dark.png"
				width="1440"
			>
		</picture>
	</div>
</PageSection>

<style lang="scss">
	@use "WorkstationSection";
</style>
