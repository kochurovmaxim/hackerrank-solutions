import { Header } from "@/shared/ui/header/Header";
import { Nav } from "@/shared/ui/nav/Nav";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="grid md:grid-cols-[300px_1fr] md:grid-rows-[min-content_1fr] max-w-5xl mx-auto md:h-dvh md:border-l md:border-r border-gray-700">
      <Header />
      <Nav />
      <main className="px-6 py-5">
        <Outlet />
      </main>
    </div>
  );
};
