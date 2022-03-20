import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Game, Profile } from "./style";

const CardComment = ({
  img,
  gameName,
  gameSlug,
  comment,
  likes,
  username,
  profile,
}) => {
  const [width, setWidth] = useState("");

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      {profile ? (
        <Profile className="card-comment">
          <div className="img-holder">
            <img src={img} alt={username}></img>
          </div>
          <div className="content-holder">
            <span className="name">{`${username} >`}</span>
            <span className="game--name">{gameName}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Profile>
      ) : (
        <Game>
          <div className="img-holder">
            <img src={img} alt={username}></img>
          </div>
          <div className="content-holder">
            <span className="name">{username}</span>
            <p className="comment">{comment}</p>
            <span className="like-holder">
              {likes}5
              <FaThumbsUp className="like-icon" />
            </span>
          </div>
        </Game>
      )}
    </>
  );
};

export default CardComment;
