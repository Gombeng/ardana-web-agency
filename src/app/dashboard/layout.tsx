import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0A0A0A] text-slate-100 min-h-screen antialiased">
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </div>
  );
}
