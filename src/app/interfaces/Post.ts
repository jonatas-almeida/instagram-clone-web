import { Comment } from "./Comment";

export interface Post {

    id: number;
    post_name: string;
    post_description: string;
    post_date: Date;
    post_comments: Comment;
    post_likes: number;

}
