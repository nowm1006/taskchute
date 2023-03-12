import type { PageServerLoad, Actions } from './$types'

export interface Task {
	actual: number
	end: string
	estimate: number
	expand: {
		mode: {
			mode: string
			color: string
		}
		project: { name: string }
	}
	id: string
	isRoutine: boolean
	link: string
	memo: string
	mode: string
	project: string
	start: string
	task: string
}

export const load = (async ({ locals, fetch }) => {
	const { items } = await locals.pb
		.collection('tc_tasks')
		.getList<Task>(1, 30, { expand: 'mode,project' })

	return { items: structuredClone(items) as typeof items }
}) satisfies PageServerLoad

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()
		const taskName = data.get('task-name') as string
		locals.pb.collection('tc_tasks').create({ task: taskName, mode: 'qm8pmtqcnjv6omj' })
		return { success: true }
	}
} satisfies Actions
