import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import CoursesView from "./views/CoursesView";
import ContactsView from "./views/ContactsView";
import DashboardView from "./views/DashboardView";
import RepertoireView from "./views/RepertoireView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoursesView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/repertoire" element={<RepertoireView />} />
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;
