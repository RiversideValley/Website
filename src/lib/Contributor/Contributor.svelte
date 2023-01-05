<script lang="ts">
	import { externalLink } from "$lib";
	import { PersonPicture } from "fluent-svelte";

	export let html_url = "Undefined";
	export let avatar_url = "Undefined";
	export let login = "Undefined";
	export let name = "Undefined";
	export let location = "Undefined";
</script>

<a
	tabindex="-1"
	class="contributor"
	href={html_url}
>
	<PersonPicture 
		src={avatar_url}
	    size={32}
	   	alt="{login}'s avatar"
	    loading="lazy"
	/>
	<div class="info">
		<h5>{name}</h5>
		<span>{location}</span>
	</div>
</a>

<style lang="scss">
	@use "./Contributor";
</style>
