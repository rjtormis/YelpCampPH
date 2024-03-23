import logo from "@/assets/logo.png";
import { Outlet } from "react-router-dom";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { FlameKindling } from "lucide-react";
import { Button } from "@/components/ui/button";

function DashboardLayout() {
  return (
    <div className="w-screen h-screen p-10">
      <header className="flex  items-center">
        <div className="flex items-center">
          <img src={logo} alt="YelpCampPH" className="h-[60px] w-[60px]" />
          <p className="text-xl font-semibold">YelpCamp PH</p>
        </div>
      </header>
      <Outlet />
      <ResizablePanelGroup direction="horizontal" className=" min-h-[200px] rounded-lg border">
        <ResizablePanel defaultSize={12}>
          <div className="flex h-full  p-6">
            <ul>
              <li className="flex content-center justify-center">
                <Button variant="ghost">
                  <FlameKindling size={18} className="m-auto" /> <p className="ml-4">Campsites</p>
                </Button>
              </li>
              <li className=" w-full content-center justify-center">
                <Button variant="ghost" className="w-full">
                  <FlameKindling size={18} className="m-auto" /> <p className="ml-4">Inbox</p>
                </Button>
              </li>
              <li className=" content-center justify-center">
                <Button variant="ghost" className="w-full">
                  <FlameKindling size={18} className="m-auto" /> <p className="ml-4">Profile</p>
                </Button>
              </li>
              <li className=" content-center justify-center">
                <Button variant="ghost" className="w-full">
                  <div>
                    <FlameKindling size={18} className="m-auto" />
                  </div>
                  <p className="ml-4">Setting</p>
                </Button>
              </li>
              <li className=" content-center justify-center">
                <Button variant="ghost" className="w-full">
                  <FlameKindling size={18} className="m-auto" /> <p className="ml-4">Logout</p>
                </Button>
              </li>
            </ul>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="" defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DashboardLayout;
