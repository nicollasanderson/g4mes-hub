import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/user";
import { Desktop, Mobile, DefaultNav, LoggedNav } from "./style";
import g4HUB from "../../images/g4HUB.svg";
import userImg from "../../images/userImg.svg";
import gamesHubLogo from "../../images/gamesHubLogo.svg";
import { FaBars, FaAngleDown, FaAngleUp, FaAddressCard } from "react-icons/fa";
import { BiLogOut, BiLogInCircle } from "react-icons/bi";
import { RiFolderUserFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { MdAccountBox } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import InputHeader from "../InputHeader";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [width, setWidth] = useState("");
  const history = useHistory();
  const { user, handleLogOut } = useContext(UserContext);
  const [nameuser, setNameUser] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setImg(user.img);
  }, [user]);

  const username = user.username
    ? user.username.split(" ").length > 1
      ? user.username.split(" ")[0].length > 10
        ? user.username.split(" ")[0].slice(0, 7) + "..."
        : user.username.split(" ")[0]
      : user.username.slice(0, 7) + "..."
    : "";

  window.onresize = window.onload = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [userModal, setUserModal] = useState(false);

  const [mobileModal, setMobileModal] = useState(false);

  const handleModal = () => {
    setUserModal(!userModal);
  };

  const handleMobileModal = () => {
    setMobileModal(!mobileModal);
  };

  return (
    <>
      {width > 768 ? (
        <Desktop>
          <Link to="/">
            <figure>
              <img src={gamesHubLogo} alt="GamesHub logo" />
              <figcaption>GamesHub logo</figcaption>
            </figure>
          </Link>
          {user === false ? (
            <div className="container">
              <DefaultNav>
                <ul>
                  <li>
                    <Link to="/games">Games</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                </ul>
              </DefaultNav>
              <div className="infos">
                <InputHeader />
                <figure>
                  <img src={userImg} alt="user figure" className="user--img" />
                  <figcaption>user image</figcaption>
                </figure>
              </div>
            </div>
          ) : (
            <div className="container">
              <LoggedNav>
                <ul>
                  <li>
                    <Link to="/games">Games</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                </ul>
              </LoggedNav>
              <div className="logged-infos">
                <InputHeader />
                <figure>
                  <img
                    src={user ? img : userImg}
                    alt="user figure"
                    className="user--img"
                  />
                  <figcaption>user image</figcaption>
                </figure>
                <h3>{username}</h3>
                {userModal ? (
                  <FaAngleUp
                    className="icon"
                    size={"20px"}
                    onClick={handleModal}
                  />
                ) : (
                  <FaAngleDown
                    className="icon"
                    size={"20px"}
                    onClick={handleModal}
                  />
                )}
              </div>
              <AnimatePresence>
                {userModal && (
                  <motion.div
                    style={{
                      position: "absolute",
                      zIndex: 9000,
                      right: "0",
                      top: 0,
                    }}
                    key="modal--user--desktop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="modal--user">
                      <div onClick={() => history.push(`/profile/${user._id}`)}>
                        <h4>Meu Perfil</h4>
                        <Link to={`/profile/${user._id}`}>
                          <RiFolderUserFill size={"20px"} />
                        </Link>
                      </div>
                      <div onClick={handleLogOut}>
                        <h4>Log out</h4> <BiLogOut size={"20px"} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </Desktop>
      ) : (
        <Mobile>
          <Link to="/">
            <figure>
              <img src={g4HUB} alt="GamesHub logo" />
              <figcaption>GamesHub logo</figcaption>
            </figure>
          </Link>
          <div className="infos">
            <figure>
              <img
                src={user ? img : userImg}
                alt="user figure"
                className="user--img"
              />
              <figcaption>User image</figcaption>
            </figure>
            <FaBars
              className="hamburger"
              size={"25px"}
              onClick={handleMobileModal}
            />
          </div>
          <AnimatePresence>
            {mobileModal && (
              <motion.div
                style={{ position: "absolute" }}
                key="modal--user--mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="mobile--modal">
                  <nav>
                    {user === false ? (
                      <ul>
                        <li>
                          <InputHeader handleMobileModal={handleMobileModal} />
                        </li>
                        <li>
                          <AiFillHome size={"25px"} className="nav--icon" />
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <CgGames size={"25px"} className="nav--icon" />
                          <Link to="/games">Games</Link>
                        </li>
                        <li>
                          <BiLogInCircle size={"25px"} className="nav--icon" />
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <MdAccountBox size={"25px"} className="nav--icon" />
                          <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                          <FaAddressCard />
                          <Link to="/aboutus">About Us</Link>
                        </li>
                      </ul>
                    ) : (
                      <>
                        <div className="infos--mobile">
                          <figure>
                            <img
                              src={user ? img : userImg}
                              alt="user figure"
                              className="user--img"
                            />
                            <figcaption>user image</figcaption>
                          </figure>
                          <h3>{username}</h3>
                        </div>
                        <ul>
                          <li>
                            <InputHeader
                              handleMobileModal={handleMobileModal}
                            />
                          </li>
                          <li>
                            <AiFillHome size={"25px"} className="nav--icon" />
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <CgGames size={"25px"} className="nav--icon" />
                            <Link to="/games">Games</Link>
                          </li>
                          <li>
                            <RiFolderUserFill
                              size={"25px"}
                              className="nav--icon"
                            />
                            <Link to={`/profile/${user._id}`}>Meu Perfil</Link>
                          </li>
                          <li>
                            <FaAddressCard
                              size={"25px"}
                              className="nav--icon"
                            />
                            <Link to="/aboutus">About Us</Link>
                          </li>
                          <li>
                            <BiLogOut size={"25px"} className="nav--icon" />
                            <button
                              onClick={() => {
                                handleMobileModal();
                                handleLogOut();
                              }}
                            >
                              Log out
                            </button>
                          </li>
                        </ul>
                      </>
                    )}
                    <button onClick={handleMobileModal} className="close--btn">
                      <motion.div
                        key="modal--user--mobile--close"
                        initial={{ rotate: 180 }}
                        animate={{ rotate: 360 }}
                        exit={{ rotate: 180 }}
                        transition={{ duration: 1 }}
                      >
                        <VscChromeClose size={"40px"} className="close--icon" />
                      </motion.div>
                    </button>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Mobile>
      )}
    </>
  );
};

export default Header;
