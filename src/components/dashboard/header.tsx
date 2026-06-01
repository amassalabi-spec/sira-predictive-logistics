import { Button } from "@/components/ui/button";
import { Building, ShipWheel } from "lucide-react";

interface HeaderProps {
  clientName: string;
}

export function Header({ clientName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <ShipWheel className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" 
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            SIRA
          </h1>
        </div>

        {/* Profile Button */}
        <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
          Profile
        </Button>
      </div>
    </header>
  );
}
