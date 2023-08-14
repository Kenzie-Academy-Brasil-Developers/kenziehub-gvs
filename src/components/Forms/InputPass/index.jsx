import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import style from "./style.module.scss";
export function InputPass({ error, label, register, disabled }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={style.inputBox}>
      <label className="label">{label}</label>
      <div className={style.divInput}>
        <input
          type={isHidden ? "password" : "text"}
          {...register}
          disabled={disabled}
          placeholder="Digite sua senha"
        />
        {error ? <p>{error.message}</p> : null}
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>
      </div>
    </div>
  );
}
