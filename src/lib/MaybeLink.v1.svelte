<script lang="ts">
	export let classes = ''
	export let href: string | undefined | null = undefined
</script>

{#if href}
	<a {href} class={classes}>
		<slot />
	</a>
{:else}
	<slot />
{/if}
