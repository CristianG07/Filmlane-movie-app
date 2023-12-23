import { Outlet } from "react-router-dom"
import { NavBar } from "../components"

export const Layout = () => {
  return (
    <>
      <NavBar/> 
      <Outlet/>
    </>
  )
}