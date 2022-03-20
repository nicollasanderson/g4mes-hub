import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { FaThumbsUp } from "react-icons/fa";
import { useEffect } from "react";
import CommentsList from "../CommentsList";
import { DivRecentContainer } from "./style";
import { useParams } from "react-router-dom";

const RecentComents = () => {
  const { userPosts, listUserPosts } = useContext(UserContext);
  const { id } = useParams();
  console.log(userPosts.posts);

  useEffect(() => {
    listUserPosts(id);
  }, [id]);
  return (
    <DivRecentContainer>
      <h3 className="comment-tittle">Comentários</h3>
      {userPosts.posts.length && userPosts.posts > 0 ? (
        <CommentsList
          comments={userPosts.posts}
          profile
          user={userPosts.username}
        />
      ) : (
        <div>
          <BsFillEmojiDizzyFill className="sad-icon" />
          <p className="no-comment-text">
            Não encontramos nenhum comentário seu
          </p>
        </div>
      )}
    </DivRecentContainer>
  );
};

export default RecentComents;
