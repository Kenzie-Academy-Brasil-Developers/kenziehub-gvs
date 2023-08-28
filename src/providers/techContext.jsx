import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({})
export function TechProvider({children}){
const [visibleEdit, setVisibleEdit] = useState(false)
const [techList, setTechList] = useState([])
const [visible, setVisible] = useState(false)
const [edited, setEdited] = useState(null)
const token = localStorage.getItem('@TOKEN')
const navigate = useNavigate()
console.log(edited);
    useEffect(() => {
        async function getTech(){
            try {
                const {data} = await api.get("/profile", {
                    headers:{
                        Authorization : `Bearer ${token} ` 
                    }
                })
                setTechList(data.techs)
            } catch (error) {
                console.log(error);
            }
        }
        getTech()
    },[])
    async function postTech (formData){
        try {
            //const newTech = {title: user.title, status: user.status , ...formData}
            const {data} = await api.post("/users/techs", formData, {
                headers: {
                    Authorization : `Bearer ${token} `
                }
            })
            setTechList([...techList, data])
            toast.success("Technologia criada com sucesso!")
            setVisible(false)
            navigate("/dashboard")

        } catch (error) {
            console.log(error);
            
        }
    }
    async function deleteTech (deleteId){
        try {
            await api.delete(`/users/techs/${deleteId}`, {
                headers:{
                    Authorization : `Bearer ${token}` 
                }
            })
            const newTechList = techList.filter(tech =>tech.id !== deleteId)
            setTechList(newTechList)
            toast.success("Technologia excluida com sucesso!")
            navigate("/dashboard")

        } catch (error) {
            console.log(error);
        }

    }
    async function editTech (formData){
        
        try {
            const {data} = await api.put(`/users/techs/${edited.id}`, formData,{
                headers: {
                    Authorization: `Bearer ${token} ` 
                }
            })
            const newTechList = techList.map(tech => {
                if(tech.id === edited.id){
                    return data
                }else{
                    return tech
                }
            } )
            setTechList(newTechList)
            setVisibleEdit(false)
            toast.success("Tecnologia editada com sucesso!")
            navigate("/dashboard")
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <TechContext.Provider value ={{techList, postTech, visible, setVisible, edited, setEdited, deleteTech, editTech, setVisibleEdit, visibleEdit}}>
            {children}
        </TechContext.Provider>
    )
}