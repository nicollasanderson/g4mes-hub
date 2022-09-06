import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Buttons from "../Buttons";
import { AnimatePresence, motion } from "framer-motion";
import { FormDivContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";

const UserEdit = ({ handleModal }) => {
  const { handleEditUser, user } = useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().min(4).max(18),
    plataform: yup.string(),
    img: yup.string(),
    description: yup.string(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEdit = (data) => {
    if (data.username === "") {
      delete data.username;
    }
    if (data.plataform === "") {
      delete data.plataform;
    }
    if (data.img === "") {
      delete data.img;
    }
    if (data.description === "") {
      delete data.description;
    }
    handleEditUser(data, handleModal);
  };

  return (
    <AnimatePresence>
      <FormDivContainer>
        <motion.div
          initial={{ marginTop: "500px" }}
          animate={{ marginTop: "0px" }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit(handleEdit)}>
            <Input
              name="username"
              register={register}
              label="Username"
              placeholder="Altere seu nome de usuário"
              error={errors.username?.message}
              type="text"
              defaultValue={user.username}
            />
            <Input
              name="plataform"
              register={register}
              label="Plataforma favorita"
              placeholder="Altere sua plataforma favorita"
              error={errors.plataform?.message}
              type="text"
            />
            <Input
              name="img"
              register={register}
              label="Foto de perfil"
              placeholder="Altere a URL da sua imagem de perfil"
              error={errors.img?.message}
              type="text"
            />
            <Input
              name="description"
              register={register}
              label="Descrição"
              placeholder="Altere a sua descrição"
              error={errors.description?.message}
              type="text"
            />
            <Input
              name="password"
              register={register}
              label="Insira a sua senha"
              icon
              placeholder="Insira a sua senha"
              type="password"
              error={errors.password?.message}
            />
            <div>
              <Buttons type="submit">Alterar</Buttons>
              <Buttons onClick={handleModal}>Cancelar</Buttons>
            </div>
          </form>
        </motion.div>
      </FormDivContainer>
    </AnimatePresence>
  );
};

export default UserEdit;
