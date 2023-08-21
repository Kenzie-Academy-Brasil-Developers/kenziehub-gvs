import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.scss";
import { useContext } from "react";
import { UserContext } from "./providers/userContext";
import { Loading } from "./components/Loading";
function App() {
  const { loading } = useContext(UserContext);
  
  if(loading){
    return(<Loading/>)
  }
  return (  
    <>
      <RoutesMain/>
      <ToastContainer autoClose={2 * 1000} />
    </>
  );
}

export default App;
