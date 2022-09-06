import Header from "../../Components/Header";
import Nicollas from "../../images/Nicollas.png";
import Victor from "../../images/Victor.png";
import Guilherme from "../../images/Guilherme.png";
import Marcos from "../../images/Marcos.png";
import Juan from "../../images/Juan.png";
import Oswaldo from "../../images/Oswaldo.png";
import { Main } from "./style";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Main>
        <Header />
        <h1>Equipe de Desenvolvedores</h1>
        <section>
          <motion.div
            initial={{ marginLeft: "-400px" }}
            animate={{ marginLeft: "0px" }}
            transition={{ duration: 1 }}
          >
            <ul className="list-developers">
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1}}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Marcos} alt="" />
                  <h2>Marcos Vinícius Mafei</h2>
                  <span>Tech Leader</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/marcosvin%C3%ADciusmafeimachado">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/marcos-vinicius-mafei">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Victor} alt="" />
                  <h2>Victor Luiz Sagulo</h2>
                  <span>Scrum Master</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/victor-luiz-sagulo-de-aquino-campos-5845a3212/">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/victor-sagulo">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Nicollas} alt="" />
                  <h2>Nicollas Anderson</h2>
                  <span>Product Owner</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/nicollas-anderson/">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/nicollasanderson">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Guilherme} alt="" />
                  <h2>Guilherme Silva</h2>
                  <span>QA</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/guilherme-augusto-da-silva-11a424202/">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/guisix18">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Oswaldo} alt="" />
                  <h2>Oswaldo Deco</h2>
                  <span>QA</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/oswaldo-deco-31824021b/">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/oswaldo-deco">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <li className="developer-card">
                  <img className="developer-img" src={Juan} alt="" />
                  <h2>Juan Rego</h2>
                  <span>QA</span>
                  <div className="links-holder">
                    <a href="https://www.linkedin.com/in/juanrego/">
                      <BsLinkedin size={"20px"} />
                    </a>
                    <a href="https://github.com/JuanRego">
                      <BsGithub size={"20px"} />
                    </a>
                  </div>
                </li>
              </motion.div>
            </ul>
          </motion.div>
        </section>
      </Main>
    </motion.div>
  );
};

export default AboutUs;
