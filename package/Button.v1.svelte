<script>import MaybeLink from './MaybeLink.v1.svelte';
export let size = 'm';
export let classes = '';
export let disabled = false;
export let href = undefined;
export let target = undefined;
export let rel = undefined;
</script>

<MaybeLink {href} {target} {rel}>
	<button
		class="
				border-none
				flex items-center justify-center 
				whitespace-nowrap uppercase text-gray-90 
				bg-gray-50
				m-0
				w-min
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
	border-radius: 64px;
	text-transform: uppercase;
}

button[disabled] {
	cursor: auto;
	--tw-text-opacity: 0.3;
}

.l {
	font-size: 34.25px;
	font-weight: 470;
	line-height: 52px;
	text-transform: uppercase;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}

.m {
	font-size: 23px;
	font-weight: 600;
	line-height: 24px;
	text-transform: uppercase;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 1rem;
	padding-right: 1rem;
}

.s {
	font-size: 17px;
	font-weight: 650;
	letter-spacing: 0.02em;
	line-height: 20px;
	text-transform: uppercase;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 6px;
	padding-bottom: 6px;
}</style>
