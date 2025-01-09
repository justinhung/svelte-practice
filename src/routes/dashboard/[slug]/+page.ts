import { error } from '@sveltejs/kit';

export const load = ({ params, data }) => {
	console.log('server.ts', data)
	if (params.slug === 'hello-world') {
		return {
			title: data.title,
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	error(404, 'Not found');
};