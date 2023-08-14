import { RoutesMain } from "./routes";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.scss";
function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={2 * 1000} />
    </>
  );
}

export default App;
