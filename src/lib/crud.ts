export type Task = {
	id: string;
	task: string;
	memo: string;
	estimate: number;
	actual: number;
	start: string;
	end: string;
	expand?: {
		mode: {
			mode: string;
			color: string;
		};
		project: { name: string }[];
	};
};

const baseUrl = 'http://127.0.0.1:8090/';

export async function getTaskList(fetch: any) {
	const res = await fetch(baseUrl + 'api/collections/tc_tasks/records?expand=mode,project');
	const item = await res.json();
	return item.items;
}

export async function addTask(fetch: any, newTask: string) {
	const res = await fetch(baseUrl + 'api/collections/tc_tasks/records', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({ task: newTask })
	});
	const item = await res.json();
	console.log(item);
	return item.items;
}
