import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { InputPass } from "../InputPass";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import style from "./style.module.scss";

export function LoginForm({ setUser }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  async function userLogin(formData) {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      toast.success("Login efetuado com sucesso!");
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response?.data === "Incorrect email / password combination") {
        toast.error("Email ou senha incorreto");
      }
    } finally {
      setLoading(false);
    }
  }

  function submit(formData) {
    userLogin(formData);
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
      />
      <InputPass
        label="Senha"
        register={register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
      />
      <button className={style.button}>Entrar</button>
      <div className={style.divRegister}>
        <p className={style.p}>Ainda nao possui uma conta?</p>
        <Link className={style.link} to="/register">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
