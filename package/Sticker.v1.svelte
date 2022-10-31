<script>export let size = 's';
export let classes = '';
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
    font-size: 26px;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 28px;
    height: 5rem;
    width: 5rem
}
@media (min-width: 768px) {
    .s {
        height: 84px;
        width: 84px
    }
}</style>
