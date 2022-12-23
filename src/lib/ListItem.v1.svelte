<script lang="ts">
export let title: string = ''
export let detail: string = ''
</script>

<div class="w-full flex justify-between items-center">
	<div class="flex flex-col">
		<div class="text-s-label">
			<slot name="title">{title}</slot>
		</div>
		<div class="text-xs-label">
			<slot name="detail">{detail}</slot>
		</div>
	</div>

	<slot name="action" />
</div>
