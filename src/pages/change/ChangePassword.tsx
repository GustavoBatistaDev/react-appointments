import { AuthTitle } from "../../components/authentication/AuthTitle";
import { Logo } from "../../components/authentication/Logo";
import ChangeForm from "./components/ChangeForm";

const ChangePassword = () => {
  return (
    <main>
      <section className="container-auth">
        <div className="container-form">
          <div>
            <Logo />
            <AuthTitle>
              <>
                Forneça as senhas para <br />
                que sejam alteradas
              </>
            </AuthTitle>

            <ChangeForm />
          </div>
        </div>
        <div className="container-img-auth">
          <img src="/Group 5311.svg" alt="" width={488} height={680} />
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;
