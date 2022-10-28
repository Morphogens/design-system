<script>
import '../app.css'
import DesignSystem from '$lib/DesignSystem.v1.svelte'
</script>

<DesignSystem>
	<slot />
</DesignSystem>

<style>
:global(body) {
	@apply bg-gray-0 dark:bg-gray-100;
}
</style>
