"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SidebarComponent from "@/components/Sidebar/Sidebar"; 
import "./Admin.css"; 

export default function AdminLayout({ children }) {
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


    const adminNavItems = [
        { name: "الرئيسية", href: "/admin/home", icon: "fas fa-home" },
        { name: "الشكاوى", href: "/admin/complaints", icon: "fas fa-exclamation-circle" },
        { name: 'طلبات انشاء مكتب', href: "/admin/officeReq", icon: 'fas fa-building' },
        { name: "الإعدادات", href: "/admin/settings", icon: "fas fa-cog" }
    ];

    return (
        <div className="AdminPage flex min-h-screen bg-[#fbfaff]" dir="rtl">
            
        
            {!isMobile && (
                <SidebarComponent navItems={adminNavItems} />
            )}

         
            {isMobile && showNav && (
                <div className="fixed inset-0 z-[999] flex">
                  
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowNav(false)}></div>
            
                    <div className="relative z-10 bg-white h-full shadow-2xl animate-fade-in-left">
                        <SidebarComponent navItems={adminNavItems} />
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

           
            <main className="AdminContent flex-1 p-6 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}