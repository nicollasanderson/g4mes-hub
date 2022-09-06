import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import { motion } from "framer-motion";
import { Container } from "./style";
import { useContext } from "react";
import { GamesContext } from "../../Providers/Games";
import { Modal } from "./style";

const SearchGame = () => {
  const { searched, current } = useContext(GamesContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <div className="home--top">
          <Header />
          {searched.length === 0 && (
            <motion.div
              initial={{ marginLeft: "-200px" }}
              animate={{ marginLeft: "0px" }}
              transition={{ duration: 1 }}
            >
              <Modal>
                <h2>Nenhum resultado encontrado 😔</h2>
                <p>
                  Que tal buscar pelo seu <span>game favorito?</span>
                </p>
              </Modal>
            </motion.div>
          )}
        </div>
        {searched.length > 0 && (
          <motion.div
            initial={{ marginTop: "400px" }}
            animate={{ marginTop: "0px" }}
            transition={{ duration: 1 }}
          >
            <div className="home--bottom">
              {current !== "" ? (
                <h2 className="main--title">
                  Resultados da pesquisa por{" "}
                  <div>
                    <h4>{current}</h4>
                  </div>
                </h2>
              ) : (
                <h2 className="main--title">Resultados da pesquisa</h2>
              )}
              <GamesList type="search" />
            </div>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
};

export default SearchGame;
