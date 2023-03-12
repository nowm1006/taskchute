<script lang="ts">
	import type { ActionData, PageData } from './$types'

	import List from './list.svelte'
	import Add from './add.svelte'

	export let data: PageData
</script>

<div class="container p-3">
	<Add />
	<List items={data.items} />
</div>
