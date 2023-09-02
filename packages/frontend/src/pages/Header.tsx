import { Outlet } from "react-router-dom";
import "./header.css";

export default () => {
  return (
    <>
      <div className="header"></div>

      <Outlet />
    </>
  );
};
