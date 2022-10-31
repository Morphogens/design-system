<script>export let classes = '';
export let href = undefined;
export let style = '';
</script>

{#if href}
	<a {href} class={classes} {style}>
		<slot />
	</a>
{:else}
	<span class={classes} {style}>
		<slot />
	</span>
{/if}
