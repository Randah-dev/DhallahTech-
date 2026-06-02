"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SidebarComponent from "@/components/Sidebar/Sidebar";

export default function GuestLayout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  useEffect(() => {
    setShowNav(false);
  }, [pathname]);

  const guestNavItems = [
    { name: "إنشاء بلاغ", href: "/guest/createreport", icon: "fas fa-plus-circle" },
    { name: "نتائج المطابقة", href: "/guest/matches", icon: "fas fa-list-alt" },
  ];

  return (
  
    <div className="min-h-screen bg-[#F0EBF5] flex flex-row w-full" dir="rtl">
      
    
      {!isMobile && (
        <SidebarComponent navItems={guestNavItems} />
      )}

    
      {isMobile && showNav && (
        <div className="fixed inset-0 z-[999] flex">
        
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowNav(false)}></div>
          <div className="relative z-10 bg-white h-full shadow-2xl animate-fade-in-left">
            <SidebarComponent navItems={guestNavItems} />
          </div>
        </div>
      )}

      {isMobile && (
        <button
          onClick={() => setShowNav(!showNav)}
          className="fixed bottom-5 right-5 z-[1000] w-12 h-12 flex items-center justify-center bg-[#5E3085] text-white rounded-full shadow-lg active:scale-95 transition-transform"
        >
          <i className={`fas ${showNav ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      )}

      <main className="flex-1 overflow-y-auto bg-[#fbfaff] p-6">
        {children}
      </main>
    </div>
  );
}