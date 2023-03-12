<script lang="ts">
	import { enhance } from '$app/forms';
	let taskName = '';
</script>

<form class="flex h-12 items-center" method="POST" use:enhance>
	<i class="fa-solid fa-circle-plus fa-xl mr-1 text-sky-400" />
	<input
		type="text"
		class="w-96 rounded border"
		placeholder="New Task"
		bind:value={taskName}
		name="task-name"
	/>
</form>
