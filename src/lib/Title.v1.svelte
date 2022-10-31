<script lang="ts">
import type { DesignSystemSize } from '$src/types'

export let size: DesignSystemSize
export let classes = ''
</script>

<h1
	class=" 
		block
			rounded-[1024px]
			m-0
			max-w-min
			bg-gray-90 dark:bg-gray-80
			text-gray-10
			lowercase
			whitespace-nowrap
			h-min
			{size}
			{classes}
		"
>
	<slot />
</h1>

<style>
.xxl {
	@apply px-[48px] pt-4 pb-10 text-2xl-head;
	/* 
	 *	Note: CSS classes can't start with numbers.
	 *	We should consider switching to using xxl 
	 *	if possible.
	 */
}
.xl {
	@apply px-[40px] pt-[17px] pb-[35px] text-xl-head;
}
.l {
	@apply px-[32px] pt-[12px] pb-[24px] text-l-head;
}
.m {
	@apply px-[20px] pt-[6px] pb-[15px] text-m-head;
}
.s {
	@apply px-[16px] pt-[7px] pb-[13px] text-s-head;
}
</style>
