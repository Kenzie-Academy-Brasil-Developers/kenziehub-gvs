import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})
export function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [ loading, setLoading] = useState(false)
    const pathname = window.location.pathname


    useEffect(() => {
      const token = localStorage.getItem("@TOKEN")
      const userId = localStorage.getItem("@USERID")
      
      async function getUser(){
        try {
          setLoading(true)
          const { data } = await api.get(`/users/${userId}`, {
            headers:{
              Authorization : `Bearer ${token}`
            }
          });
          setUser(data)
          navigate(pathname)
          
        } catch (error) {
          console.log(error);
        }finally{
          setLoading(false);
        }
      }
      
        if(token && userId){
          getUser()
        }
      
      
    },[])
    function userLogout() {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
      }

      async function userLogin(formData, setLoading) {
        try {
          setLoading(true);
          const { data } = await api.post("/sessions", formData);
          toast.success("Login efetuado com sucesso!");
          setUser(data.user);
          localStorage.setItem("@USERID", data.user.id);
          localStorage.setItem("@TOKEN", data.token);
          navigate("/dashboard");
        } catch (error) {
          if (error.response?.data === "Incorrect email / password combination") {
            toast.error("Email ou senha incorreto");
          }
        } finally {
          setLoading(false);
        }
      }

      async function userRegister(formData, setLoading) {
        try {
          setLoading(true);
          await api.post("/users", formData);
          toast.success("Conta cadastrada com sucesso");
          navigate("/");
        } catch (error) {
          toast.error("Ops, algo deu errado!");
          if (error.response?.data === "Email already exists") {
            toast.error("Ops, algo deu errado!");
          }
        } finally {
          setLoading(false);
        }
      }

    return(
        <UserContext.Provider value={{ loading ,user, setUser, userLogout, userLogin, navigate, userRegister}}>
            {children}
        </UserContext.Provider>
    )
    
}