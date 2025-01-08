import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	// const post = await getPostFromDatabase(params.slug);
	let post
	if (params.slug === 'hello-world') {
		post = {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	if (post) {
		return post;
	}

	error(404, 'Not found');
};