<script lang="ts">
export let classes = ''
export let href: string | undefined | null = undefined
export let style = ''
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
