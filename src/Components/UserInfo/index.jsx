import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsFillPencilFill } from "react-icons/bs";
import UserEdit from "../UserEdit";
import { DivInfosContainer, InfosBox, InfosContainer } from "./style";
import app from "../../Services/api";
import userImg from "../../images/userImg.svg";

const UserInfo = ({ id }) => {
  const [modal, setModal] = useState(true);
  const [username, setUsername] = useState("");
  const [img, setImg] = useState(userImg);
  const [description, setDescription] = useState("");
  const [plataform, setPlataform] = useState("");
  const [userId, setUserId] = useState("");
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        setUsername(response.data.user.username);
        setImg(response.data.user.img);
        setDescription(response.data.user.description);
        setPlataform(response.data.user.plataform);
        setUserId(response.data.user._id);
      })
      .catch((err) => console.log(err));
  }, [user, id]);

  if (!user) {
    history.push("/login");
  }

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal && <UserEdit handleModal={handleModal} />}
      <motion.div
        initial={{ marginLeft: "-200px" }}
        animate={{ marginLeft: "0px" }}
        transition={{ duration: 1 }}
      >
        <DivInfosContainer>
          <InfosBox>
            <InfosContainer>
              <div className="img--description">
                <figure>
                  <img
                    src={img}
                    alt="Imagem de perfil do usuário"
                    className="user--profile--img"
                  />
                </figure>
                <p className="description">{description}</p>
              </div>
              <div className="username--plataform">
                <h2>{username}</h2>
                <h3>
                  Plataforma favorita: <span>{plataform}</span>
                </h3>
              </div>
            </InfosContainer>
            {user._id === userId && (
              <button onClick={handleModal}>
                <BsFillPencilFill />
              </button>
            )}
          </InfosBox>
        </DivInfosContainer>
      </motion.div>
    </>
  );
};

export default UserInfo;
