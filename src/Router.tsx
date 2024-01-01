import { Routes, Route, Navigate } from 'react-router-dom'
import { Clients } from './pages/Clients'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Projects } from './pages/Projects'
import { Profile } from './pages/Profile'
import { ProjectDetails } from './pages/ProjectDetails'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Route>
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  )
}
