import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from '../redux/action-creators/replyActions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
