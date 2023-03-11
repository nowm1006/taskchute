import type { PageServerLoad, Actions } from './$types';
import { getTaskList, addTask } from '../lib/crud';

export const load = (async ({ fetch }) => {
	const items = getTaskList(fetch);
	return { items };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const taskName = data.get('task-name') as string;
		addTask(fetch, taskName);
		return { success: true };
	}
} satisfies Actions;
