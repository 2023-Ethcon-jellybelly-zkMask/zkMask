import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Header from "./pages/Header";
import Start from "./pages/Start";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import Home from "./pages/Home";
import Voting from "./pages/Voting";
import { useContext, useEffect, useState } from "react";
import User from "./contexts/User";
import Login from "./pages/Login";
import { observer } from "mobx-react-lite";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Start />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="front" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="voting" element={<Voting />} />R
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const AppLayout = observer(() => {
  const navigate = useNavigate();
  const userContext = useContext(User);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 로딩 완료 후 실행될 로직
    const checkSignedUp = async () => {
      await userContext.load(); // 가정: hasSignedUp을 결정하는 비동기 함수
      setIsLoading(false);
    };

    checkSignedUp();
  }, [userContext]);

  useEffect(() => {
    if (isLoading) {
      return; // 로딩 중일 때는 라우팅을 실행하지 않음
    }

    if (!userContext.hasSignedUp) {
      navigate("/front/login");
    } else {
      navigate("/front");
    }
  }, [userContext.hasSignedUp, navigate, isLoading]);

  if (isLoading) {
    return <div className="w-screen h-screen bg-custom-gradient" />;
  }

  return (
    <main className="mx-auto max-w-[313px] my-20">
      <Outlet />
    </main>
  );
});

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
