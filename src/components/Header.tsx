
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Building, Search, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/features" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-estate-600" />
            <span className="font-bold text-xl text-estate-800">Estate 360</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/features" icon={<Home className="w-4 h-4" />} label="Home" />
            <NavLink to="/properties" icon={<Building className="w-4 h-4" />} label="Properties" />
            <NavLink to="/search" icon={<Search className="w-4 h-4" />} label="Search" />
          </nav>

          {/* Mobile Menu Button - Only show on tablet and up, hidden on mobile */}
          <button
            className="md:hidden sm:flex hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-estate-800" />
            ) : (
              <Menu className="h-6 w-6 text-estate-800" />
            )}
          </button>
        </div>

        {/* Tablet Menu Dropdown - Only for tablet, hidden on mobile */}
        {isMenuOpen && !isMobile && (
          <div className="md:hidden sm:block hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <NavLink to="/features" icon={<Home className="w-5 h-5" />} label="Home" mobile />
              <NavLink to="/properties" icon={<Building className="w-5 h-5" />} label="Properties" mobile />
              <NavLink to="/search" icon={<Search className="w-5 h-5" />} label="Search" mobile />
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar */}
      {isMobile && (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-around bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-2 w-[90%] max-w-xs">
          <MobileNavLink to="/features" icon={<Home className="w-5 h-5" />} label="Home" />
          <MobileNavLink to="/properties" icon={<Building className="w-5 h-5" />} label="Properties" />
          <MobileNavLink to="/search" icon={<Search className="w-5 h-5" />} label="Search" />
        </nav>
      )}
    </>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  mobile?: boolean;
}

const NavLink = ({ to, icon, label, mobile = false }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        flex items-center space-x-2 
        ${mobile ? "px-4 py-3 rounded-lg" : "px-2 py-1"} 
        ${
          isActive
            ? "text-estate-600 font-semibold"
            : "text-gray-600 hover:text-estate-600"
        }
        transition-colors duration-300
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        flex flex-col items-center justify-center px-4 py-2
        ${
          isActive
            ? "text-estate-600 font-semibold"
            : "text-gray-600"
        }
        transition-colors duration-300
      `}
    >
      <div className={`p-2 rounded-full ${isActive ? 'bg-estate-50' : ''}`}>
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default Header;
