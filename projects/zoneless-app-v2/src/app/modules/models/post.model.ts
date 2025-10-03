export interface Post {
    id: string;
    title: string;
    views: number;
}

export type PostForCreate = Omit<Post, "id">;