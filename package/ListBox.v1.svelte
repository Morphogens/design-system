<script>import Title from './Title.v1.svelte';
import FlatToFlat from './connectors/FlatToFlat.v1.svelte';
export let title = undefined;
export let classes = '';
export let contentClasses = '';
</script>

<div class="list-box {classes}">
	{#if title}
		<Title size="m">{title}</Title>

		<FlatToFlat />
	{/if}

	<div class="box {contentClasses}">
		<slot />
	</div>
</div>

<style>
.box {

    display: flex;

    width: 100%;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 0.5rem;

    border-radius: 24px;

    --tw-bg-opacity: 1;

    background-color: rgb(28 26 44 / var(--tw-bg-opacity));

    padding: 0.75rem;

    --tw-text-opacity: 1;

    color: rgb(242 240 253 / var(--tw-text-opacity))
}

@media (prefers-color-scheme: dark) {

    .box {

        --tw-bg-opacity: 1;

        background-color: rgb(60 58 76 / var(--tw-bg-opacity))
    }
}

.list-box {

    position: relative;

    display: flex;

    width: 480px;

    max-width: 100%;

    flex-direction: column;

    align-items: center;

    justify-content: flex-start
}</style>
