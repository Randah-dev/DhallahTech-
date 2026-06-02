"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';



export default function Sidebar({ navItems, logo = "/logo.png" }) {
    const pathname = usePathname();
     const router = useRouter();
    return (
        <aside className="w-64 bg-white shadow-md flex flex-col min-h-screen">
            <div className="p-8 border-b">
                <img src={logo} alt="Logo" className="w-48 h-auto mb-4 mx-auto" />
            </div>
            
            <nav className="flex-1 px-5 py-4 space-y-5">
                {navItems.map(item => (
                    <Link 
                        key={item.href} 
                        href={item.href} 
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors
                            ${pathname === item.href 
                                ? 'bg-purple-100 text-[#5E3085]' 
                                : 'text-gray-400 hover:bg-purple-50 hover:text-[#5E3085]'
                            }`}
                    >
                        <i className={`${item.icon} sidebar-icon`}></i>
                        <span className="text-[#3e1e5b]">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t">
                <button 
                   onClick={() => {
                     localStorage.removeItem('token');
                     localStorage.removeItem('role');
                          router.push('/');
                        }}
                     className="w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center transition-colors
                    text-red-600 hover:bg-red-600 hover:text-white border border-red-600"
                    >
                    <i className="fas fa-sign-out-alt ml-2"></i> تسجيل خروج
                  </button>   
            </div>
        </aside>
    );
}