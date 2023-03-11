<script lang="ts">
	let items = [
		{
			task: 'implementa list',
			mode: 'Normal',
			estimation: '10.0',
			actual: '5.0',
			start: '11:00',
			end: '11:05'
		},
		{
			task: 'repeat list',
			mode: 'Easy',
			estimation: '1.0',
			actual: '',
			start: '',
			end: ''
		},
		{
			task: 'next step',
			mode: 'Hard',
			estimation: '120.0',
			actual: '',
			start: '',
			end: ''
		}
	];
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
			on:blur={(e) => console.log(e.target?.innerText)}
		>
			{item.task}
		</div>
		<div contenteditable="true" class="basis-24">{item.mode}</div>
		<div contenteditable="true" class="basis-24">{item.estimation}</div>
		<div contenteditable="true" class="basis-24">{item.actual}</div>
		<div contenteditable="true" class="basis-24">{item.start}</div>
		<div contenteditable="true" class="basis-24">{item.end}</div>
	</div>
{/each}
