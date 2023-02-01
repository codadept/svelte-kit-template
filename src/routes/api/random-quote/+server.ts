import { error, json } from '@sveltejs/kit';
import axios from 'axios';
import { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const response = await axios.get('https://api.kanye.rest/');

	if (response.status !== 200) {
		throw error(response.status, response.statusText);
	}

	return json(response.data);
};
