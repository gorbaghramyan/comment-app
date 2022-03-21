import { IComment } from "./comment.interface";

export enum CommentActionTypes {
    ADD_COMMENT = 'ADD_COMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    DELETE_COMMENT = 'DELETE_COMMENT',
}

interface AddCommentAction {
    type: CommentActionTypes.ADD_COMMENT;
    payload: IComment;
}
interface EditCommentAction {
    type: CommentActionTypes.EDIT_COMMENT;
    payload: IComment;
}
interface DeleteCommentAction {
    type: CommentActionTypes.DELETE_COMMENT;
    payload: string;
}

export type CommentAction =
    AddCommentAction
    | EditCommentAction
    | DeleteCommentAction;
