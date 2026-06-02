"use client";
import React, { useEffect, useState } from "react";
import API from "@/services/api";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    API.get("/admin/notifications")
      .then((res) => {
        setNotifications(res.data?.data || res.data || []);
      })
      .catch((err) => console.error("خطأ في جلب إشعارات الإدارة:", err))
      .finally(() => setLoading(false));
  }, []);

  const markAsRead = async (notifId) => {

  setNotifications(prev =>
    prev.map(n => n.id === notifId ? { ...n, isRead: true } : n)
  );

  try {
    await API.put(`/admin/notifications/${notifId}/read`);
  } catch (err) {
    console.error("خطأ في تحديث حالة قراءة الإشعار:", err);
  }
};

  return (
    <div className="AdminContent home-container p-4 md:p-6" dir="rtl">
      
      {/* واجهة الترحيب */}
      <div className="welcome-section mb-6">
        <h1 className="text-2xl md:text-4xl font-black mb-2">مرحباً بك مجدداً.. 👋</h1>
        <p style={{ fontSize: '22px', maxWidth: '600px', opacity: 0.9 }}>
          أنت الآن في مركز التحكم الخاص بـ <strong>"ضالتك"</strong>. 
          إليك ملخص المهام التي تتطلب انتباهك اليوم.
        </p>
      </div>

     
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-start w-full">
 
        <div className="w-full lg:w-[380px] bg-white rounded-2xl shadow-sm border p-4 md:p-5 min-h-[300px] shrink-0">
          <div className="flex justify-between items-center mb-4 pb-3 border-b">
            <h3 className="text-lg md:text-xl font-bold text-[#3A1C56] flex items-center gap-2">
              🔔 الاشعارات
            </h3>
            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full">
              {notifications.filter(n => !n.isRead).length} جديدة
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-800"></div>
            </div>
          ) : notifications.length === 0 ? (
            <p className="text-center text-gray-400 py-12 text-sm">لا توجد اشعارات جديدة حالياً </p>
          ) : (
            <div className="space-y-3 max-h-[350px] lg:max-h-[450px] overflow-y-auto pr-1">
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
                        href={`/admin/officeReq/${notif.requestId}`} 
                        onClick={() => markAsRead(notif.id)}
                        className="text-[#3A1C56] hover:underline font-bold text-xs"
                      >
                        مراجعة الآن ←
                      </a>
                    )}
                  </div>
                </div>
              ))}
                {notifications.length > 3 && (
  <div className="text-center mt-3 pt-2 border-t border-gray-100">
    {visibleCount < notifications.length ? (
      <button 
        onClick={() => setVisibleCount(prev => prev + 5)} // يزيد 5 إشعارات إضافية عند كل ضغطة
        className="text-[#3A1C56] hover:text-[#5E3085] text-xs font-bold transition-colors"
      >
        عرض المزيد من الإشعارات ⬇️
      </button>
    ) : (
      <button 
        onClick={() => setVisibleCount(3)} // يرجع يقلصها لـ 3 إشعارات
        className="text-gray-400 hover:text-gray-600 text-xs font-bold transition-colors"
      >
        إظهار أقل ⬆️
      </button>
    )}
  </div>
)}
            </div>
          
          )}
        </div> 

      
        <div className="flex-1 w-full">
          {/* عنوان القسم */}
          <div className="mb-6">
            <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#3A1C56' }}>العمليات الإدارية الحالية</h2>
            <div style={{ width: '60px', height: '5px', backgroundColor: '#3A1C56', borderRadius: '10px', marginTop: '10px' }}></div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* مهمة الموظفين */}
            <div className="task-card">
              <div className="status-tag">طلبات الموظفين</div>
              <div className="icon-box">👥</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#3A1C56', marginBottom: '10px' }}>
                طلبات انضمام الموظفين
              </h3>
              <p style={{ fontSize: '20px', color: '#666' }}>
                راجع بيانات الموظفين الجدد ووافق على طلباتهم ليتمكنوا من البدء في العمل.
              </p>
            </div>

            {/* مهمة الشكاوى */}
            <div className="task-card">
              <div className="status-tag">خدمة الشكاوى التقنية</div>
              <div className="icon-box">💬</div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#3A1C56', marginBottom: '10px' }}>
                الرد على شكاوى النظام
              </h3>
              <p style={{ fontSize: '20px', color: '#666' }}>
                تفاعل مع بلاغات المستخدمين وحل المشكلات التقنية لضمان جودة الخدمة.
              </p>
            </div>
          </div>
        </div> 

      </div> 

    
      <div className="quote-box mt-6">
        🛡️ متابعتك الدقيقة للطلبات والشكاوى هي الركيزة الأساسية لنجاح تجربة مستخدمي ضالتك 
      </div>
      
    </div>
  );
}