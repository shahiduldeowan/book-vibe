import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-12 md:h-16 xl:h-20 bg-base-100 mb-6">
        <Navbar />
      </div>
      <Outlet />
      <ToastContainer position="top-right" closeOnClick />
    </>
  );
};

export default MainLayout;
