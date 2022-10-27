<script>export let size;
export let classes = '';
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
	font-size: 105px;
	font-weight: 200;
	letter-spacing: -0.05em;
	line-height: 104px;
	font-feature-settings: ss01;
	padding-left: 48px;
	padding-right: 48px;
	padding-top: 1rem;
	padding-bottom: 2.5rem
	/* 
	 *	Note: CSS classes can't start with numbers.
	 *	We should consider switching to using xxl 
	 *	if possible.
	 */
}
.xl {
	font-size: 78px;
	font-weight: 250;
	letter-spacing: -0.04em;
	line-height: 80px;
	font-feature-settings: ss01;
	padding-left: 40px;
	padding-right: 40px;
	padding-top: 17px;
	padding-bottom: 35px
}
.l {
	font-size: 52px;
	font-weight: 300;
	letter-spacing: -0.03em;
	line-height: 52px;
	font-feature-settings: ss01;
	padding-left: 32px;
	padding-right: 32px;
	padding-top: 12px;
	padding-bottom: 24px
}
.m {
	font-size: 35px;
	font-weight: 350;
	letter-spacing: -0.02em;
	line-height: 36px;
	font-feature-settings: ss01;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 6px;
	padding-bottom: 15px
}
.s {
	font-size: 26px;
	font-weight: 400;
	letter-spacing: -0.01em;
	line-height: 28px;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 7px;
	padding-bottom: 13px
}</style>
