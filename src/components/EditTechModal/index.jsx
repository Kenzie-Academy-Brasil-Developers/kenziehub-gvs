import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TechContext } from "../../providers/techContext";
import { TechFormEditModal } from "../Forms/TechFormEditModal";
import style from "./style.module.scss"
export function EditTechModal(){

    const {setVisibleEdit , visibleEdit} = useContext(TechContext)
    return visibleEdit ? (
        <div className={style.dialog} role="dialog">
            <div className={style.modal}>
                <div className={style.headerModal}>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={() => {setVisibleEdit(false)}}>X</button>    
                </div>   
                <div className={style.mainModal}>
                    <TechFormEditModal/>
                </div>
            </div>
        </div>
    ) : <Navigate to="/dashboard"/>;
}