import { useEffect } from "react";
import { Link } from "react-router-dom";
import { activateAccount } from "../../services/authentication/api.services";
import { useSearchParams } from "react-router-dom";

export const Activated = () => {
  const [searchParams] = useSearchParams();

  const url = `verify-email/?token=${searchParams?.get("token")}`;
  console.log(url);

  useEffect(() => {
    const activate = async () => {
      await activateAccount(url);
    };

    activate();
  }, [url]);

  return (
    <div className="card">
      <h1 className="title-card">Email verificado.</h1>
      <p className="para-card">Clique no botão abaixo para fazer login.</p>
      <Link to="/entrar">
        <button className="login">Login</button>
      </Link>
    </div>
  );
};
