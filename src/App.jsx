import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import CoursesView from "./views/CoursesView";
import ContactsView from "./views/ContactsView";
import DashboardView from "./views/DashboardView";
import RepertoireView from "./views/RepertoireView";
import AddView from "./views/AddView";
import AddObjectView from "./views/AddObjectView";
import CourseDetailView from "./views/CourseDetailView";
import { useLocation } from "react-router-dom";

function App() {
  const url = useLocation();
  let selecttabnav = url.pathname.split("/")[1];
  //console.log("url: ", url);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<CoursesView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/contacts/:id" element={<ContactsView />} />
        <Route path="/repertoire" element={<RepertoireView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/add" element={<AddView />} />
        <Route path="/add/:type" element={<AddObjectView />} />
        <Route path="/course/:id" element={<CourseDetailView />} />
      </Routes>
      <BottomNav selected={selecttabnav} />
    </div>
  );
}

export default App;
