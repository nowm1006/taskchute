<script lang="ts">
	import type { Task } from '../lib/crud';
	export let items: Task[] = [];
</script>

<div class="flex flex-wrap justify-around border-b">
	<div class="basis-48">Task</div>
	<div class="basis-24">Mode</div>
	<div class="basis-24">Estimation</div>
	<div class="basis-24">Actual</div>
	<div class="basis-24">Start</div>
	<div class="basis-24">End</div>
</div>
{#each items as item (item.task)}
	<div class="mb-1 flex h-12 flex-wrap items-center justify-around border-b">
		<div
			contenteditable="true"
			class="basis-48 rounded duration-100 hover:border hover:border-black"
		>
			{item.task}
		</div>
		<div contenteditable="true" class="basis-24">{item?.expand?.mode?.mode}</div>
		<div contenteditable="true" class="basis-24">{item.estimate}</div>
		<div contenteditable="true" class="basis-24">{item.actual}</div>
		<div contenteditable="true" class="basis-24">{item.start}</div>
		<div contenteditable="true" class="basis-24">{item.end}</div>
	</div>
{/each}
