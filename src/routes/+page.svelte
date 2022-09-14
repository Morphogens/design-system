<script lang="ts">
	import Title from '$lib/Title.v1.svelte'
	import Switch from '$lib/Switch.v1.svelte'

	let schedule: string
</script>

<Title size="l">Hello, world</Title>

<Switch
	values={['yearly', 'monthly']}
	bind:value={schedule}
	showLabels="both"
	classes="border-pill"
/>
