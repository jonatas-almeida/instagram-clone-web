import { User } from "./User";

export interface Comment {
    id: number;
    user_id: User;
    user_comment: string;
    comment_like: number;
}
