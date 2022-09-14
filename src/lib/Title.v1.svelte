<script lang="ts">
	import type { DesignSystemSize } from '$src/types'

	export let size: DesignSystemSize
	export let classes = ''
</script>

<!-- 
		Normally we don't want to dynamically specify tailwind classes like text-{size}-head
		but tailwind still has trouble allowing @layer component classes in apply tags. Since
		the classnames are explicitly defined in the codebase, tailwind won't purge the classes
		and they'll work, kind of like the hacky color workaround.
	
		This is mostly an experiment in elegant, composable ways to implement the Gizmo design system.
	-->
<h1
	class=" 
			rounded-[1024px]
			m-0
			max-w-min
			bg-gray-90 dark:bg-gray-80
			text-gray-10
			lowercase
			whitespace-nowrap
			text-{size}-head
			{size}
			{classes}
		"
>
	<slot />
</h1>

<style>
	.xxl {
		@apply px-[48px] pt-4 pb-10;
	}
	.xl {
		@apply px-[40px] pt-[17px] pb-[35px];
	}
	.l {
		@apply px-[32px] pt-[12px] pb-[24px];
	}
	.m {
		@apply px-[20px] pt-[6px] pb-[15px];
	}
	.s {
		@apply px-[16px] pt-[7px] pb-[13px];
	}
</style>
