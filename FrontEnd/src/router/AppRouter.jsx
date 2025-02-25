import { useEffect } from "react"

import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/Routes/AuthRoutes"
import { AdminRoutes } from "../components/admin/Routes/AdminRoutes"
import { PageRoutes } from "../CDTIdeas/routes/PageRoutes"
import { loadUser } from '../actions/userActions'
import store from '../store'
export const AppRouter = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Aplicativo */}
      <Route path="/*" element={<PageRoutes />} />

      <Route />

    </Routes>

  )
}
