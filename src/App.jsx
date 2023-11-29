
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import ResultPage from "./pages/ResultPage/ResultPage";
import InstructionsPage from "./pages/InstructionsPage/InstructionsPage";
import DevPage from "./pages/DevPage/DevPage";

function App() {

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/instructions" element={<InstructionsPage />} />
              <Route path="/dev" element={<DevPage/>} />
              {/* <Route path="/404" element={<PageNotFound />} /> */}
            </Route> 
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App
