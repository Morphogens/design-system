<script>export let size = 'xs';
export let classes = '';
export let style = '';
// Default HTMLInputElement properties
export let type = 'text';
export let value = undefined;
export let name = undefined;
export let autocomplete = undefined;
export let pattern = undefined;
export let placeholder = undefined;
export let autofocus = undefined;
export let disabled = undefined;
export let readonly = undefined;
export let required = undefined;
// checked (checkbox)
// step/max/min/maxlength/minlength (number)
// multiple is an option??
// This hacky action allows us to use dynamic types with two-way binding
function setType(node) {
    node.type = type;
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
	--tw-bg-opacity: 1;
	background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
input:focus {
	--tw-border-opacity: 1;
	border-color: rgb(142 216 226 / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: rgb(235 249 251 / var(--tw-bg-opacity));
}
input:disabled {
	--tw-bg-opacity: 1;
	background-color: rgb(234 231 251 / var(--tw-bg-opacity));
}
input {
	border-width: 4px;
	border-style: solid;
	--tw-border-opacity: 1;
	border-color: rgb(218 216 238 / var(--tw-border-opacity));
	outline: 2px solid transparent;
	outline-offset: 2px;
	text-align: center;
	text-transform: lowercase;
	--tw-text-opacity: 1;
	color: rgb(28 26 44 / var(--tw-text-opacity));
}
input::-moz-placeholder {
	--tw-text-opacity: 1;
	color: rgb(182 180 202 / var(--tw-text-opacity));
}
input::placeholder {
	--tw-text-opacity: 1;
	color: rgb(182 180 202 / var(--tw-text-opacity));
}
input:invalid {
	--tw-border-opacity: 1;
	border-color: rgb(207 87 82 / var(--tw-border-opacity));
}

.xs {
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.01em;
	line-height: 20px;
	height: 2rem;
	border-radius: 16px;
}

.s {
	font-size: 26px;
	font-weight: 400;
	letter-spacing: -0.01em;
	line-height: 28px;
	height: 2.75rem;
	border-radius: 32px;
}

/* Number input - hide arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}</style>
