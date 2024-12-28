import { LandingPage } from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthenticationPage } from "./pages/auth";
import { ReferalsPage } from "./pages/friends";
import { BuyPage } from "./pages/buy";
import { EarnPage } from "./pages/earn";
import { ProfilePage } from "./pages/profile";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/referals" element={<ReferalsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
