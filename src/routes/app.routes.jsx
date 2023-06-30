import { Routes, Route } from "react-router-dom";

import { Edit } from "../pages/Edit"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Details } from "../pages/Details"

//Rotas internas
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New />} />
    </Routes>
  )
}