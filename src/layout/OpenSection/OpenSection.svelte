<script lang="ts">
	// import { getContributors, getPersonalContributorData } from "$data/community";
	import { links } from "$data/links";
	import { Contributor, externalLink, HeaderChip, PageSection } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	// Fetch contributors for the community section
	// const contributorRows = [getPersonalContributorData(1), getPersonalContributorData(2), getPersonalContributorData(3)]
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
				This is a selection of people who are part of Depth. They are inspiring workers who would do anything for the community.
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
<!--		{#if contributorRows.every(it => it)}
			<div class="contributors-container">
				{#each contributorRows as contributorsPromise}
					<div class="contributors-row">
						{#await contributorsPromise then contributors}
							{#each contributors.sort(() => Math.random() - 0.5) as { name, location, html_url, avatar_url, login, type }}
								<Contributor
									{name}
									{location}
								/>
							{/each}
						{:catch err}
							{#each Array(35) as _}
								<Contributor
									name="Lucius Andrex"
									location="United Kingdom"
									login="OpenAndrex"
									html_url="https://github.com/OpenAndrex"
									avatar_url="https://avatars.githubusercontent.com/OpenAndrex"
									type="User"
								/>
							{/each}
						{/await}
					</div>
				{/each}
			</div>
		{/if}-->
		<div class="contributors-container">
			<div class="contributors-row">
				<Contributor
					name="Lucius Andrex"
					location="United Kingdom"
					login="OpenAndrex"
					html_url="https://github.com/OpenAndrex"
					avatar_url="https://avatars.githubusercontent.com/OpenAndrex"
				/>
				<Contributor
					name="Nooooooooooooob"
					location="Sri Lanka"
					login="NoobNotFound"
					html_url="https://github.com/NoobNotFound"
					avatar_url="https://avatars.githubusercontent.com/NoobNotFound"
				/>
				<Contributor
					name="Developer X"
					location="United States"
					login="developerx-official"
					html_url="https://github.com/developerx-official"
					avatar_url="https://avatars.githubusercontent.com/developerx-official"
				/>
				<Contributor
					name="Samson"
					location="United Kingdom"
					avatar_url="/ui/icons/people/Samson.png"
				/>
				<Contributor
					name="AlphapokDev"
					location="United Kingdom"
					login="AlphapokDev"
					html_url="https://github.com/AlphapokDev"
					avatar_url="https://avatars.githubusercontent.com/AlphapokDev"
				/>
				<Contributor
					name="Thatcoderguy877"
					location="United Kingdom"
					login="Thatcoderguy877"
					html_url="https://github.com/Thatcoderguy877"
					avatar_url="https://avatars.githubusercontent.com/Thatcoderguy877"
				/>
				<Contributor
					name="Turtlz"
					location=""
					login="TurtlzYT"
					html_url="https://github.com/TurtlzYT"
					avatar_url="https://avatars.githubusercontent.com/TurtlzYT"
				/>
				<Contributor
					name="Blocsied"
					location=""
					login="Blocsied"
					html_url="https://github.com/Blocsied"
					avatar_url="https://avatars.githubusercontent.com/Blocsied"
				/>
				<Contributor
					name="jaindevesh144"
					location=""
					login="jaindevesh144"
					html_url="https://github.com/jaindevesh144"
					avatar_url="https://avatars.githubusercontent.com/jaindevesh144"
				/>
			</div>
		</div>
		<div class="rainbow-background"/>
	</div>
</PageSection>

<style lang="scss">@use "./OpenSection";
</style>
