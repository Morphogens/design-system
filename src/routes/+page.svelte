<script lang="ts">
	import Title from '$lib/Title.v1.svelte'
	import Switch from '$lib/Switch.v1.svelte'
	import tooltip from '$lib/tooltip'

	let schedule: string
</script>

<Title size="l">Hello, world</Title>

<Switch
	values={['yearly', 'monthly']}
	bind:value={schedule}
	showLabels="both"
	classes="border-pill"
/>

<button use:tooltip={{ placement: 'top' }} title="Testing." class="bg-hover-active-orange"
	>testing</button
>
