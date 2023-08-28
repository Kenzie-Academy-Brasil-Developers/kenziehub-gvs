import style from "./style.module.scss";
export function InputTech({ label, type, register, placeholder, disabled }) {
  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        disabled = {disabled}
      />
    </div>
  );
}
 