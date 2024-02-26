import { AuthTitle } from "../../components/authentication/AuthTitle";

import { Logo } from "../../components/authentication/Logo";
import "../../styles/authentication.css";
import RecoverForm from "./components/RecoverForm";

const RecoverPassword = () => {
  return (
    <main>
      <section className="container-auth">
        <div className="container-form">
          <div>
            <Logo />
            <AuthTitle>
              <>
                Forneça o email para <br />
                recuperar a senha
              </>
            </AuthTitle>
            <RecoverForm />
          </div>
        </div>
        <div className="container-img-auth">
          <img src="/Group 5311.svg" alt="" width={488} height={680} />
        </div>
      </section>
    </main>
  );
};

export default RecoverPassword;
