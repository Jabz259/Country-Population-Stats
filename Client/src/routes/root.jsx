import NavBar from '../components/navbar.jsx'
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  );
}