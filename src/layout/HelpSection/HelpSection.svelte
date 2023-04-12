<script lang="ts">
	import { links } from "$data/links";
	import { externalLink, HeaderChip, PageSection } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="ui/emoji/sponsor.png" width="48">
			</HeaderChip>
			<h2>You can help too.</h2>
			<br/>
			<HeaderChip>Every contribution is valuable, no matter how small.</HeaderChip>
			<br/>
			<br/>
			<!--The amount of breaks here is just too ugly..-->
			<div class="buttons-spacer">
				<Button variant="accent" href="https://github.com/sponsors/{links.github}" {...externalLink}>
					Help financially
				</Button>
				<Button variant="hyperlink" href="https://github.com/orgs/{links.github}/repositories" {...externalLink}>
					Help by contribution
				</Button>
				<Button variant="hyperlink" href="mailto:{links.mail.apply}" {...externalLink}>
					Help by being one of us
				</Button>
			</div>
			<p>
				Want to help us out? We're always looking for new contributors and members to join our team.
			</p>
			<p>
				There are so many ways you can help us out! You can help us financially, by contributing to our codebase, or by joining our team.
			</p>
		</div>
		<div class="rainbow-background"></div>
	</div>
</PageSection>

<style lang="scss">@use "./HelpSection";
</style>
