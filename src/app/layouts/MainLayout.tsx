import { Header } from "@/shared/ui/header/Header";
import { Nav } from "@/shared/ui/nav/Nav";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[min-content_1fr] w-5xl mx-auto h-dvh border-l border-r border-gray-700">
      <Header />
      <Nav />
      <main className="px-6 py-5">
        <Outlet />
      </main>
    </div>
  );
};
