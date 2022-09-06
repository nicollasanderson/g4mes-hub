import UserInfo from "../../Components/UserInfo";
import LikedGames from "../../Components/LikedGames";
import Header from "../../Components/Header";
import { ContentWraper, DivProfileContainer } from "./style";
import RecentComents from "../../Components/RecentComents";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import app from "../../Services/api";
import { motion } from "framer-motion";

const Profile = () => {
  const { userPosts, setUserPosts } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        setUserPosts(response.data.comments);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div>
        <Header />
        <DivProfileContainer>
          <ContentWraper>
            <UserInfo id={id} />
            <LikedGames />
          </ContentWraper>
          <RecentComents userPosts={userPosts} />
        </DivProfileContainer>
      </div>
    </motion.div>
  );
};

export default Profile;
