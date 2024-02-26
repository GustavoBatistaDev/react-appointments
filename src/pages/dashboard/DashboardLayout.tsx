import { useState } from "react";
import { Chat } from "./components/Chat";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

import "../../styles/authentication.css";

const DashboardLayout = () => {
  const [sideOpen, setSideOpen] = useState(true);

  const handleSideOpen = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <>
      <main id="dashboard">
        <section className={`container-sidebar ${sideOpen ? "" : "closed"}`}>
          <Sidebar />
          <i className="fa-solid fa-right-from-bracket logout icon-color"></i>
          <i
            onClick={handleSideOpen}
            className={`fa-solid fa-arrow-${
              sideOpen ? "left" : "right"
            } icon-color handleOpen`}
          ></i>
        </section>
        <section className="container-main">
          <Navbar handleSideOpen={handleSideOpen} />
        </section>
        <Chat />
      </main>
    </>
  );
};

export default DashboardLayout;
