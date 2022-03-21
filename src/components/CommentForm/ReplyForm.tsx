import { useForm, SubmitHandler } from "react-hook-form";
import { useActions } from "../../hooks/useActions";
import { IComment } from "../../types/comment.interface";
import "./ReplyForm.scss";

const CommentForm: React.FC = () => {
  const { addComment } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>();

  const onSubmit: SubmitHandler<IComment> = newComment =>
    addComment(newComment);

  return (
    <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Leave a Reply</h1>
      <div className="input-field">
        <label>Comment</label>
        <textarea {...register("comment")} />
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Name</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <span className="error-message">This field is required</span>
          )}
        </div>
      </div>
      <div className="input-group">
        <div className="input-field">
          <label>Website</label>
          <input type="text" {...register("website")} />
          {errors.name && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label>Select a Category</label>
          <select {...register("category")} defaultValue={0}>
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
              {...register("checkboxes")}
            />
            <span>Option 1</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 2"
              {...register("checkboxes")}
            />
            <span>Option 2</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 3"
              {...register("checkboxes")}
            />
            <span>Option 3</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="option 4"
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
            <input type="radio" value="option 1" {...register("radio")} />
            <span>Option 1</span>
          </label>
          <label>
            <input type="radio" value="option 2" {...register("radio")} />
            <span>Option 2</span>
          </label>
          <label>
            <input type="radio" value="option 3" {...register("radio")} />
            <span>Option 3</span>
          </label>
          <label>
            <input type="radio" value="option 4" {...register("radio")} />
            <span>Option 4</span>
          </label>
        </div>
      </div>

      <input type="submit" value="post your reply" />
    </form>
  );
};

export default CommentForm;
