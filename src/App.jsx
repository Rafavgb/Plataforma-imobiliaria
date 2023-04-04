import { Fragment } from "react";
import RouterApp from "./routes";
import Global from "./styles/Global"
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "./context/AppContext";


function App() {
  return (
 <Fragment>
  <AppContextProvider>
   <RouterApp/>
   </AppContextProvider>
  <Global/>
  <ToastContainer/>
 </Fragment>
  );
}

export default App;
