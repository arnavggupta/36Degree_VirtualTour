
import { ReactNode } from "react";
import Header from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const Layout = ({ children, hideHeader = false }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!hideHeader && <Header />}
      <main className={`flex-1 flex flex-col ${isMobile ? 'pb-20' : ''}`}>{children}</main>
    </div>
  );
};

export default Layout;
