import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Landing from "@/pages/Landing";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
import Home from "@/pages/Dashboard/Home";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";
import LandingLayout from "./layouts/LandingLayout";
import Listing from "./pages/Dashboard/Listing";
import { Inbox } from "lucide-react";
import Profile from "./pages/Dashboard/Profile";
import Setting from "./pages/Dashboard/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LandingLayout />}>
        <Route index element={<Landing />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard/listing" element={<Listing />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
