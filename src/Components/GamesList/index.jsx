import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";
import Buttons from "../Buttons";
import CardGame from "../CardGame";
import { GamesListUl, Container } from "./style";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const GamesList = ({ type }) => {
  const { gamesList, listAllGames, previousPage, nextPage, searched } =
    useContext(GamesContext);

  return (
    <div>
      <GamesListUl>
        {type === "home" &&
          gamesList.map((game, index) => (
            <li key={index}>
              <CardGame game={game} key={index} />
            </li>
          ))}

        {type === "games" &&
          listAllGames.map((game, index) => (
            <li key={index}>
              <CardGame game={game} key={index} />
            </li>
          ))}

        {type === "search" &&
          searched.map((game, index) => (
            <li key={index}>
              <CardGame game={game} key={index} />
            </li>
          ))}
      </GamesListUl>
      {type === "games" && (
        <Container>
          <Buttons onClick={previousPage} className="btn--games">
            <AiOutlineArrowLeft size={"30px"} />
          </Buttons>
          <Buttons onClick={nextPage} className="btn--games">
            <AiOutlineArrowRight size={"30px"} />
          </Buttons>
        </Container>
      )}
    </div>
  );
};

export default GamesList;
