import { Label } from "../../../components/authentication/Label";
import { loginInputs } from "../../../types/loginInputs";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "../../../hooks/authentication/useAuth";

const SigninForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginInputs>();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFormSubmit: SubmitHandler<loginInputs> = async (
    data: loginInputs
  ) => {
    const result = await login(data);

    if (!result) {
      navigate("/entrar");
      return;
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Label>E-mail</Label>
      <div className="container-input">
        <i className="fa-solid fa-envelope branding"></i>
        <input
          {...register("email", {
            required: "Email é requerido.",
            pattern: {
              value: /^.+@.+\..+$/,
              message: "Email inválido.",
            },
          })}
          placeholder="Email"
          type="email"
          name="email"
          className="input"
        />
      </div>
      {errors.email && <p className="error">Preencha corretamente.</p>}
      <Label>Senha</Label>
      <div className="container-input">
        <i
          onClick={handleVisible}
          className={`fa-solid fa-${isVisible ? "un" : ""}lock branding`}
        ></i>
        <input
          {...register("senha", {
            required: "Senha é requerida.",
            minLength: {
              value: 8,
              message: "A senha deve ter pelo menos 8 caracteres.",
            },
          })}
          placeholder="Senha"
          type={`${isVisible ? "text" : "password"}`}
          className="input"
          name="senha"
        />
      </div>
      {errors.senha && <p className="error">Preencha corretamente.</p>}
      <Link
        to="/recuperar"
        style={{ float: "right", color: "#b7b7b7", margin: "8px 0" }}
      >
        Esqueceu sua senha?
      </Link>
      <br />
      <input className="input-submit" type="submit" value="ENTRAR" />
      <div className="container-link">
        <span className="line"></span>
        <span className="text">Ainda não tem uma conta?</span>
        <span className="line"></span>
      </div>
      <Link to="/registrar">
        <button className="signup-button" type="button">
          REGISTRAR
        </button>
      </Link>
    </form>
  );
};

export default SigninForm;
