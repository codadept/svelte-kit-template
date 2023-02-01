import { error } from '@sveltejs/kit';
import { PageLoad } from './$types';
import axios from 'axios';

export const load: PageLoad = async ({ params }) => {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

	if (response.status === 200) {
		return response.data;
	} else {
		throw error(response.status, response.statusText);
	}
};
