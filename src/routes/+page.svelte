<script lang="ts">
import Title from '$lib/Title.v1.svelte'
import Switch from '$src/lib/Switch.v2.svelte'
import tooltip from '$lib/tooltip'
import Button from '$lib/Button.v1.svelte'
import FlatToFlat from '$src/lib/connectors/FlatToFlat.v1.svelte'
import ListBox from '$lib/ListBox.v1.svelte'
import ListItem from '$lib/ListItem.v1.svelte'
import type { BinaryWritable } from '$src/types'
import Input from '$src/lib/Input.v1.svelte'

let schedule: BinaryWritable<'yearly' | 'monthly'>
</script>

<div class="flex flex-wrap w-full gap-4 p-4">
	<div class="component-type">
		<Title size="s">Titles</Title>

		<Title size="xxl">Hello, xxl</Title>
		<Title size="xl">Hello, xl</Title>
		<Title size="l">Hello, l</Title>
		<Title size="m">Hello, m</Title>
		<Title size="s">Hello, s</Title>
	</div>

	<div class="component-type">
		<Title size="s">Buttons</Title>
		<Button size="l">Large Button</Button>
		<Button size="m">Medium Button</Button>
		<Button size="s">small Button</Button>
	</div>

	<div class="component-type">
		<Title size="s">Switch</Title>

		<Switch
			values={['yearly', 'monthly']}
			bind:value={schedule}
			showLabels="both"
			classes="border-pill"
			on:change={console.log}
		/>
	</div>

	<div class="component-type">
		<Title size="s">Connectors</Title>

		<div class="flex flex-col items-center">
			<Title size="m">Flat</Title>
			<FlatToFlat />
			<Title size="m">Flat</Title>
		</div>
	</div>

	<div class="component-type">
		<Title size="s">Tooltips</Title>
		<button use:tooltip={{ placement: 'top' }} title="Testing." class="bg-hover-active-orange">
			testing
		</button>
		<Button classes="!bg-hover-active-blue">Button</Button>
	</div>

	<div class="component-type">
		<ListBox title="List Box">
			<ListItem title="List Item" detail="Optional detail">
				<Input type="text" placeholder="text Input" slot="action" />
			</ListItem>
			<ListItem title="List Item">
				<Input type="number" placeholder="Number Input" slot="action" />
			</ListItem>
			<ListItem title="List Item">
				<Input type="email" placeholder="email" slot="action" />
			</ListItem>
			<ListItem title="List Item">
				<span slot="detail"> Detail or title can also be a slot 🎉 </span>
				<Input type="password" placeholder="password input" slot="action" />
			</ListItem>
		</ListBox>
	</div>
</div>

<style>
.component-type {
	@apply flex flex-col gap-4 p-4 border dark:border-gray-10 rounded-3xl;
}
</style>
