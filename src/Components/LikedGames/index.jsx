import { DivContainer } from "./style";
import { IoLogoGameControllerA } from "react-icons/io";
import app from "../../Services/api";
import CardGame from "../CardGame";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1601 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1150 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1149, min: 1045 },
    items: 2,
  },
  alternativeTablet: {
    breakpoint: { max: 1044, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const LikedGames = () => {
  const { id } = useParams();
  const [gamesLiked, setGamesLiked] = useState([]);

  useEffect(() => {
    app.get(`/likes/user/${id}`).then((response) => {
      setGamesLiked(response.data.likedGames);
    });
  }, [id]);

  return (
    <motion.div
      initial={{ marginLeft: "-200px" }}
      animate={{ marginLeft: "0px" }}
      transition={{ duration: 1 }}
    >
      <DivContainer>
        <div>
          <IoLogoGameControllerA />
          <h1>Jogos curtidos</h1>
          {gamesLiked.length > 0 ? (
            <Carousel
              responsive={responsive}
              autoPlay={false}
              autoPlaySpeed={100000}
              itemClass="carouselItem"
              partialVisible={true}
              swipeable={true}
              draggable={true}
            >
              {gamesLiked.map((game) => (
                <CardGame
                  key={game._id}
                  className="Liked-game-card"
                  game={game.gameLiked}
                />
              ))}
            </Carousel>
          ) : (
            <h3>Nenhum jogo curtido :c</h3>
          )}
        </div>
      </DivContainer>
    </motion.div>
  );
};

export default LikedGames;
