<script lang="ts">
import type { ColorName, DesignSystemSize } from '$src/types'
import MaybeLink from './MaybeLink.v1.svelte'

export let size: DesignSystemSize = 'm'
export let backgroundColor: ColorName = 'gray-50'
export let disabled = false
export let classes = ''
export let href: string | undefined | null = undefined
</script>

<MaybeLink {href}>
	<button
		style="background-color: var(--{backgroundColor});"
		class="
				border-none
				flex items-center justify-center 
				whitespace-nowrap uppercase text-gray-90 
				m-0
				{size} 
				{classes}
			"
		{disabled}
		on:click
	>
		<slot />
	</button>
</MaybeLink>

<style>
button {
	@apply rounded-[64px] uppercase;
}

button[disabled] {
	cursor: auto;
	@apply text-opacity-30;
}

.l {
	@apply px-4 py-3 text-l-smallcaps;
}

.m {
	@apply py-3 px-4 text-m-smallcaps;
}

.s {
	@apply px-3 py-[6px] text-s-smallcaps;
}
</style>
