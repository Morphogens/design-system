<script lang="ts">
export let title = ''
export let detail = ''
export let classes = ''
</script>

<div class="w-full max-w-full flex justify-between items-center {classes}">
	<div class="flex flex-col max-w-[50%]">
		<div class="text-s-label">
			<slot name="title">{title}</slot>
		</div>
		<div class="text-xs-label truncate">
			<slot name="detail">{detail}</slot>
		</div>
	</div>

	<slot name="action" />
</div>
