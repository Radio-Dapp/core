import { Navigate, Route, Routes } from "react-router";
import Error404 from "./pages/_404";
import Landing from "./pages/landing/Landing";
import Home from "./pages/dashboard/home/Home";

export default function App() {
  return (
    <Routes>
      {/* // Redirects */}
      <Route path="auth" element={<Navigate to="/auth/login" />} />
      <Route path="login" element={<Navigate to="/auth/login" />} />
      <Route path="dashboard" element={<Navigate to="/dashboard/home" />} />
      <Route path="home" element={<Navigate to="/dashboard/home" />} />

      {/* Dashboard Routes */}
      <Route path="dashboard">
        <Route path="home" element={<Home />} />
      </Route>

      {/* Other Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error404 />} />
    </Routes >
  )
}