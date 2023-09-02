import { Outlet } from "react-router-dom";

export default () => {
  return (
    <>
      <div className="header"></div>

      <Outlet />
    </>
  );
};
