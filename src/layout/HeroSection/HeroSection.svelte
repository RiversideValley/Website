<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	import { links } from "$data/links";
	import Github from "$static/ui/icons/github.svg?raw";
	import Games from "@fluentui/svg-icons/icons/games_24_regular.svg?raw";
	import Chart from "@fluentui/svg-icons/icons/arrow_trending_lines_24_regular.svg?raw";
	import Solutions from "@fluentui/svg-icons/icons/app_recent_24_filled.svg?raw";
</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>Cloud computing for the future.</h1>
		<p size="6">The future of computing starts from Riverside.</p>
		<div class="buttons-spacer">
			<!--<Button
				variant="accent"
				href="https://github.com/orgs/{links.github}/repositories"
				{...externalLink}
			>
				{@html Solutions}
				<div class="hero-button-inner">
					<h5>Solutions</h5>
					
				</div>
			</Button>-->
			<Button
				variant="accent"
				href="https://book.ms/sales@theriversi.de"
				{...externalLink}
			>
				{@html Chart}
				<div class="hero-button-inner">
					<h5>Contact sales</h5>
				</div>
			</Button>
			<Button
				href="https://github.com/{links.github}"
				{...externalLink}
			>
				{@html Github}
				<div class="hero-button-inner">
					<h5>For developers</h5>
				</div>
			</Button>
		</div>
	</div>
	<div class="rainbow-background"/>
</PageSection>
<style lang="scss">
	@use "HeroSection";
</style>
