import { Post } from "./Post";
import { User } from "./User";

export interface UserPosts {

    id: number;
    user: User;
    user_post: Post;
}
