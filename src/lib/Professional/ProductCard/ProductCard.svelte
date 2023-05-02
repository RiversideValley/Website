<script lang="ts">
	import { externalLink } from "$lib";
	import { PersonPicture } from "fluent-svelte";

	export let url = "Undefined";
	export let logo = "Undefined";
	export let name = "Undefined";
	export let description = "Undefined";
</script>

<a
	tabindex="-1"
	class="contributor"
	href={url}
>
	<PersonPicture 
		src={logo}
	    size={32}
	   	alt={name}
	    loading="lazy"
	/>
	<div class="info">
		<h5>{name}</h5>
		<span>{description}</span>
	</div>
</a>

<style lang="scss">
	@use "./ProductCard";
</style>
