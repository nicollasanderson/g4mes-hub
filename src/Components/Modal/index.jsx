import { Modal } from "./style";

import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { Link } from "react-router-dom";

const Modals = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <Modal>
      <h2>
        Seja bem vindo, <span>{user.username}!</span>
      </h2>
      <p className="user">
        Pronto para encontrar seu próximo <span>jogo favorito?</span>
      </p>
    </Modal>
  ) : (
    <Modal>
      <h2>Bem vindo ao GamesHub!</h2>
      <p>
        Aqui você poderá encontrar e conversar sobre os seus games favoritos!
      </p>
      <p>
        Crie uma conta and <Link to="/login">press start</Link>
      </p>
    </Modal>
  );
};

export default Modals;
