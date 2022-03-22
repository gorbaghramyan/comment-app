import CommentForm from "./components/CommentForm/ReplyForm";
import Comments from "./components/Comments/Comments";
import { formType } from "./types/formType";

const App: React.FC = () => {
  return (
    <div className="App">
      <Comments />
      <CommentForm type={formType.ADD} />
    </div>
  );
};

export default App;
