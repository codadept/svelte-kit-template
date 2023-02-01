<script lang="ts">
	import type { PostInterface } from '@interfaces';

	export let data: PostInterface.Post;
</script>

<svelte:head>
	<title>{data.title.slice(0, 20)}</title>
</svelte:head>

<h1>{data.title}</h1>
<p>{data.body}</p>
