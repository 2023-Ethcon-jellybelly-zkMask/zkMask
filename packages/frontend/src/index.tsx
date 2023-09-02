import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Header from "./pages/Header";
import Start from "./pages/Start";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import { useContext, useEffect } from "react";
import User from "./contexts/User";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Start />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="front" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="voting" element={<Voting />} />R
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const AppLayout = () => {
  const navigate = useNavigate();
  const userContext = useContext(User);

  useEffect(() => {
    console.log(userContext.hasSignedUp);

    if (userContext.hasSignedUp) {
      navigate("/login"); // 로그인 페이지로 이동
      return;
    }

    navigate("/front"); // Home으로 이동
  }, [userContext.hasSignedUp, navigate]);

  return (
    <main className="mx-auto max-w-[313px] my-20">
      <Outlet />
    </main>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
