<script context="module" lang="ts">
</script>

<script lang="ts">
	import { PageSection, Metadata } from "$lib";
	import { links } from "$data/links"

	let scrollY: number;
</script>

<svelte:head>
	<Metadata title="Riverside | The future of computing starts now." image="about" />
</svelte:head>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="blog">
	<div class="blog-backdrop">
		<img
			alt="Visual Studio Code"
			src="https://user-images.githubusercontent.com/71598437/189516578-6acd4c56-7b4e-4d62-99b4-d3ad2e184696.png"
			style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
			width="0"
		>
	</div>
	<div class="main-post">
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset="{links.cdn.content}/Branding/Banner.White.png"
			>
			<source
				media="(prefers-color-scheme: light)"
				srcset="{links.cdn.content}/Branding/Banner.png"
			>
			<img
				alt="Riverside Banner"
				class="logo-image"

				src="{links.cdn.content}/Branding/Banner.png"
			>
		</picture>
		<div class="about">
			<span>The future of computing starts now.</span>

			<h3>👋 Hello! Ciao! こんにちは！</h3>
			<p>
				We're Riverside Valley, an outstanding organisation owned by the Riverside Valley Corporation IT conglomerate that believes in people, not money.
			</p>
			<p>	
				🔭 We're currently working on so many projects! Look out for Emerald, Fluid, Otherworld, and Inspire.
				<br/>
				📫 How to reach us: <a href="mailto:{links.mail.business}">{links.mail.business}</a>
				<br/>
				😕 Need help? <a href="mailto:{links.mail.support}">{links.mail.support}</a>
				<br/>
				🧑‍💼 Interested in applying? <a href="mailto:{links.mail.apply}">{links.mail.apply}</a>
			</p>
		</div>
	</div>
	<p>🏞️ Riverside</p>
</PageSection>

<style lang="scss">
	@use "../src/styles/pages/blog";
</style>
