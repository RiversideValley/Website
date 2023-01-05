<script>
	import { fluxExamples } from "$data/projects";

	let currentFluxExample = 0;
</script>

<div class="flux-showcase">
	{#key currentFluxExample}
		<aside class="showcase-panel preview-pane">
			{#each [fluxExamples[currentFluxExample]] as file}
				<div class="preview">
					{#if file?.extension === "html"}
						<iframe title="Document" style:border="none" src="/preview-samples/{file.name}.{file.extension}"></iframe>
					{:else if file?.code}
						<pre>{file.code}</pre>
					{:else}<img src={file.icon} alt="File icon">{/if}
				</div>
				<div class="grabber"/>
			{/each}
		</aside>
	{/key}
	<div class="showcase-panel files-grid">
		{#each fluxExamples as file, i}
			<div
				class="file"
				class:selected={currentFluxExample === i}
				on:click={() => (currentFluxExample = i)}
				style="--file-index: {i};"
			>
				<img src={file.icon} alt="File icon">
				{file.name}{typeof file.extension !== "undefined"
				? "."
				: ""}{file.extension ?? ""}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use "./FluxShowcase";
</style>