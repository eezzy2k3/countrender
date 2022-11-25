import { Outlet } from "react-router-dom";

import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div className="main__container">
      {" "}
      <Outlet />
    </div>
  );
};

export default MainLayout;
