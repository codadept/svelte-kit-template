import { error } from '@sveltejs/kit';
import { PageLoad } from './$types';
import axios from 'axios';

export const load: PageLoad = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	if (response.status === 200) {
		return {
			title: 'Posts',
			posts: response.data
		};
	} else {
		throw error(response.status, response.statusText);
	}
};
