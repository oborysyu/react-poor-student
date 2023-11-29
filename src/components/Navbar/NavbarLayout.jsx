import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function NavbarLayout() {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  return isUserLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}
