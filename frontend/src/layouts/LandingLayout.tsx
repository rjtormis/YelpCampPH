import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Outlet, useLocation, Link } from "react-router-dom";
function LandingLayout() {
  const location = useLocation();
  const signInOrsignUp = location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <div className="w-screen h-screen p-10">
      <header className="flex  items-center">
        <div className="flex items-center">
          <img src={logo} alt="YelpCampPH" className="h-[60px] w-[60px]" />
          <p className="text-xl font-semibold">YelpCamp PH</p>
        </div>
        <ul className="flex gap-4 ml-8 font-bold">
          <li>
            {" "}
            <Link to="/">
              <Button variant="link">Home</Button>
            </Link>
          </li>
          <li>
            <Button variant="link">Campsites</Button>
          </li>
          <li>
            {" "}
            <Button variant="link">Contact us</Button>
          </li>
        </ul>
        {signInOrsignUp ? null : (
          <Link to="/sign-in" className="ml-auto">
            <Button variant="outline">Sign in</Button>
          </Link>
        )}
      </header>
      <Outlet />
      {signInOrsignUp ? null : (
        <footer className="w-full  bg-primary rounded-tl-xl rounded-tr-lg">
          <q>!</q>
        </footer>
      )}
    </div>
  );
}

export default LandingLayout;
