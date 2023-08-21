import loadingIcon from "../../assets/spinner.svg"
import style from "./style.module.scss"
export function Loading (){
     return(
        <div className={style.loading}>
            <img src={loadingIcon} alt="loading-icon" />
        </div>
     )
}