<script lang="ts">
import type { ColorName, DesignSystemSize } from '$src/types'

export let size: DesignSystemSize = 's'
export let backgroundColor: ColorName = 'gray-90'
export let classes = ''
</script>

<div
	class="
		rounded-full 
		flex items-center text-center rotate-[15deg]
		{size} 
		{classes}
	"
	style="background-color: var(--{backgroundColor});"
>
	<slot />
</div>

<style>
.s {
	@apply h-20 w-20 md:h-[84px] md:w-[84px] text-s-head;
}
</style>
