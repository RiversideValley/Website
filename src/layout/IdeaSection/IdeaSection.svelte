<script lang="ts">
	import { onMount } from "svelte";

	import { FeatureCard, HeaderChip, PageSection } from "$lib";
	import { featureCards } from "$data/projects";

	import IdeaShowcase from "./IdeaShowcase.svelte";
	import { dev } from "$app/env";

	let currentFeature = 0;

	let cardPaginationInterval = 16;

	onMount(() => {
		if (!dev) {
			// Iterate through feature cards every n seconds
			setInterval(() => {
				currentFeature += currentFeature !== 3 ? 1 : -currentFeature;
				cardPaginationInterval = 16;
			}, cardPaginationInterval * 1000);
		}
	});
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		<IdeaShowcase feature={currentFeature} />
	</div>
	<div class="features-section-right">
		<HeaderChip>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://img.icons8.com/fluency/idea.png">
		</HeaderChip>
		<h2>Our ideas</h2>
		<p>
			At Depth, we believe that everyone has the power to make perfect creations. This counts for ideas and concepts, too!
			Below is a curated collection of concepts and projects coming out of Depth. Search them up on GitHub and start contributing!
		</p>
		<hr />
		<div class="feature-cards-container">
			{#each featureCards as feature, i}
				<FeatureCard
					on:click={() => {
						currentFeature = i;
						cardPaginationInterval = 24;
					}}
					clickable
					selected={currentFeature === i}
					description={feature.description}
					icon={feature.icon}
				>
					{feature.title}
				</FeatureCard>
			{/each}
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "IdeaSection";
</style>
