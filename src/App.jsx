import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarLayout from "./components/Navbar/NavbarLayout";
import DevPage from "./pages/DevPage/DevPage";
import InstructionsPage from "./pages/InstructionsPage/InstructionsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/dev" element={<DevPage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
