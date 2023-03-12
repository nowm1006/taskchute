<script lang="ts">
	import type { Task } from '../lib/crud';
	export let items: Task[] = [];

	const list2str = (list: any[]) => {
		return list.reduce((p, c, i) => {
			if (i == 0) return c.name;
			return p + ',' + c.name;
		}, '');
	};
</script>

<div class="flex flex-wrap justify-around border-b font-bold">
	<div class="basis-48">Task</div>
	<div class="basis-24">Mode</div>
	<div class="basis-24">Estimation</div>
	<div class="basis-24">Actual</div>
	<div class="basis-24">Start</div>
	<div class="basis-24">End</div>
</div>
{#each items as item (item.task)}
	<div class="mb-1 flex h-16 flex-wrap items-center justify-around border-b">
		<div class="basis-48">
			<div class="text-sm text-gray-500">
				{@debug item}
				{list2str(item.expand?.project)}
			</div>
			<div
				contenteditable="true"
				class="rounded text-xl duration-100 hover:border hover:border-black"
			>
				{item.task}
			</div>
		</div>
		<div contenteditable="true" class="basis-24">{item?.expand?.mode?.mode}</div>
		<div contenteditable="true" class="basis-24">{item.estimate}</div>
		<div contenteditable="true" class="basis-24">{item.actual}</div>
		<div contenteditable="true" class="basis-24">{item.start}</div>
		<div contenteditable="true" class="basis-24">{item.end}</div>
	</div>
{/each}
