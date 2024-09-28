import { Sidebar, Topmenu } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: <Sidebar /> */}
      <Sidebar />

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="bg-slate-50 ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        {/* TODO: src/components <TopMenu /> */}
        <Topmenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6 pb-6">
          {children}
        </div>
      </div>
    </>
  );
}
