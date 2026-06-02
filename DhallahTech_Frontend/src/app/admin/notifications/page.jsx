"use client";
import React, { useEffect, useState } from "react";
import API from "@/services/api"; 

export default function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    API.get("/admin//notifications")
      .then((res) => {
      
        setNotifications(res.data?.data || res.data || []);
      })
      .catch((err) => console.error("خطأ في جلب إشعارات الإدارة:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-bold mb-6 text-right flex items-center gap-2">
         لوحة إشعارات النظام (الأدمن)
      </h1>
      
      {notifications.length === 0 ? (
        <p className="text-center text-gray-500 bg-white p-8 rounded-lg shadow-sm border">
          لا توجد طلبات أو إشعارات واردة حالياً.
        </p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div key={notif.id} className="p-5 bg-white border-r-4 border-purple-600 rounded-lg shadow-sm text-right hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">{notif.title}</h3>
                {!notif.isRead && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">
                    جديد
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{notif.body}</p>
              
              <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-50 text-xs text-gray-400">
                <span>
                  {notif.createdAt ? new Date(notif.createdAt?.seconds ? notif.createdAt.seconds * 1000 : notif.createdAt).toLocaleDateString("ar-SA", {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  }) : "الآن"}
                </span>
                
                {notif.requestId && (
                  <a 
                    href={`/admin/officeReq/${notif.requestId}`} 
                    className="text-purple-600 hover:underline font-medium"
                  >
                    مراجعة الطلب الآن ←
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}