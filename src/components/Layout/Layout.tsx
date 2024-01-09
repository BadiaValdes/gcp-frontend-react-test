import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


export default function Layout() {
  return (
    <>
      <Header/>
      <section className="main">
        <Outlet/>
      </section>
    </>
  )
}
