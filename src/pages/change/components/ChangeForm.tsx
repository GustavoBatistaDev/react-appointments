import { Label } from "../../../components/authentication/Label";
import { changePassword } from "../../../services/authentication/api.services";
import { myToast } from "../../../utils/toasts";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import "../../../styles/authentication.css";

import { Link, useNavigate, useParams } from "react-router-dom";

type Inputs = {
  password: string;
  passwordConfirm: string;
};

export type ParamsProps = {
  params: {
    token: string;
  };
};

const ChangeForm: React.FC = () => {
  const navigate = useNavigate();

  const { token } = useParams();

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

  const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await changePassword(
      data.password,
      data.passwordConfirm,
      token as string
    );

    if (result.response?.data.message) {
      myToast(true, result.response?.data.message + ".");
      return;
    }
    myToast(false, "Senha alterada com sucesso.");

    reset();

    navigate("/entrar");
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Label>Senha</Label>
      <div className="container-input">
        <i
          onClick={handleVisible}
          className={`fa-solid fa-${isVisible ? "un" : ""}lock branding`}
        ></i>
        <input
          {...register("password", {
            required: "Senha é requerida.",
            minLength: {
              value: 8,
              message: "A senha deve ter pelo menos 8 caracteres.",
            },
          })}
          placeholder="Senha"
          name="password"
          type={`${isVisible ? "text" : "password"}`}
          className="input"
        />
      </div>
      {errors.password && <p className="error">Preencha corretamente.</p>}
      <Label>Senha novamente</Label>
      <div className="container-input">
        <i
          onClick={handleVisible}
          className={`fa-solid fa-${isVisible ? "un" : ""}lock branding`}
        ></i>
        <input
          {...register("passwordConfirm", {
            required: "Senha é requerida.",
            minLength: {
              value: 8,
              message: "A senha deve ter pelo menos 8 caracteres.",
            },
          })}
          placeholder="Senha novamente"
          name="passwordConfirm"
          type={`${isVisible ? "text" : "password"}`}
          className="input"
        />
      </div>
      {errors.passwordConfirm && (
        <p className="error">Preencha corretamente.</p>
      )}

      <Link
        to="/entrar"
        style={{ float: "right", color: "#b7b7b7", margin: "8px 0" }}
      >
        {" "}
        Já possui conta? Clique aqui
      </Link>
      <br />
      <input className="input-submit" type="submit" value="ALTERAR" />
    </form>
  );
};

export default ChangeForm;
