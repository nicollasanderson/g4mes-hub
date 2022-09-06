import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container, More } from "./style";
import g4HUB from "../../images/g4HUB.svg";
import star from "../../images/star.png";
import starFill from "../../images/starFill.png";
import metacritic from "../../images/metacritic.svg";
import metacriticWord from "../../images/metacriticWord.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import key from "../../Services/key";
import ReactHtmlParser from "react-html-parser";
import LikeButton from "../LikeButton";
import { UserContext } from "../../Providers/user";
import app from "../../Services/api";
import { AnimatePresence, motion } from "framer-motion";

const FullCardGame = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { handleGradeGame, user } = useContext(UserContext);
  const { slug } = useParams();

  const [gameInfo, setGameInfo] = useState([]);
  const [plataforms, setPlataforms] = useState([]);
  const [description, setDescription] = useState("");
  const [release, setRelease] = useState("");
  const [genres, setGenres] = useState([]);
  const [star1, setStar1] = useState(star);
  const [star2, setStar2] = useState(star);
  const [star3, setStar3] = useState(star);
  const [star4, setStar4] = useState(star);
  const [star5, setStar5] = useState(star);
  const [grade, setGrade] = useState(5);
  const [userGraded, setUserGraded] = useState(false);
  const [reloadParam, setReloadParam] = useState(false);

  useEffect(() => {
    app.get(`/grades/${slug}`).then((response) => {
      const allGrades = response.data;
      setUserGraded(allGrades.some((el) => el.userId === user._id));
      if (allGrades.length > 0) {
        const finalGrade = (
          allGrades.reduce((acc, grade) => acc + grade.grade, 0) /
          allGrades.length
        ).toFixed(1);
        setGrade(finalGrade);
      } else {
        setGrade(grade.toFixed(1));
      }
    });
  }, [reloadParam]);

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games/${slug}?key=${key}`)
      .then((response) => {
        setGameInfo(response.data);
        setPlataforms(response.data.parent_platforms);
        setDescription(response.data.description);
        setGenres(response.data.genres);
        setRelease(
          new Date(response.data.released).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })
        );
      })
      .catch((error) => {
        toast.error("Ops! Página não encontrada", { theme: "dark" });
      });
  }, []);

  const reload = () => {
    setTimeout(() => setReloadParam(!reloadParam), 1000);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleStar1 = () => {
    setStar1(star1 === star ? starFill : star);
  };
  const handleStar2 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
  };
  const handleStar3 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
  };
  const handleStar4 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
    setStar4(star4 === star ? starFill : star);
  };
  const handleStar5 = () => {
    setStar1(star1 === star ? starFill : star);
    setStar2(star2 === star ? starFill : star);
    setStar3(star3 === star ? starFill : star);
    setStar4(star4 === star ? starFill : star);
    setStar5(star5 === star ? starFill : star);
  };

  return (
    <>
      {gameInfo && (
        <>
          <Container>
            <div className="img-holder">
              <img
                className="game-image"
                src={gameInfo.background_image}
                alt={gameInfo.name}
              />
            </div>
            <div className="info-holder">
              <h3 className="game--name">{gameInfo.name}</h3>
              <LikeButton className="like--button" gameInfo={gameInfo} />
              <div className="single--info">
                <h4>Plataformas:</h4>
                <div className="infos--details">
                  {plataforms.map((platforms, index) =>
                    index > 0 ? (
                      <span key={index}>,{platforms.platform.name}</span>
                    ) : (
                      <span key={index}>{platforms.platform.name}</span>
                    )
                  )}
                </div>
              </div>
              <div className="single--info">
                <h4>Gêneros:</h4>
                <div className="infos--details">
                  {genres.map((genre, index) =>
                    index > 0 ? (
                      <span key={index}>,{genre.name}</span>
                    ) : (
                      <span key={index}>{genre.name}</span>
                    )
                  )}
                </div>
              </div>
              <div className="single--info">
                <h4>Lançamento:</h4>
                <div className="infos--details">
                  <span>{release}</span>
                </div>
              </div>
              <div className="game-description">
                {ReactHtmlParser(description)}
              </div>
              <div className="arrow-buttom" onClick={handleClick}>
                {isClicked ? (
                  <IoIosArrowUp size="30px" />
                ) : (
                  <IoIosArrowDown size="30px" />
                )}
              </div>
            </div>
          </Container>
          <AnimatePresence>
            {isClicked && (
              <motion.div
                key="box--grades"
                initial={{ opacity: 0, y: "-10px"}}
                animate={{ opacity: 1, y: 0}}
                exit={{opacity: 0,y:"-10px"}}
                transition={{ duration: 1 }}
              >
                <More>
                  <div className="grades container--more">
                    <div className="single--grade">
                      <img
                        src={g4HUB}
                        alt="GamesHub logo"
                        className="games--hub"
                      />
                      <div className="grade--box">
                        <span>{grade}</span>
                      </div>
                    </div>
                    <div className="single--grade">
                      <div className="images--container">
                        <img
                          src={metacritic}
                          alt="metacritic"
                          className="metacritic"
                        />
                        <img
                          src={metacriticWord}
                          alt="metacritic logo word"
                          className="metacritic"
                        />
                      </div>
                      <div className="grade--box">
                        <span>
                          {gameInfo.metacritic ? gameInfo.metacritic : "?"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="user--grade container--more">
                    {userGraded ? (
                      <h3>
                        Reavalie sua <span>nota</span>
                      </h3>
                    ) : (
                      <h3>
                        Deixe sua <span>nota</span> também
                      </h3>
                    )}
                    <div className="stars--container">
                      <div
                        className="single--star star1"
                        style={{ backgroundImage: `url(${star1})` }}
                        onMouseOver={handleStar1}
                        onMouseOut={handleStar1}
                        onClick={() => {
                          handleGradeGame(slug, 1);
                          reload();
                        }}
                      ></div>
                      <div
                        className="single--star star2"
                        style={{ backgroundImage: `url(${star2})` }}
                        onMouseOver={handleStar2}
                        onMouseOut={handleStar2}
                        onClick={() => {
                          handleGradeGame(slug, 2);
                          reload();
                        }}
                      ></div>
                      <div
                        className="single--star star3"
                        style={{ backgroundImage: `url(${star3})` }}
                        onMouseOver={handleStar3}
                        onMouseOut={handleStar3}
                        onClick={() => {
                          handleGradeGame(slug, 3);
                          reload();
                        }}
                      ></div>
                      <div
                        className="single--star star4"
                        style={{ backgroundImage: `url(${star4})` }}
                        onMouseOver={handleStar4}
                        onMouseOut={handleStar4}
                        onClick={() => {
                          handleGradeGame(slug, 4);
                          reload();
                        }}
                      ></div>
                      <div
                        className="single--star star5"
                        style={{ backgroundImage: `url(${star5})` }}
                        onMouseOver={handleStar5}
                        onMouseOut={handleStar5}
                        onClick={() => {
                          handleGradeGame(slug, 5);
                          reload();
                        }}
                      ></div>
                    </div>
                  </div>
                </More>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default FullCardGame;
