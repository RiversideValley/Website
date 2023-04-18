<script lang="ts">
	import EmeraldShowcase from "./emerald/EmeraldShowcase.svelte";
	import FluxShowcase from "./flux/FluxShowcase.svelte";
	import InspireShowcase from "./inspire/InspireShowcase.svelte";
	import OtherShowcase from "./other/OtherShowcase.svelte";
	import "./IdeaShowcase.scss";

	export let feature = 0;
</script>

{#if feature === 0}
	<EmeraldShowcase />
{:else if feature === 1}
	<FluxShowcase />
{:else if feature === 2}
	<InspireShowcase />
{:else if feature === 3}
	<OtherShowcase />
{/if}
