import { Navigate, Route, Routes } from "react-router-dom";
import DashBoardPage from '../Pages/DashBoard'
import PatentList from "../Pages/PatentsList";
import NewPatent from "../Pages/NewPatent";
import UpdatePatent from "../Pages/UpdatePatent";
import Private from "../../route/ProtectedRoute";
import UserList from "../Pages/UserList";
import UpdateUser from "../Pages/UpdateUser";
import NewUser from "../Pages/NewUser";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/patents" element={<PatentList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/new" element={<NewUser />} />
      <Route path="/patent/new" element={<NewPatent />} />
      <Route path="/patent/:id" element={<UpdatePatent />} />
      <Route path="/user/:id" element={<UpdateUser />} />

    </Routes>
  )
}
