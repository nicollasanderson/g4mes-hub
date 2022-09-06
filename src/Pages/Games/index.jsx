import Header from "../../Components/Header";
import GamesList from "../../Components/GamesList";
import { Container } from "./style";
import { motion } from "framer-motion";

const GamesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <Header />
        <motion.div
          initial={{ marginTop: "400px" }}
          animate={{ marginTop: "0px" }}
          transition={{ duration: 1 }}
        >
          <main>
            <h2 className="main--title">Games</h2>
            <GamesList type={"games"} />
          </main>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default GamesPage;
