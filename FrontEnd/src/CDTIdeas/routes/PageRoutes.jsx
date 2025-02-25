import { Navigate, Route, Routes } from "react-router-dom"
import { ContactPage } from "../pages/ContactPage"
import { HomePage } from "../pages/Home/HomePage"
import { PatentsPage } from "../pages/PatentsPage"
import { ResearchersPage } from "../pages/ResearchersPage"
import { SingleProductPage } from "../pages/SingleProductPage"
import { WeArePage } from "../pages/WeArePage"
import { UserProfile } from '../pages/userProfile'
import Private from '../../components/route/ProtectedRoute'
import { UpdateProfile } from "../pages/UpdateProfile"
import { UpdatePassword } from "../pages/UpdatePassword"
import { ForgotPassword } from "../pages/forgotPassword"
import { NewPassword } from "../pages/NewPassword"

export const PageRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<PatentsPage />} />
      <Route path="/project/:id" element={<SingleProductPage />} />
      <Route path="/search/:keyword" element={<PatentsPage />} />
      <Route path="/search/*" element={<PatentsPage />} />
      <Route path="/researchers" element={<ResearchersPage />} />
      <Route path="/our-team" element={<WeArePage />} />
      <Route path="/me" element={<Private Component={UserProfile}  />} />
      <Route path="/me/update" element={<Private Component={UpdateProfile} />} />
      <Route path="/password/update" element={<Private Component={UpdatePassword} />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<NewPassword />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/*" element={<Navigate to="/" />} />

    </Routes>


  )
}
