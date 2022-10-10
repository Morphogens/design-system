<script>export let size;
export let classes = '';
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
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 1rem;
    padding-bottom: 2.5rem
}
	.xl {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 17px;
    padding-bottom: 35px
}
	.l {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 12px;
    padding-bottom: 24px
}
	.m {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 6px;
    padding-bottom: 15px
}
	.s {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 7px;
    padding-bottom: 13px
}</style>
