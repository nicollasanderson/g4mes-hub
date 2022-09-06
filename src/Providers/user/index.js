import app from "../../Services/api.js";
import { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userImg from "../../images/userImg.svg";
import { type } from "@testing-library/user-event/dist/type";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@GamesHub user")) || false
  );
  const [userPosts, setUserPosts] = useState([]);
  const [userGameLikes, setUserGameLikes] = useState([]);

  useEffect(() => {
    if (user._id !== undefined) {
      getGamesLikes();
    }
  }, [user]);

  const history = useHistory();

  const listPosts = (slug) => {
    app
      .get(`/comments/game/${slug}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (email, password) => {
    app
      .post("users/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "@GamesHub Token",
          JSON.stringify(response.data.accessToken)
        );

        localStorage.setItem(
          "@GamesHub user",
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);

        toast.success("Usuário logado com sucesso!", { theme: "dark" });

        history.push("/");
      })
      .catch(() => toast.error("Email ou senha inválidos", { theme: "dark" }));
  };

  const handleRegister = ({ username, email, password, plataform }) => {
    app
      .post(
        "users/register",
        {
          username,
          email,
          password,
          plataform,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("Conta criada com sucesso!", { theme: "dark" });
        history.push("/login");
      })
      .catch((_) => toast.error("Usuário já cadastrado", { theme: "dark" }));
  };

  const handleEditUser = (
    {
      username = user.username,
      plataform = user.plataform,
      img = user.img,
      description = user.description,
      password,
      email = user.email,
    },
    handleModal
  ) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    const waintingToast = toast.loading("Atualizando o usuário...", {
      theme: "dark",
    });
    app
      .put(
        `/users/${user._id}`,
        { username, plataform, img, description, email, password },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        app.get(`/users/${user._id}`).then((response) => {
          setUser(response.data);
          localStorage.setItem("@GamesHub user", JSON.stringify(response.data));
          toast.update(waintingToast, {
            render: "Informações de usuário alteradas com sucesso!",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          handleModal();
        });
      })
      .catch((_) =>
        toast.update(waintingToast, {
          render: "Verifique a sua senha e tente novamente",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        })
      );
  };

  const listUserPosts = (id = user._id) => {
    app
      .get(`/comments/user/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const handlePost = (text, gameName, gameSlug, comments, setComments) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    app
      .post(
        "/comments",
        {
          text,
          gameName,
          gameSlug,
        },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Comentário postado com sucesso!", { theme: "dark" });
        setComments([...comments, response.data]);
        document.getElementById("textAreaValue").value = "";
      })
      .catch((_) =>
        toast.error("Ops! Algo deu errado, tente novamente.", { theme: "dark" })
      );
  };

  const handleLogOut = () => {
    localStorage.removeItem("@GamesHub Token");
    localStorage.removeItem("@GamesHub user");
    toast(`Até mais, ${user.username}! 👋`, { theme: "dark" });
    setUser(false);
    history.push("/");
  };

  const getGamesLikes = () => {
    app.get(`/likes/user/${user._id}`).then((response) => {
      setUserGameLikes(response.data.likedGames);
    });
  };

  const handleGameLike = (game) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    const likeToast = toast.loading("Atualizando...", { theme: "dark" });
    app
      .post(
        `/likes`,
        {
          slug: game.slug,
          gameLiked: game,
        },
        {
          headers: {
            "auth-token": `${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.slug) {
          getGamesLikes();
          toast.update(likeToast, {
            render: `Você curtiu ${game.name}`,
            type: "success",
            autoClose: 5000,
            closeButton: true,
            closeOnClick: true,
            isLoading: false,
          });
        } else {
          getGamesLikes();
          toast.update(likeToast, {
            render: `Você descurtiu ${game.name}`,
            type: "success",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        }
      })
      .catch((err) => {
        if (user) {
          toast.update(likeToast, {
            render: "Algo deu errado, tente novamente.",
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        } else {
          toast.update(likeToast, {
            render: "Você precisa estar logado para curtir um jogo",
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        }
      });
  };

  const handleRemoveComment = (id,comments,setFilteredComments) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    const remove = toast.loading("Atualizando...", { theme: "dark" });
    app
      .delete(`/comments/${id}`, {
        headers: {
          "auth-token": `${token}`,
        },
      })
      .then((response) => {
        toast.update(remove, {
          render: `Comentário excluído`,
          type: "success",
          autoClose: 5000,
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
        setFilteredComments(
          comments.filter((el) => el._id !== id)
        );
      })
      .catch((error) => {
        toast.update(remove, {
          render: `Algo deu errado, tente novamente`,
          type: "error",
          autoClose: 5000,
          isLoading: false,
          closeButton: true,
          closeOnClick: true,
        });
      });
  };

  const handleLikeComment = (id) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    const like = toast.loading("Atualizando...", { theme: "dark" });
    if (user) {
      app
        .post(
          `/comments/${id}/like`,
          { userId: user._id },
          {
            headers: {
              "auth-token": `${token}`,
            },
          }
        )
        .then((response) => {
          if (response.data.liked) {
            toast.update(like, {
              render: `Você curtiu o comentário`,
              type: "success",
              autoClose: 5000,
              isLoading: false,
              closeButton: true,
              closeOnClick: true,
            });
          } else {
            toast.update(like, {
              render: `Você descurtiu o comentário`,
              type: "success",
              autoClose: 5000,
              isLoading: false,
              closeButton: true,
              closeOnClick: true,
            });
          }
        })
        .catch((err) => {
          toast.update(like, {
            render: `Algo deu errado, tente novamente`,
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        });
    } else {
      toast.update(like, {
        render: `Você precisa estar logado para curtir um comentário`,
        type: "error",
        autoClose: 5000,
        isLoading: false,
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  const handleGradeGame = (slug, grade) => {
    const token = JSON.parse(localStorage.getItem("@GamesHub Token"));
    const gradeToast = toast.loading("Atualizando...", { theme: "dark" });
    if (user) {
      app
        .post(
          "/grades",
          { slug: slug, grade: grade },
          {
            headers: {
              "auth-token": `${token}`,
            },
          }
        )
        .then((response) => {
          toast.update(gradeToast, {
            render: `Nota enviada :D`,
            type: "success",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        })
        .catch((err) => {
          toast.update(gradeToast, {
            render: `Algo deu errado, tente novamente`,
            type: "error",
            autoClose: 5000,
            isLoading: false,
            closeButton: true,
            closeOnClick: true,
          });
        });
    } else {
      toast.update(gradeToast, {
        render: `Você precisa estar logado para dar uma nota`,
        type: "error",
        autoClose: 5000,
        isLoading: false,
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userPosts,
        userGameLikes,
        setUserPosts,
        listPosts,
        listUserPosts,
        handleLogin,
        handleLogOut,
        handleRegister,
        handleEditUser,
        handlePost,
        handleRemoveComment,
        handleGameLike,
        handleLikeComment,
        handleGradeGame
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
