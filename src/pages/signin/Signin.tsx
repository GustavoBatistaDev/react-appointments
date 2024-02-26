import { AuthTitle } from "../../components/authentication/AuthTitle";
import { Logo } from "../../components/authentication/Logo";
import "../../styles/authentication.css";
import SigninForm from "./components/SigninForm";

const Signin = () => {
  return (
    <main>
      <section className="container-auth">
        <div className="container-form">
          <div>
            <Logo />
            <AuthTitle>
              <>
                Faça o login para <br />
                acessar a plataforma
              </>
            </AuthTitle>
            <SigninForm />
          </div>
        </div>
        <div className="container-img-auth">
          <img src="/Group 5311.svg" alt="" width={488} height={680} />
        </div>
      </section>
    </main>
  );
};

export default Signin;
