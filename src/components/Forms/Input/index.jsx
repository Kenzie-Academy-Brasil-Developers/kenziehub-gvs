import style from "./style.module.scss";
export function Input({ error, label, type, register, disabled }) {
  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <input
        type={type}
        {...register}
        disabled={disabled}
        placeholder="Digite seu email"
      />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
}
