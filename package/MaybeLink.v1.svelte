<script>export let href = undefined;
export let target = '';
export let classes = '';
export let style = '';
</script>

{#if href}
	<a {href} class={classes} {style} {target}>
		<slot />
	</a>
{:else}
	<span class={classes} {style}>
		<slot />
	</span>
{/if}
