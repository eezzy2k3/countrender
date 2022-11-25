import { Outlet } from "react-router-dom";
import background from "../assets/images/bg.jpg";
import Footer from "./Footer";

import "./MainLayout.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MainLayout = () => {
  return (
    <div
      className="main__container "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Outlet />
    </div>
  );
};

export default MainLayout;
