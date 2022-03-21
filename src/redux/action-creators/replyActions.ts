import { CommentActionTypes } from './../../types/actionTypes';
import { IComment } from './../../types/comment.interface';
import { Dispatch } from "redux";
import { CommentAction } from '../../types/actionTypes';
import * as uuid from 'uuid';

export const addComment = (comment: IComment) => {
    return (dispatch: Dispatch<CommentAction>) => {
        comment.id = uuid.v4();
        comment.date = Date.now();

        dispatch({ type: CommentActionTypes.ADD_COMMENT, payload: comment });
    }
}

export const editComment = (comment: IComment) => {
    return (dispatch: Dispatch<CommentAction>) => {
        dispatch({ type: CommentActionTypes.EDIT_COMMENT, payload: comment });
    }
}

export const deleteComment = (id: string) => {
    return (dispatch: Dispatch<CommentAction>) => {
        dispatch({ type: CommentActionTypes.DELETE_COMMENT, payload: id });
    }
}