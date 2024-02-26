import { Label } from "../../../components/authentication/Label";

import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import "../../../styles/authentication.css";
import { createUser } from "../../../services/authentication/api.services";
import { UserDto } from "../../../types/user.dto";
import { myToast } from "../../../utils/toasts";
import { Inputs } from "../../../types/inputs";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleFormSubmit: SubmitHandler<Inputs> = async (
    data: Omit<UserDto, "id">
  ) => {
    const result = await createUser(data);

    if (result.response?.data.message) {
      myToast(true, result.response?.data.message + ".");
      return;
    }
    myToast(false, "Verifique seu email.");

    reset();

    navigate("/entrar");
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
          className="input"
          name="email"
        />
      </div>
      {errors.email && <p className="error">Preencha corretamente.</p>}
      <Label>Primeiro nome</Label>
      <div className="container-input">
        <i className="fa-solid fa-user branding"></i>
        <input
          {...register("nome", {
            required: "First name is required",
            pattern: {
              value: /^(?! +$)[a-zA-ZÀ-ú\s]+$/,
              message: "Invalid first name",
            },
            minLength: 3,
          })}
          placeholder="Nome"
          className="input"
          name="nome"
        />
      </div>
      {errors.nome && <p className="error">Preencha corretamente.</p>}
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
          name="senha"
          type={`${isVisible ? "text" : "password"}`}
          className="input"
        />
      </div>
      {errors.senha && <p className="error">Preencha corretamente.</p>}

      <Link
        to="/recuperar"
        style={{ float: "right", color: "#b7b7b7", margin: "8px 0" }}
      >
        {" "}
        Esqueceu sua senha? Clique aqui
      </Link>
      <br />
      <input className="input-submit" type="submit" value="CRIAR CONTA" />
      <div className="container-link">
        <span className="line"></span>
        <span className="text">Já possui conta?</span>
        <span className="line"></span>
      </div>
      <Link to="/entrar">
        <button className="signup-button" type="button">
          ENTRAR
        </button>
      </Link>
    </form>
  );
};

export default SignupForm;
