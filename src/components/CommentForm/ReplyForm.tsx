import { useForm, SubmitHandler } from "react-hook-form";
import { useActions } from "../../hooks/useActions";
import { IComment } from "../../types/comment.interface";
import { formType } from "../../types/formType";
import "./ReplyForm.scss";

const CommentForm: React.FC<{ type: formType, comment?: IComment }> = ({ type, comment }) => {
  const { addComment, editComment } = useActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IComment>();

  const formTitle = type === formType.ADD ? "Leave a Reply" : "Edit";
  const saveButtonTitle = type === formType.ADD ? "post your reply" : "save";

  const onSubmit: SubmitHandler<IComment> = comment => {
    type === formType.ADD ? addHandler(comment) : editHandler(comment);
    reset();
  }

  const addHandler = (comment: IComment) => addComment(comment);
  const editHandler = (editedComment: IComment) => editComment({...editedComment, id: comment?.id || ''});

  return (
    <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>{formTitle}</h1>
      <div className="input-field">
        <label>Comment</label>
        <textarea defaultValue={comment?.comment} {...register("comment")} />
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Name</label>
          <input defaultValue={comment?.name} type="text" {...register("name", { required: true })} />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label>Email</label>
          <input defaultValue={comment?.email} type="email" {...register("email", { required: true })} />
          {errors.email && (
            <span className="error-message">This field is required</span>
          )}
        </div>
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Website</label>
          <input defaultValue={comment?.website} type="text" {...register("website")} />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label>Select a Category</label>
          <select {...register("category")} defaultValue={comment?.comment || 0}>
            <option value="0" disabled>
              your work is not upto mark
            </option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            <option value="4">Category 4</option>
          </select>
        </div>
      </div>
      <div className="input-field">
        <label>Check your need</label>
        <div className="button-group">
          <label>
            <input
              type="checkbox"
              value="option 1"
              defaultChecked={comment?.checkboxes?.includes("option 1")}
              {...register("checkboxes")}
            />
            <span>Option 1</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 2"
              defaultChecked={comment?.checkboxes?.includes("option 2")}
              {...register("checkboxes")}
            />
            <span>Option 2</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 3"
              defaultChecked={comment?.checkboxes?.includes("option 3")}
              {...register("checkboxes")}
            />
            <span>Option 3</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 4"
              defaultChecked={comment?.checkboxes?.includes("option 4")}
              {...register("checkboxes")}
            />
            <span>Option 4</span>
          </label>
        </div>
      </div>
      <div className="input-field">
        <label>Radio buttons</label>
        <div className="button-group">
          <label>
            <input type="radio" value="option 1" defaultChecked={comment?.radio === "option 1"} {...register("radio")} />
            <span>Option 1</span>
          </label>
          <label>
            <input type="radio" value="option 2" defaultChecked={comment?.radio === "option 2"} {...register("radio")} />
            <span>Option 2</span>
          </label>
          <label>
            <input type="radio" value="option 3" defaultChecked={comment?.radio === "option 3"} {...register("radio")} />
            <span>Option 3</span>
          </label>
          <label>
            <input type="radio" value="option 4" defaultChecked={comment?.radio === "option 4"} {...register("radio")} />
            <span>Option 4</span>
          </label>
        </div>
      </div>

      <input type="submit" value={saveButtonTitle} />
    </form>
  );
};

export default CommentForm;
