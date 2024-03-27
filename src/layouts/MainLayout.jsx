import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-12 md:h-16 xl:h-20 my-6 lg:my-12">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
