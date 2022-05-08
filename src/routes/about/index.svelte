<script context="module" lang="ts">
</script>

<script lang="ts">
	import { PageSection, Metadata } from "$lib";


	let scrollY: number;
</script>

<svelte:head>
	<Metadata title="Codrex | About" image="about" />
</svelte:head>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="blog">
	<div class="blog-backdrop">
		<img
			alt="Visual Studio Code"
			src="/screenshots/code-dark.png"
			style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
			width="0"
		>
	</div>
	<div class="main-post">
		<img
			alt="Cats"
			src="/about-resources/cats.png"
		>
		<div class="about">
			<h3>Hello. I'm a developer.</h3>
			<p>
				Welcome! My name is Jupiter. My pronouns are 'he/him'. I currently know bits of XAML, Python and Svelte.
				Obviously, nobody is infallible and so I may make mistakes. If such an event occurs, feel free to tell me - I wouldn't be hurt.
				Here's an interesting fact about me.. I can recite π to 16 decimal places: 3.1415926535897932.
			</p>
			<p>	
				Something I like to do while I'm not sitting down at my DELL XPS laptop is listen to music - just get lost in the wave of sounds.
				My favourite movie right now is by far Encanto of Disney. My favourite video game would be Miitopia.
			</p>
			<p>
				By the way, those cats' names are Hope and Joy, my great-aunt's sister cats. The're both very cute - though Hope can get up to a lot of trouble..
			</p>
		</div>
	</div>	
</PageSection>

<style lang="scss">
	@use "../src/styles/pages/blog";
</style>