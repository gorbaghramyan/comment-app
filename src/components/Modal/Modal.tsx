import { IComment } from "../../types/comment.interface";
import { formType } from "../../types/formType";
import CommentForm from "../CommentForm/ReplyForm";
import "./Modal.scss"
const Modal = ({ comment, setIsModalOpen }: { comment: IComment, setIsModalOpen: (value: boolean) => void }) => {
    return (
      <div className="modal">
        <button className="close" onClick={() => setIsModalOpen(false)}>X</button>
        <CommentForm type={formType.EDIT} comment={comment} />
      </div>
    )
  }

  export default Modal;