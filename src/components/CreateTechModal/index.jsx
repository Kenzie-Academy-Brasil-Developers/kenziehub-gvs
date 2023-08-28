import style from "./style.module.scss"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TechContext } from "../../providers/techContext";
import { TechFormModal } from "../Forms/TechFormModal";


export function CreateTechModal(){
    const navigate = useNavigate()
    const {setVisible, visible} = useContext(TechContext)
    return(
        <div className={style.dialog} role="dialog">
            <div className={style.modal}>
                <div className={style.headerModal}>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => setVisible(false)}>X</button>    
                </div>   
                <div className={style.mainModal}>
                    <TechFormModal/>
                </div>

            </div>
        </div>
    )
}