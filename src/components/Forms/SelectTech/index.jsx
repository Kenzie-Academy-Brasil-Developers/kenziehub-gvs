import style from "./style.module.scss";

export function SelectTech({ register, label, disabled }) {
  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <select {...register} disabled={disabled}>
        <option value="Iniciante">
            Iniciante 
        </option>
        <option value="Intermediário">
            Intermediário 
        </option>
        <option value="Avançado">
            Avançado
        </option>
      </select>
    </div>
  );
}