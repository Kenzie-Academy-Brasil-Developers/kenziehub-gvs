import style from "./style.module.scss";
export function Select({ register, label, disabled }) {
  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <select {...register} disabled={disabled}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </select>
    </div>
  );
}
