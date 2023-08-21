import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPass } from "../InputPass";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import style from "./style.module.scss";
import { UserContext } from "../../../providers/userContext";

export function LoginForm() {
  const {userLogin} = useContext(UserContext)
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  function submit(formData) {
    userLogin(formData, setLoading);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(submit)}>
      <h1 className={style.title}>Login</h1>
      <Input
        label="Email"
        type="email"
        register={register("email")}
        placeholder="Digite seu email"
        error={errors.email}
        disabled={loading}
      />
      <InputPass
        label="Senha"
        register={register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
        disabled={loading}

      />
      <button className={style.button}>
        {loading? "Carregando...": "Entrar"}
        </button>
      <div className={style.divRegister}>
        <p className={style.p}>Ainda nao possui uma conta?</p>
        <Link className={style.link} to="/register" disabled={loading}>
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
