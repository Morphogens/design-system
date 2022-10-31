<script>import windowInnerHeight from './windowInnerHeight';
</script>

<div class="design-system" style="--window-inner-height: {$windowInnerHeight}px;">
	<slot />
</div>

<style>
.design-system :global(*) {
	font-family: 'ABC Maxi Round Variable';
}</style>
