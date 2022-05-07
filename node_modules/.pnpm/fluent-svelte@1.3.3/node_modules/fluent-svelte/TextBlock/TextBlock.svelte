<script >/** Determines which preset text style should be used. */
export let variant = "body";
/** Specifies a custom class name for the text block */
let className = "";
export { className as class };
/** Obtains a bound DOM reference to the text's element. */
export let element = null;
</script>

{#if variant === "caption"}
	<span class="text-block type-caption {className}" bind:this={element} {...$$restProps}>
		<slot />
	</span>
{:else if variant === "body"}
	<span class="text-block type-body {className}" bind:this={element} {...$$restProps}>
		<slot />
	</span>
{:else if variant === "bodyStrong"}
	<h6 class="text-block type-body-strong {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h6>
{:else if variant === "bodyLarge"}
	<h5 class="text-block type-body-large {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h5>
{:else if variant === "subtitle"}
	<h4 class="text-block type-subtitle {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h4>
{:else if variant === "title"}
	<h3 class="text-block type-title {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h3>
{:else if variant === "titleLarge"}
	<h2 class="text-block type-title-large {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h2>
{:else if variant === "display"}
	<h1 class="text-block type-display {className}" bind:this={element} {...$$restProps}>
		<slot />
	</h1>
{/if}

<style >.text-block{color:currentColor;display:inline-block;margin:0;padding:0}.text-block.type-display,.text-block.type-subtitle,.text-block.type-title,.text-block.type-title-large{font-family:var(--fds-font-family-display);font-weight:600}.text-block.type-body,.text-block.type-body-large,.text-block.type-body-strong{font-family:var(--fds-font-family-text)}.text-block.type-caption{font-family:var(--fds-font-family-small);font-size:var(--fds-caption-font-size);font-weight:400;line-height:16px}.text-block.type-body,.text-block.type-body-large,.text-block.type-body-strong{font-size:var(--fds-body-font-size);font-weight:400;line-height:20px}.text-block.type-body-strong{font-weight:600}.text-block.type-body-large{font-size:var(--fds-body-large-font-size);line-height:24px}.text-block.type-subtitle{font-size:var(--fds-subtitle-font-size);line-height:28px}.text-block.type-title{font-size:var(--fds-title-font-size);line-height:36px}.text-block.type-title-large{font-size:var(--fds-title-large-font-size);line-height:52px}.text-block.type-display{font-size:var(--fds-display-font-size);line-height:92px}</style>
