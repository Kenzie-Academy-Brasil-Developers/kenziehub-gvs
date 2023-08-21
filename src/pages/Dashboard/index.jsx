import logo from "../../assets/logo.svg";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
export function Dashboard() {
  const {user, userLogout} = useContext(UserContext)
  return (
    <main>
      <header className={style.header}>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <button className={style.button} onClick={() => userLogout()}>
          Sair
        </button>
      </header>
      <main className={style.main}>
        <div className={style.divInfo}>
          <div className={style.divInfoText}>
            <h1>Ola,{user?.name}</h1>
            <p>{user?.course_module}</p>
          </div>
        </div>
        <div className={style.mainContent}>
          <h2>Que pena! Estamos em desenvolvimento.</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </main>
  );
}
