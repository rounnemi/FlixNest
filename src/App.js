import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:customerName" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
