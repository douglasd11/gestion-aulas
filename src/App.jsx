import "./App.css";
import HorarioB from "./pages/HorarioB";
import HorarioS from "./pages/HorarioS";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReservaA from "./pages/ReservaA";
import ReservaU from "./pages/ReservaU";
import DispositivosAdmin from "./pages/Dispositivos";

const App = () => {
  return (
    <>
      <HorarioB></HorarioB>
      <HorarioS></HorarioS>
      <Login></Login>
      <Register></Register>
      <ReservaU></ReservaU>
      <ReservaA></ReservaA>
      <DispositivosAdmin></DispositivosAdmin>
    </>
  );
};

export default App;
