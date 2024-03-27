import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div>Nav bar</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
