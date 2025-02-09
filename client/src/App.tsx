import { Navigate, Route, Routes } from "react-router";
import Error404 from "./pages/_404";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/dashboard/explore/Explore";
import Create from "./pages/dashboard/create/Create";
import Account from "./pages/dashboard/account/Account";
import Support from "./pages/dashboard/help/Support";
import Settings from "./pages/dashboard/settings/Settings";
import Profile from "./pages/dashboard/profile/Profile";
import Faucet from "./pages/dashboard/faucet/Faucet";
import FundDetail from "./pages/dashboard/fund/FundDetail";
import FundBuy from "./pages/dashboard/fund/FundBuy";
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
        <Route path="explore" element={<Explore />} />
        <Route path="create" element={<Create />} />
        <Route path="account" element={<Account />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="faucet" element={<Faucet />} />
        <Route path="explore/:fundId" element={<FundDetail />} />
        <Route path="funds/buy/:fundId" element={<FundBuy />} />
      </Route>

      {/* Other Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Error404 />} />
    </Routes >
  )
}