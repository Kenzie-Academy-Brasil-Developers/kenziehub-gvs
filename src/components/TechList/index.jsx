import style from "./style.module.scss"
import { useContext } from "react"
import { MdAdd } from "react-icons/md"
import { TechContext } from "../../providers/techContext"
import { CreateTechModal } from "../CreateTechModal"
import { EditTechModal } from "../EditTechModal"
import { TechCard } from "./TechCard"
export function TechList(){
    const {techList, visible, setVisible, visibleEdit, edited} = useContext(TechContext)
    return(
        <div className={style.techContainer}>
            <div className={style.headerTech}>
                <h3 className={style.title}>Tecnologias</h3>
                <button className={style.buttonAdd} title="Add Button" onClick={() => setVisible(true)}><MdAdd size={22}/></button>
            </div>
                {visible ? <CreateTechModal/> : null}
            {techList.length > 0 ? 
                <div>
                    <ul className={style.ul}>
                        {techList?.map(tech => <TechCard key={tech.id} tech={tech}/>)}    

                    </ul>
                    {visibleEdit && edited !== null ? <EditTechModal/> : null} 
                </div>
                : null}
        </div>
    )
}