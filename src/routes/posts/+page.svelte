<script lang="ts">
	import type { PostInterface } from '@interfaces';

	export let data: PostInterface.PostList;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<h1>Post Page</h1>

<ul>
	{#each data.posts as d (d.id)}
		<li><a href="/posts/{d.id}">{d.title}</a></li>
	{/each}
</ul>
