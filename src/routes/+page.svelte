<script lang="ts">
	import type { ActionData, PageData } from './$types';

	import List from '$lib/list.svelte';
	import Add from '../lib/add.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="container p-3">
	<Add />
	<List items={data.items} />
</div>

{#if form?.success}
	<p>added task</p>
{/if}
