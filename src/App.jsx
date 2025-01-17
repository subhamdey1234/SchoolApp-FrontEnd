import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* LEFT SIDENAV  */}
      <div className="w-[20%] sm:w-[16%] md:w-[12%] lg:w-[10%]  ">
        <Sidebar/>
      </div>

      {/* Right Side Navigation */}
      <div className=" w-[80%]  sm:w-[84%] md:w-[88%] lg:w-[90%] bg-slate-500 relative">
        <Navbar/>
        <Outlet/>


        
        <Footer/>
      </div>
      
    </div>
  );
};

export default App;
