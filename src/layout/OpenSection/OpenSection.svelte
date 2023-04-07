<script lang="ts">
	import { getContributors } from "$data/community";
	import { links } from "$data/links";
	import { Contributor, externalLink, HeaderChip, PageSection } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	// Fetch contributors for the community section
	const contributorRows = [getContributors(35)]
</script>

<PageSection id="community-section">
	<div class="community-section-card">
		<div class="community-section-text">
			<HeaderChip>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="https://img.icons8.com/fluency/coworking">
			</HeaderChip>
			<h2>A thriving team</h2>
			<p>
				This is a selection of people who are part of Riverside Valley. They are inspiring workers who would do anything for the community.
			</p>
			<p>There are way more, but we respect their privacy.</p>
			<div class="buttons-spacer">
				<Button variant="accent" href="https://github.com/{links.github}" {...externalLink}>
					Contribute to a project
				</Button>
				<Button variant="hyperlink" href="https://discord.gg/{links.discord}" {...externalLink}>
					Join the discussion
				</Button>
				<Button variant="hyperlink" href="mailto:{links.mail.apply}" {...externalLink}>
					Become part of the team
				</Button>
			</div>
		</div>
		{#if contributorRows.every(it => it)}
			<div class="contributors-container">
				{#each contributorRows as contributorsPromise}
					<div class="contributors-row">
						{#await contributorsPromise then contributors}
							{#each contributors.sort(() => Math.random() - 0.5) as { html_url, avatar_url, login, type }}
								<Contributor
									{login}
									{html_url}
									{avatar_url}
									{type}
								/>
							{/each}
						{:catch err}
							{#each Array(35) as _}
								<Contributor
									name="Lucius Andrex"
									login="Lamparter"
									html_url="https://github.com/Lamparter"
									avatar_url="https://avatars.githubusercontent.com/Lamparter"
									type="User"
								/>
							{/each}
						{/await}
					</div>
				{/each}
			</div>
		{/if}
		<div class="rainbow-background"/>
	</div>
</PageSection>

<style lang="scss">@use "./OpenSection";
</style>
