"use client";
import React, { useEffect, useState } from "react";
import API from "@/services/api"; 

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5); 

  useEffect(() => {
    API.get("/officer/my-notifications")
      .then((res) => {
       
        setNotifications(res.data?.data || res.data || []);
      })
      .catch((err) => console.error("خطأ في جلب إشعارات الموظف:", err))
      .finally(() => setLoading(false));
  }, []);

  
  const markAsRead = async (notifId) => {
    setNotifications(prev =>
      prev.map(n => n.id === notifId ? { ...n, isRead: true } : n)
    );

    try {
     
      await API.put(`/officer/notifications/${notifId}/read`);
    } catch (err) {
      console.error("خطأ في تحديث حالة قراءة الإشعار:", err);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto" dir="rtl">
      
      
      <div className="mb-6 text-right">
        <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#3A1C56' }}> مركز الإشعارات</h2>
        <div style={{ width: '60px', height: '5px', backgroundColor: '#3A1C56', borderRadius: '10px', marginTop: '10px' }}></div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-800"></div>
        </div>
       ) : notifications.length === 0 ? (
        <p className="text-center text-gray-400 py-12 text-sm">لا توجد إشعارات جديدة حالياً.</p>
      ) : (
      
        <div className="w-full space-y-4">
          
        
          <div className="flex justify-between items-center mb-2 px-1">
            <h3 className="text-lg md:text-xl font-bold text-[#3A1C56]">آخر التنبيهات</h3>
            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
              {notifications.filter(n => !n.isRead).length} جديدة
            </span>
          </div>

          <div className="space-y-3 w-full">
            {notifications.slice(0, visibleCount).map((notif) => (
              <div 
                key={notif.id} 
                className={`p-4 rounded-xl border-r-4 transition-all duration-200 text-right ${
                  notif.isRead ? 'bg-gray-50 border-gray-300' : 'bg-purple-50/60 border-[#3A1C56] shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">{notif.title}</h4>
                  {!notif.isRead && (
                    <span className="w-2 h-2 bg-purple-600 rounded-full inline-block mt-1.5 shrink-0"></span>
                  )}
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{notif.body}</p>
                
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-dashed border-gray-200 text-[11px] md:text-xs text-gray-400">
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
                  
                 
                  {notif.requestId && (
                    <a 
                      href={`/offecer/my-reports/${notif.requestId}`} 
                      onClick={() => markAsRead(notif.id)}
                      className="text-[#3A1C56] hover:underline font-bold text-xs"
                    >
                      مراجعة الآن ←
                    </a>
                  )}
                </div>
              </div>
            ))}

      
            {notifications.length > 5 && (
              <div className="text-center mt-4 pt-3 border-t border-gray-100">
                {visibleCount < notifications.length ? (
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 5)}
                    className="text-[#3A1C56] hover:text-[#5E3085] text-xs font-bold transition-colors"
                  >
                    عرض المزيد من الإشعارات ⬇️
                  </button>
                ) : (
                  <button 
                    onClick={() => setVisibleCount(5)}
                    className="text-gray-400 hover:text-gray-600 text-xs font-bold transition-colors"
                  >
                    إظهار أقل ⬆️
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}