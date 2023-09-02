import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Start from "./pages/Start";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import Home from "./pages/Home";
import Voting from "./pages/Voting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Start />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="front" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="voting" element={<Voting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const AppLayout = () => {
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
