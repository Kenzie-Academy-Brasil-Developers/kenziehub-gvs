import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema.js";
import { InputPass } from "../InputPass";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { Select } from "../Select";
import { useState } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();
  async function userRegister(formData) {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Conta cadastrada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
      if (error.response?.data === "Email already exists") {
        toast.error("Ops, algo deu errado!");
      }
    } finally {
      setLoading(false);
    }
  }
  function submit(formData) {
    userRegister(formData);
    console.log(formData);
  }
  return (
    <form className={style.form} onSubmit={handleSubmit(submit)}>
      <div className={style.title}>
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
      </div>
      <Input
        label="Nome"
        type="text"
        register={register("name")}
        placeholder="Digite seu nome"
        error={errors.name}
        disabled={loading}
      />
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
        disabled={loading}
      />
      <InputPass
        label="Confirmar senha"
        register={register("confirmPassword")}
        error={errors.password}
        placeholder="Digite novamente sua senha"
        disabled={loading}
      />
      <Input
        label="Bio"
        register={register("bio")}
        error={errors.bio}
        placeholder="Fale sobre voce"
        disabled={loading}
      />
      <Input
        label="Contato"
        register={register("contact")}
        error={errors.contact}
        placeholder="Opcao de contato"
        disabled={loading}
      />
      <Select
        label="Selecionar modulo"
        register={register("course_module")}
        disabled={loading}
      />
      <button className={style.button} disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
}
