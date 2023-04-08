<script lang="ts">
	import { links } from "$data/links";
	import { Contributor, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="ui/emoji/sponsor.png" width="48">
			</HeaderChip>
			<h2>You can help too.</h2>
			<h4>And that's not just financially.</h4>
			<p>
				Flux - making the world's best 'fkcd' programming language.
				Flux aims to bring coding to all ages, as well as making it easier for those already coding.
				Because of Flux's 'fkcd' architecture it sports the ability to process normal Python code, as well as its own, making the perfect transition.
				Heaven for any developer.
			</p>
		</div>
		<div class="rainbow-background"></div>
	</div>
</PageSection>

<style lang="scss">@use "./HelpSection";
</style>
