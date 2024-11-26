import "./App.css";
import HorarioB from "./pages/HorarioB";
import HorarioS from "./pages/HorarioS";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReservaA from "./pages/ReservaA";
import ReservaU from "./pages/ReservaU";
import DispositivosAdmin from "./pages/Dispositivos";

import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Menu from "./components/menu";


const App = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />

                <div className="flex flex-1">
                    <Menu />

                    <Inicio></Inicio>
                </div>
            </div>

      {/* <HorarioB></HorarioB>
      <HorarioS></HorarioS>
      <Login></Login>
      <Register></Register>
      <ReservaU></ReservaU>
      <ReservaA></ReservaA>
      <DispositivosAdmin></DispositivosAdmin> */}
      </>
    );
};

export default App;
