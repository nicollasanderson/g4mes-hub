import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import key from "../../Services/key"

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [gamesList, setGamesList] = useState([]);
  const [listAllGames, setListAllGames] = useState([]);
  const [nextList,setNextList] = useState([]);
  const [prevList,setPrevList] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);
  const history = useHistory();

  const nextPage = () => {
    setPage(page + 1);
    setListAllGames(nextList)
    window.scrollTo({top:0,behavior:'smooth'})
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setListAllGames(prevList)
      window.scrollTo({top:0,behavior:'smooth'})
    }
  };
  const listGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?metacritc>90&key=${key}&dates=2021-12-01,2022-02-25&page_size=8&page=1`
      )
      .then((response) => {
        setGamesList(response.data.results);
      });
  };

  const listMoreGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${key}&page_size=24&page=1`
      )
      .then((response) => {
        setListAllGames(response.data.results);
      });
  };

  const listNextPage = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${key}&page_size=24&page=${page+1}`
      )
      .then((response) => {
        setNextList(response.data.results);
      });
  };

  const listPreviousPage = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${key}&page_size=24&page=${page-1}`
      )
      .then((response) => {
        setPrevList(response.data.results);
      });
  };

  const getGameInfo = (game) => {
    
      history.push(`/gameInfo/${game.slug}`);
      window.scrollTo({top:0,behavior:'smooth'})
  };

  useEffect(()=>{
    listGames();
    listMoreGames();
  },[])

  useEffect(()=>{
    listNextPage()
    listPreviousPage()
  },[page])

  return (
    <GamesContext.Provider
      value={{
        gamesList,
        listAllGames,
        gameInfo,
        nextPage,
        previousPage,
        getGameInfo,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
