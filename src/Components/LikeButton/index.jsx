import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/user";
import { LikeButtonContainer } from "./style";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const LikeButton = ({ gameInfo, ...rest }) => {
  const [found, setFound] = useState(false);
  const { handleGameLike,userGameLikes } = useContext(UserContext);

  useEffect(() => {
    setFound(userGameLikes.some(el=>el.slug === gameInfo.slug))
  },[userGameLikes,gameInfo])

  return (
    <LikeButtonContainer onClick={() => handleGameLike(gameInfo)} {...rest}>
      {found ? <AiFillLike /> : <AiOutlineLike />}
    </LikeButtonContainer>
  );
};

export default LikeButton;
