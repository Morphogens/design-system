<script lang="ts">
import type { ColorName, DesignSystemSize } from '$src/types'

export let size: DesignSystemSize = 's'
export let classes = ''
</script>

<div
	class="
		rounded-full 
		flex items-center text-center rotate-[15deg]
		bg-gray-90
		{size} 
		{classes}
	"
>
	<slot />
</div>

<style>
.s {
	@apply h-20 w-20 md:h-[84px] md:w-[84px] text-s-head;
}
</style>
