import * as yup from "yup";
import { Link } from "react-router-dom";
import Input from "../Input";
import Buttons from "../Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Background, FormDivContainer } from "./style";

const LoginForm = () => {
  const { user, handleLogin } = useContext(UserContext);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (user) {
    history.push("/");
  }

  const submitLogin = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <>
      <Background />
      <FormDivContainer>
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit(submitLogin)}>
          <Input
            name="email"
            register={register}
            label="Email"
            placeholder="Insira o seu email"
            error={errors.email?.message}
          />
          <Input
            name="password"
            register={register}
            label="Senha"
            icon
            placeholder="Insira a sua senha"
            type="password"
            error={errors.password?.message}
          />
          <Buttons type="submit">Login</Buttons>
        </form>
        <span>
          Ainda não possui uma conta?
          <Link to="/signup">Cadastre-se</Link>
        </span>
      </FormDivContainer>
    </>
  );
};
export default LoginForm;
