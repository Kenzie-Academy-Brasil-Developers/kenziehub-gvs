import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import logo from "../../assets/logo.svg";
import styleBox from "../../styles/pageContainer.module.scss";
import style from "./style.module.scss";
export function Register() {
  return (
    <main className={styleBox.pageBox}>
      <div className="container sm">
        <div className={style.divContent}>
          <div className={style.headerRegister}>
            <figure>
              <img src={logo} alt="Logo" />
            </figure>
            <Link className={style.link} to="/">
              Voltar
            </Link>
          </div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
