<script lang="ts">
import Title from './Title.v1.svelte'
import FlatToFlat from './connectors/FlatToFlat.v1.svelte'

export let title: string | undefined = undefined
export let classes = ''
export let contentClasses = ''
</script>

<div class="list-box {classes}">
	{#if title}
		<Title size="m">{title}</Title>

		<FlatToFlat />
	{/if}

	<div class="box {contentClasses}">
		<slot />
	</div>
</div>

<style>
.box {
	@apply w-full bg-gray-90 dark:bg-gray-80 rounded-[24px] flex flex-col justify-center items-center p-3 gap-2 text-gray-10;
}

.list-box {
	@apply flex flex-col items-center justify-start max-w-full w-[480px] relative;
}

p,
h3,
h2 {
	@apply text-center m-0;
}
</style>
