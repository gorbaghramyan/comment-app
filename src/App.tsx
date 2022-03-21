import CommentForm from "./components/CommentForm/ReplyForm";
import Comments from "./components/Comments/Comments";

const App: React.FC = () => {
  return (
    <div className="App">
      <Comments />
      <CommentForm />
    </div>
  );
};

export default App;
