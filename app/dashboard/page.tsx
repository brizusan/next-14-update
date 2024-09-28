import { WidgetItem } from "@/components";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Dashboard Page",
  description: "Contendo de Dashboard principal",
};

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-center text-2xl my-4 font-bold">Dashboard Principal</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* TODO: src/components <WidgetItem /> */}
        <WidgetItem />
      </div>
    
    </>
  );
}
