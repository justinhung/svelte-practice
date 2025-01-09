import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	console.log('server params', params)

	const post = await new Promise((resolve) => setTimeout(() => {
		if (params.slug === 'hello-world') {
			resolve('Hello world!');
		}
	}, 1000));

	if (post) {
		console.log('post', post)
		return {
			title: 'post'
		}
	}

	error(404, 'Not found');
};
