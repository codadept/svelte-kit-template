interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface PostList {
	title: string;
	posts: Post[];
}

export type { Post, PostList };
