<script>import { writable } from 'svelte/store';
export let values = ['left', 'right'];
export let defaultValue = values[0];
export let showLabels = 'none';
export let classes = '';
export let value = { ...writable(defaultValue), toggle };
$: valueIndex = values.indexOf($value);
function set(index) {
    return function () {
        $value = values[index];
    };
}
function toggle() {
    $value = notValue();
}
function notValue() {
    return values[valueIndex === 0 ? 1 : 0];
}
</script>

<div class="flex flex-row items-center gap-2 cursor-pointer mx-auto">
	{#if showLabels === 'left' || showLabels === 'both'}
		<span class="text-xs-label" on:click={set(0)}>{values[0]}</span>
	{/if}

	<div
		class="track box-content flex flex-row items-center rounded-3xl h-8 w-12 bg-magenta-30 {classes}"
		on:click={toggle}
	>
		<div class="pusher transition-all" class:grow={valueIndex} />

		<div class="thumb rounded-full bg-gray-90 dark:bg-gray-80 w-6 h-6 mx-1" />
	</div>

	{#if showLabels === 'right' || showLabels === 'both'}
		<span class="text-xs-label" on:click={set(1)}>{values[1]}</span>
	{/if}
</div>

<style>
@media (prefers-color-scheme: dark) {
    span {
        --tw-text-opacity: 1;
        color: rgb(242 240 253 / var(--tw-text-opacity))
    }
}</style>
