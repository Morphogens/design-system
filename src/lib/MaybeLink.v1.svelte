<script lang="ts">
export let href: string | undefined | null = undefined
export let target: string | undefined | null = ''
export let rel: string | undefined | null = ''

export let classes = ''
export let style = ''
</script>

{#if href}
	<a {href} class={classes} {style} {target} {rel}>
		<slot />
	</a>
{:else}
	<span class={classes} {style}>
		<slot />
	</span>
{/if}
