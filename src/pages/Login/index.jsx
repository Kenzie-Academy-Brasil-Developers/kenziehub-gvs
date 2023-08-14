import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import styleGrid from "../../styles/pageContainer.module.scss";
export function Login({ setUser }) {
  return (
    <main className={styleGrid.pageBox}>
      <div className="container sm">
        <div className={style.divContent}>
          <figure className={style.img}>
            <img src={logo} alt="Logo" />
          </figure>
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </main>
  );
}
