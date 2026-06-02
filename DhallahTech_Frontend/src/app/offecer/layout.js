"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from "@/components/Sidebar/Sidebar";


export default function OfficerLayout({ children }) {

  const [officeLink, setOfficeLink] = useState("/offecer/OfficeRequest"); 
  const [isApproved, setIsApproved] = useState(false);
  const [hasOfficeRequest, setHasOfficeRequest] = useState(false);
  const [loading, setLoading] = useState(true); 

  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

 useEffect(() => {
    const checkUserOfficeStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          router.replace("/login");
          return;
        }

    
        const response = await fetch('http://localhost:5000/api/officer/my-office', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          const result = await response.json();
          const officeData = result.data?.office || result.office || result.data;
          const status = officeData?.status;
          
          setHasOfficeRequest(true);

          if (status === "approved" || status === "active") {
            setOfficeLink("/offecer/dashboard");
            setIsApproved(true);
          } else {
            setOfficeLink("/offecer/request-status");
            setIsApproved(false);
            if (pathname === "/offecer/dashboard") {
              router.replace("/offecer/request-status"); 
            }
          }
        } else {
        
         setOfficeLink("/offecer/OfficeRequest");
          setIsApproved(false);
          setHasOfficeRequest(false);
          if (pathname === "/offecer/dashboard" || pathname === "/offecer/request-status") {
            router.replace("/offecer/OfficeRequest");
          }
        }
      } catch (error) {
        console.error("خطأ في قراءة حالة المكتب بالـ Layout:", error);
      } finally {
        setLoading(false);
      }
    };
    

    checkUserOfficeStatus();
  }, [pathname]);
  const baseMenu = [
    { 
    name: isApproved ? 'لوحة التحكم' : (hasOfficeRequest ? 'حالة طلب المكتب' : 'طلب انشاء مكتب'),
      href: officeLink, 
      icon: 'fas fa-building' 
    },
  ];
  const approvedMenu = [
    { name: 'رفع بلاغ موجود', href: '/offecer/upload', icon: 'fas fa-upload' },
    { name: 'سجل البلاغات', href: '/offecer/my-reports', icon: 'fas fa-clipboard-list' },
    { name: 'المحادثات', href: '/offecer/chats', icon: 'fas fa-comments' },
    { name:' الدعم الفني', href: '/offecer/complaints', icon: 'fas fa-exclamation-circle' },
    { name: 'حالة طلب المكتب', href: "/offecer/request-status", icon: 'fas fa-building' },
    { name: 'الإعدادات', href: '/offecer/settings', icon: 'fas fa-cog' }, // تم تصحيح الأيقونة إلى fa-cog
    
  ];
  const officerMenu = isApproved ? [...baseMenu, ...approvedMenu] : baseMenu;
   if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#fbfaff]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
      </div>
    );
  }

    return (
    <div className="flex min-h-screen bg-[#fbfaff]" dir="rtl">
      
        {!isMobile && (
            <Sidebar navItems={officerMenu} logo="/logo.png" />
        )}

      
        {isMobile && showNav && (
            <div className="fixed inset-0 z-[999] flex">
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowNav(false)}></div>
                <div className="relative z-10 bg-white h-full shadow-2xl animate-fade-in-left">
                    <Sidebar navItems={officerMenu} logo="/logo.png" />
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
           {(!isApproved && pathname === "/offecer/dashboard") ? (
              <div className="flex items-center justify-center h-full text-gray-500">جاري توجيهك...</div>
            ) : (
              children
            )}
        </main>
    </div>
  );
}