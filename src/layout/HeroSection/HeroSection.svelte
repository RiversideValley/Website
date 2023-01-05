<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	import { links } from "$data/links";
	import Github from "$static/ui/icons/github.svg?raw";
	import Games from "@fluentui/svg-icons/icons/games_24_regular.svg?raw"
</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<div class="rainbow-background"/>
		<h1>Hello from Depth</h1>
		<p size="6">The future of computing starts now.</p>
		<div class="buttons-spacer">
			<Button
				variant="accent"
				href="https://github.com/orgs/{links.github}/repositories"
				{...externalLink}
			>
				{@html Github}
				<div class="hero-button-inner">
					<h5>GitHub</h5>
					<span>Take a look at some of our work!</span>
				</div>
			</Button>
			<Button
				href="https://github.com/{links.github}/Emerald"
				{...externalLink}
			>
				{@html Games}
				<div class="hero-button-inner">
					<h5>Emerald</h5>
					<span>An awesome minecraft client, take a look!</span>
				</div>
			</Button>
		</div>
	</div>
	<div class="rainbow-background"/>
</PageSection>
<style lang="scss">
	@use "HeroSection";
</style>
