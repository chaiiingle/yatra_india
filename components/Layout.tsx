import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, User as UserIcon, LogOut } from 'lucide-react';
import { User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
  onOpenAuth: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, onOpenAuth }) => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBFBF9] text-stone-900 selection:bg-stone-200">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isHome ? 'bg-transparent text-white py-6' : 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 text-stone-800 py-4'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight flex items-center gap-2 group">
            <Map className="w-6 h-6 transition-transform group-hover:-rotate-12" />
            Yatra
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/about" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity hidden md:block">About</Link>
            
            {user ? (
              <div className="flex items-center gap-6">
                <Link to="/profile" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                  <UserIcon size={18} />
                  <span className="hidden sm:block font-medium">{user.name.split(' ')[0]}</span>
                </Link>
                <button onClick={onLogout} className="hover:text-red-500 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isHome 
                    ? 'bg-white text-stone-900 hover:bg-stone-100 shadow-lg' 
                    : 'bg-stone-900 text-white hover:bg-stone-800 shadow-md'
                }`}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#1c1c1e] text-stone-400 py-16">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-serif text-2xl mb-6">Yatra</h3>
            <p className="text-sm leading-relaxed max-w-xs font-light text-stone-300">
              Curating mindful, buffered travel experiences for the soul using smart logic and local insights.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wide text-sm uppercase">Destinations</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/junnar" className="hover:text-white transition-colors">Junnar</Link></li>
              <li><Link to="/mahabaleshwar" className="hover:text-white transition-colors">Mahabaleshwar</Link></li>
              <li><Link to="/ooty" className="hover:text-white transition-colors">Ooty</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-medium mb-6 tracking-wide text-sm uppercase">Legal</h4>
             <p className="text-xs font-light text-stone-500">© {new Date().getFullYear()} Yatra - Travel India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;