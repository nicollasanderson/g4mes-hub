import { BsFillEmojiDizzyFill } from "react-icons/bs";
import CardComment from "../CardComment";
import { motion } from "framer-motion";
import { DivRecentContainer } from "./style";

const RecentComents = ({ userPosts }) => {
  const filteredComments = userPosts
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ marginTop: "-50px" }}
      animate={{ marginTop: "0px" }}
      transition={{ duration: 1 }}
    >
      <DivRecentContainer>
        <h3 className="comment-tittle">Principais Comentários</h3>
        {filteredComments && filteredComments.length !== 0 ? (
          <ul>
            {filteredComments.map((comment, index) => {
              return <CardComment profile comment={comment} key={index} />;
            })}
          </ul>
        ) : (
          <div>
            <BsFillEmojiDizzyFill className="sad-icon" />
            <p className="no-comment-text">
              Não encontramos nenhum comentário seu
            </p>
          </div>
        )}
      </DivRecentContainer>
    </motion.div>
  );
};

export default RecentComents;
