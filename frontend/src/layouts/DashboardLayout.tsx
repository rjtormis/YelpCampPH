import logo from "@/assets/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Home, List, LogOut, Mail, Moon, Settings, SquareUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen ">
      <header className="flex  items-center">
        <div className="flex items-center">
          <img src={logo} alt="YelpCampPH" className="h-[60px] w-[60px]" />
          <p className="text-xl font-semibold">YelpCamp PH</p>
        </div>
      </header>
      <ResizablePanelGroup direction="horizontal" className="  border">
        <ResizablePanel defaultSize={12}>
          <div className="flex h-full  p-6">
            <ul className="w-full">
              <li className="w-full content-center justify-left">
                <Link to="/dashboard">
                  <Button
                    variant={location.pathname === "/dashboard" ? "default" : "ghost"}
                    className="w-full flex justify-start"
                  >
                    <Home size={18} className="mr-4" /> <p className="">Home</p>
                  </Button>
                </Link>
              </li>
              <li className=" w-full content-center justify-center">
                <Link to="/dashboard/listing">
                  <Button
                    variant={location.pathname === "/dashboard/listing" ? "default" : "ghost"}
                    className="w-full flex justify-start"
                  >
                    <List size={18} className="mr-4" />
                    <p className="">Listing</p>
                  </Button>
                </Link>
              </li>
              <li className=" w-full content-center justify-start">
                <Link to="/dashboard/inbox">
                  <Button
                    variant={location.pathname === "/dashboard/inbox" ? "default" : "ghost"}
                    className="w-full flex justify-start"
                  >
                    <Mail size={18} className="mr-4" /> <p className="">Inbox</p>
                  </Button>
                </Link>
              </li>
              <li className=" content-center justify-center">
                <Link to="/dashboard/profile">
                  <Button
                    variant={location.pathname === "/dashboard/profile" ? "default" : "ghost"}
                    className="w-full flex justify-start"
                  >
                    <SquareUser size={18} className="mr-4" /> <p className="">Profile</p>
                  </Button>
                </Link>
              </li>
              <li className=" content-center justify-center">
                <Link to="/dashboard/setting">
                  <Button
                    variant={location.pathname === "/dashboard/setting" ? "default" : "ghost"}
                    className="w-full flex justify-start"
                  >
                    <Settings size={18} className="mr-4" />
                    <p className="">Setting</p>
                  </Button>
                </Link>
              </li>

              <li className=" w-full content-center justify-center m-auto">
                <Separator className="my-4" />
                <Button variant="ghost" className="w-full flex justify-start">
                  <Moon size={18} className="mr-4" />
                  <p className="">Theme</p>
                </Button>

                <Button variant="ghost" className="w-full flex justify-start">
                  <LogOut size={18} className="mr-4" /> <p className="">Logout</p>
                </Button>
              </li>
            </ul>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="" defaultSize={75}>
          <Outlet />
          {/* <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div> */}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DashboardLayout;
