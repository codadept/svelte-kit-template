<script lang="ts">
	import axios from 'axios';

	let quote = '';

	async function generateQuote() {
		const response = await axios.get('/api/random-quote', {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.status === 200) {
			quote = response.data.quote;
		} else {
			quote = 'Fetch error';
		}
	}
</script>

<h1>About Page</h1>

<p>{quote}</p>

<button on:click={generateQuote}>Generate New Quote</button>
