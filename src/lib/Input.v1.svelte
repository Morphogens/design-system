<script lang="ts">
import type { DesignSystemSize, InputType } from '$src/types'

export let size: Extract<DesignSystemSize, 'xs' | 's'> = 'xs'
export let classes = ''
export let style = ''

// Default HTMLInputElement properties
export let type: InputType = 'text'
export let value: string | undefined = undefined
export let name: string | undefined = undefined
export let autocomplete: string | undefined = undefined
export let pattern: string | undefined = undefined
export let placeholder: string | undefined = undefined
export let autofocus: boolean | undefined = undefined
export let disabled: boolean | undefined = undefined
export let readonly: boolean | undefined = undefined
export let required: boolean | undefined = undefined
// checked (checkbox)
// step/max/min/maxlength/minlength (number)
// multiple is an option??

// This hacky action allows us to use dynamic types with two-way binding
function setType(node: HTMLInputElement) {
	node.type = type
}
</script>

<input
	use:setType
	bind:value
	on:input
	on:change
	{autocomplete}
	{autofocus}
	{name}
	{placeholder}
	{readonly}
	{disabled}
	{pattern}
	{required}
	class="{type}-input {size} {classes}"
	{style}
/>

<style>
input {
	@apply bg-gray-0 focus:border-cyan-40 focus:bg-cyan-10 disabled:bg-gray-20;
	@apply border-gray-30 border-4 border-solid outline-none;
	@apply text-center lowercase placeholder:text-gray-40 text-gray-90;
	@apply invalid:border-red-50;
}

.xs {
	@apply text-xs-label h-8 rounded-[16px];
}

.s {
	@apply text-s-label h-11 rounded-[32px];
}

/* Number input - hide arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
