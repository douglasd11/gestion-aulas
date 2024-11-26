import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";


const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-1">
          <Menu />

          <Outlet />
        </div>
      </div>

    </>
  );
};

export default App;
