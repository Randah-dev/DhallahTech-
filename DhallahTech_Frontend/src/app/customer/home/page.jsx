"use client";

import { useEffect, useState } from "react";
import { getMyReports, refreshMatches,getCustomerNotifications } from "@/services/api";
import API from "@/services/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [reports, setReports] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [notifLoading, setNotifLoading] = useState(true);

   const loadReports = async () => {
    try {
      const res = await getMyReports();
      let rawData = [];
      
      if (res.data && res.data.success) {
        rawData = res.data.data || [];
      } else {
        rawData = Array.isArray(res.data) ? res.data : [];
      }

    
      const sortedData = rawData.sort((a, b) => {
        const aDone = ["received", "matched"].includes(a.status?.toLowerCase().trim());
        const bDone = ["received", "matched"].includes(b.status?.toLowerCase().trim());

        
        if (aDone && !bDone) return -1;
        if (!aDone && bDone) return 1;

       
        const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
        const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
        return timeB - timeA;
      });

      setReports(sortedData);

    } catch (err) {
      console.log(
        "خطأ في جلب البلاغات:",
        err.response?.data || err.message
      );
    }
  };


 useEffect(() => {

    loadReports();
    loadNotifications();

    const interval = setInterval(() => {
        loadReports();
        loadNotifications();
    },5000);

    return () => clearInterval(interval);

},[]);

 
  const handleRefreshMatches = async (itemId) => {
    try {
      alert("جاري تحديث المطابقات الذكية عبر الـ AI...");
    
    const response = await refreshMatches(itemId);

const freshMatches =
response.data?.data?.matches ||
response.data?.matches ||
[];

sessionStorage.setItem(
    'aiMatches',
    JSON.stringify(freshMatches)
);
 
     router.push(`/customer/matches?itemId=${itemId}`);
    } catch (err) {
      console.log("خطأ في تحديث نتائج المطابقة:", err);
      alert("حدث خطأ أثناء تحديث نتائج المطابقة");
    }
  }; 
const loadNotifications = () => {
 getCustomerNotifications(5)
      .then((res) => { 
   
       
        const dataReceived = res.data?.data || [];
        
        console.log("الإشعارات المستلمة في الكستمر:", dataReceived); 
        setNotifications(Array.isArray(dataReceived) ? dataReceived : []);
    })
    .catch((err) => console.error("خطأ في جلب إشعارات العميل:", err))
    .finally(() => setNotifLoading(false));
};
  const markAsRead = async (notifId) => {
   setNotifications(prev =>
      prev.map(n => n.id === notifId ? { ...n, isRead: true } : n)
    );
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
     await markNotificationAsRead(notifId);
      
       } catch (err) {
      console.error("خطأ في تحديث حالة قراءة إشعار العميل:", err);
    }
  };

  return (
   <div className="p-4 md:p-6 max-w-7xl mx-auto" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-6 items-start w-full mt-4">
        <div className="w-full lg:w-[360px] bg-white rounded-2xl shadow-sm border p-4 md:p-5 shrink-0 order-1 lg:order-2">
          <div className="flex justify-between items-center mb-4 pb-3 border-b">
            <h3 className="text-base md:text-lg font-bold text-[#3A1C56] flex items-center gap-1.5">
              🔔 التنبيهات والردود
            </h3>
            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full">
              {notifications.filter(n => !n.isRead).length} جديدة
            </span>
          </div>

          {notifLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-800"></div>
            </div>
          ) : notifications.length === 0 ? (
            <p className="text-center text-gray-400 py-10 text-xs">لا توجد مستجدات حالياً</p>
          ) : (
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className={`p-3.5 rounded-xl border-r-4 transition-all duration-200 text-right ${
                    notif.isRead ? 'bg-gray-50 border-gray-300' : 'bg-purple-50/60 border-[#3A1C56] shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-800 text-xs md:text-sm">{notif.title}</h4>
                    {!notif.isRead && (
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full inline-block mt-1 shrink-0"></span>
                    )}
                  </div>
                  <p className="text-gray-600 text-[11px] md:text-xs leading-relaxed">{notif.body}</p>
                  
                  <div className="flex justify-between items-center mt-2.5 pt-2 border-t border-dashed border-gray-200 text-[10px] text-gray-400">
                    <span>
                      {notif.createdAt ? (() => {
                        const seconds = notif.createdAt._seconds || notif.createdAt.seconds;
                        if (seconds) {
                          return new Date(seconds * 1000).toLocaleDateString("ar-SA");
                        }
                        const dateObj = new Date(notif.createdAt);
                        return isNaN(dateObj.getTime()) ? "الآن" : dateObj.toLocaleDateString("ar-SA");
                      })() : "الآن"}
                    </span>
                    
                    {notif.complaintId && (
                      <button 
                        onClick={() => {
                          markAsRead(notif.id);
                          router.push(`/customer/tech-issues?id=${notif.complaintId}`);
                        }}
                        className="text-[#3A1C56] hover:underline font-bold text-[11px]"
                      >
                        معاينة الرد ←
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


     <div className="flex-1 w-full order-2 lg:order-1">
          <h2 className="sectionTitle mb-4">البلاغات الأخيرة</h2>
          <div className="space-y-4">
        {reports.length === 0 ? (

          <div className="reportRow">
            لا توجد بلاغات حالياً
          </div>

        ) :( reports.map((r, idx) => (

          <div className="reportRow" key={idx}>

            <div className="reportInfo text-right">

              <div className="reportTitle">
                {r.itemName}
              </div>

              <div className="reportDate">
                {r.location}
              </div>

              <div className="reportDate">
                {r.category}
              </div>

              <div className="reportDate">
                {r.description}
              </div>

            </div>

       <div className="flex flex-col items-start gap-3 min-w-[190px]">
              <span
                className={`px-5 py-3 rounded-2xl text-sm font-bold shadow-sm inline-flex items-center justify-center min-w-[170px] ${
                  r.status?.toLowerCase().trim() === "received" || r.status === "تم الاستلام"
                    ? "bg-green-100 text-green-700"
                    : r.status?.toLowerCase().trim() === "matched" || r.status === "تمت المطابقة"
                    ? "bg-purple-100 text-[#5E3085]"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {r.status?.toLowerCase().trim() === "matched" || r.status === "تمت المطابقة"
                  ? "تمت المطابقة"
                  : r.status?.toLowerCase().trim() === "received" || r.status === "تم الاستلام"
                  ? "تم الاستلام"
                  : "لم تتم المطابقة للآن"}
              </span>

             
              {(r.status?.toLowerCase().trim() === "pending" || r.status === "لم تتم المطابقة للآن" || !r.status) && (
                <button
                  type="button"
                  onClick={() => handleRefreshMatches(r.id || r._id)}
                  className="bg-[#5E3085] text-white px-5 py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-all shadow-sm"
                >
                  تحديث نتائج المطابقة
                </button>
                 )}
                  </div> 
                </div> 
              ))
            )}
          </div>
        </div> 

      </div> 
    </div> 
  );
}