import { useSelector } from "react-redux";
import { IComment } from "../../types/comment.interface";
import avatar from "./../../assets/user.png";
import edit from "./../../assets/edit.png";
import deleteCom from "./../../assets/delete.png";
import { useActions } from "../../hooks/useActions";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Comments.scss";

const Comments: React.FC = () => {
  const comments = useSelector((state: IComment[]) => state);

  if (!comments.length) {
    return <h2 className="no-comment">There are no any comments yet</h2>;
  }

  return (
    <div>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

const Comment = ({ comment }: { comment: IComment }) => {
  const date = new Date(comment.date);
  const { deleteComment } = useActions();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt="Avatar" title="Avatar" />
      <div className="comment-info">
        <p>
          <strong>{comment.name}</strong>
        </p>
        <p>
          {date.toLocaleString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
        <p>{comment.comment}</p>
        <div className="button-cont">
          <button onClick={() => deleteComment(comment.id)}>
            <img src={deleteCom} alt="delete" title="Delete" />
          </button>
          <button onClick={() => setIsModalOpen(true)}>
            <img src={edit} alt="edit" title="Edit" />
          </button>
        </div>
      </div>
          {isModalOpen ? <Modal comment={comment} setIsModalOpen={setIsModalOpen} /> : null}
    </div>
  );
};



export default Comments;
