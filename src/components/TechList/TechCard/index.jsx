import style from "./style.module.scss"
import { useContext } from "react"
import { MdEdit, MdDeleteOutline} from "react-icons/md"
import { TechContext } from "../../../providers/techContext"
import { EditTechModal } from "../../EditTechModal"
export function TechCard ({tech}){
    const { deleteTech, visibleEdit, setVisibleEdit, setEdited, edited} = useContext(TechContext)
    return(
        <li className={style.tech}>
            <p className={style.titleTech}>{tech.title}</p>
            <div className={style.infoTech}>
                <span>{tech.status}</span>
                <button className={style.buttonEdit} title="Edit button" onClick={() => {setVisibleEdit(true) , setEdited(tech)}}><MdEdit size={18}/></button>
                <button  className={style.buttonDelete} title="Delete button" onClick={() => deleteTech(tech.id)}><MdDeleteOutline size={18}/></button>
            </div>
            
        </li>
    )
}