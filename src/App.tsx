import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./IndexPage";
import { ProgramsPage } from "./ProgramsPage";
import "./index.css";
import { ClassNavbar } from "./components/ClassNavbar"

export default function App() {
  return (
    <BrowserRouter>
      <ClassNavbar />
      <Routes>
        <Route element={<ProgramsPage />} path="/" />
        <Route element={<IndexPage />} path="/classes" />
      </Routes>
    </BrowserRouter>
  );
}
