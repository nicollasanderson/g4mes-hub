import CardComment from "../CardComment";
import { Container } from "./style";

const CommentsList = ({ comments, profile ,setFilteredComments,reload}) => {
  return (
    <Container>
      <ul>
        {comments.map((comment, index) => (
          <CardComment key={index} profile={profile} comment={comment} comments={comments} setFilteredComments={setFilteredComments} reload={reload}/>
        ))}
      </ul>
    </Container>
  );
};

export default CommentsList;
