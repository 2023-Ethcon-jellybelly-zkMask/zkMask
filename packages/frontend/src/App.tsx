import { RecoilRoot } from "recoil";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Receivevotes from "./pages/Receivevotes";
import Voting from "./pages/Voting";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/recvotes" element={<Receivevotes />} />
              <Route path="/voting" element={<Voting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

const AppLayout = () => {
  return (
    <main className="mx-auto max-w-[313px]">
      <Outlet />
    </main>
  );
};

export default App;
