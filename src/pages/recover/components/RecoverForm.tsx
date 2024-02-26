import { Label } from "../../../components/authentication/Label";

import { myToast } from "../../../utils/toasts";

import { SubmitHandler, useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { recoverPassword } from "../../../services/authentication/api.services";

type Inputs = {
  email: string;
};

const RecoverForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await recoverPassword(data.email);
    if (result.response?.data.message) {
      myToast(true, result.response?.data.message + ".");
      return;
    }
    myToast(false, "Verifique seu email.");
    reset();
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
        />
      </div>
      {errors.email && <p className="error">Preencha corretamente.</p>}

      <Link
        to="/entrar"
        style={{ float: "right", color: "#b7b7b7", margin: "8px 0" }}
      >
        {" "}
        Já possui conta? Clique aqui
      </Link>
      <br />
      <input className="input-submit" type="submit" value="RECUPERAR" />
    </form>
  );
};

export default RecoverForm;
