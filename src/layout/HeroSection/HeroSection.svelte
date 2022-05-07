<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { links } from "$data/links";
	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
	import Folder from "@fluentui/svg-icons/icons/folder_24_regular.svg?raw";

</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>Hi!👋</h1>
		<p>I'm a developer from the UK.</p>
		<div class="buttons-spacer">
			<Button
				variant="accent"
				href="https://github.com/{links.github.owner}/?tab=repositories"
				{...externalLink}
			>
				{@html Code}
				<div class="hero-button-inner">
					<h5>GitHub</h5>
					<span>Take a look at my repositories!</span>
				</div>
			</Button>
			<Button
				href="https://github.com/files-community"
				{...externalLink}
			>
				{@html Folder}
				<div class="hero-button-inner">
					<h5>Files</h5>
					<span>An awesome project, take a look!</span>
				</div>
			</Button>
		</div>
	</div>
	<div class="hero-right">
		<div class="hero-image-container">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset="/screenshots/hero-dark.png"
				>
				<source
					media="(prefers-color-scheme: light)"
					srcset="/screenshots/hero-light.png"
				>
			</picture>
		</div>
	</div>
	<div class="rainbow-background" slot="outer"></div>
</PageSection>
<style lang="scss">
	@use "HeroSection";
</style>
