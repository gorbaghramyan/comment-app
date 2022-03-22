import { CommentAction, CommentActionTypes } from '../../types/actionTypes';
import { IComment } from '../../types/comment.interface';

const initialState: IComment[] = [];

export const replyReducer = (state = initialState, action: CommentAction): IComment[] => {
    switch (action.type) {
        case CommentActionTypes.ADD_COMMENT:
            return [...state, action.payload];
        case CommentActionTypes.EDIT_COMMENT:
            return state.map(comment => comment.id === action.payload.id ? {...comment, ...action.payload} : comment);
        case CommentActionTypes.DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.payload);
        default:
            return [...state];
    }
}
