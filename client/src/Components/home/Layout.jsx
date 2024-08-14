import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DataFetcher from "./DataFetcher";


export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Navbar onMenuClick={handleSidebarOpen} />
      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
      <DataFetcher/>

    </div>
  );
}
