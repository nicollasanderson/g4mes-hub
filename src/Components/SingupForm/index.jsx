import Input from "../Input";
import { Background, FormDivContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Buttons from "../Buttons";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useHistory } from "react-router-dom";

const SingupForm = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username obrigatório")
      .min(4, "Mínimo de 4 caracteres")
      .max(18, "Máximo de 18 caracteres"),
    plataform: yup.string().required("Plataforma obrigatória"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digitos")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        "Necessário números e pelo menos 1 letra minúscula e maiúscula"
      ),
    confirm_password: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const RegisterContext = () => useContext(UserContext);
  const { handleRegister } = RegisterContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleFormSubmit = (data) => {
    delete data.confirm_password;
    handleRegister(data);
  };

  return (
    <>
      <Background />
      <FormDivContainer>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            label="Username"
            register={register}
            name="username"
            error={errors.username?.message}
            placeholder="Seu apelido show!"
          />
          <Input
            label="Sua plataforma favorita"
            register={register}
            name="plataform"
            error={errors.plataform?.message}
            placeholder="Melhor plataforma"
          />
          <Input
            label="E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
            placeholder="Insira o seu email"
          />
          <Input
            label="Senha"
            register={register}
            name="password"
            type="password"
            icon
            error={errors.password?.message}
            placeholder="Insira sua senha"
          />
          <Input
            label="Confirma Senha"
            register={register}
            name="confirm_password"
            type="password"
            icon
            error={errors.confirm_password?.message}
            placeholder="Confirme a sua senha"
          />
          <Buttons type="submit">Cadastrar</Buttons>
        </form>
      </FormDivContainer>
    </>
  );
};

export default SingupForm;
