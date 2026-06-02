"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SidebarComponent from "@/components/Sidebar/Sidebar"; 

export default function CustomerLayout({ children }) {
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

    const customerNavItems = [
        { name: "الصفحة الرئيسية", href: "/customer/home", icon: "fas fa-home" },
        { name: "إنشاء بلاغ", href: "/customer/create-report", icon: "fas fa-plus-circle" },
        { name: "نتائج المطابقة", href: "/customer/matches", icon: "fas fa-list-alt" },
        { name: "المحادثات", href: "/customer/chats", icon: "fas fa-comments" },
        { name: ' الدعم الفني', href: "/customer/tech-issues", icon: "fas fa-exclamation-circle" },
         { name: "الإعدادات", href: "/customer/settings", icon: "fas fa-cog" },
    ];

    return (
        <div className="flex min-h-screen bg-[#fbfaff]" dir="rtl">
            {!isMobile && (
                <SidebarComponent navItems={customerNavItems} logo="/logo.png" />
            )}

            {isMobile && showNav && (
                <div className="fixed inset-0 z-[999] flex">
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowNav(false)}></div>
                    <div className="relative z-10 bg-white h-full shadow-2xl animate-fade-in-left">
                        <SidebarComponent navItems={customerNavItems} logo="/logo.png" />
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
            <main className="flex-1 p-6 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}