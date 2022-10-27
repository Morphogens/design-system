<script>export let classes = '';
export let href = undefined;
</script>

{#if href}
	<a {href} class={classes}>
		<slot />
	</a>
{:else}
	<slot />
{/if}
