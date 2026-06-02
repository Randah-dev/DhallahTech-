"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllOfficeRequests } from "@/services/api";

export default function AllOfficeRequestsPage() {
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await getAllOfficeRequests();
        
    
        const actualData = response.data?.data || response.data || [];
        setRequests(actualData);
      } catch (error) {
        console.error("خطأ في جلب قائمة الطلبات:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
    </div>
  );

const getStatusBadge = (status) => {
  const currentStatus = status?.toLowerCase() || 'pending';
  switch (currentStatus) {
    case 'active':
    case 'approved':
      return { text: "مقبول ✅", className: "bg-green-50 text-green-600 border border-green-200" };
    case 'rejected':
      return { text: "مرفوض ❌", className: "bg-red-50 text-red-600 border border-red-200" };
    case 'pending':
    default:
      return { text: "قيد الانتظار ⏳", className: "bg-yellow-50 text-yellow-600 border border-yellow-200" };
  }
};
  return (
  <div className="AdminContent min-h-screen bg-gray-50/50 p-4 lg:p-8" dir="rtl">
      <h2 className="text-2xl font-bold mb-2 text-[#3A1C56]">طلبات إنشاء المكاتب الواردة</h2>
      <p className="text-gray-500 mb-8 text-sm">اضغطي على أي طلب لمراجعة تفاصيله الكاملة والقبول أو الرفض.</p>

      {requests.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-gray-300">
          <p className="text-gray-400 font-bold">لا توجد طلبات إنشاء مكاتب حالياً.</p>
        </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
    
{[...requests]
  .sort((a, b) => {
   
    const statusA = a.status?.toLowerCase() || 'pending';
    const statusB = b.status?.toLowerCase() || 'pending';

    if (statusA === 'pending' && statusB !== 'pending') return -1; // تثبيت pending فوق
    if (statusA !== 'pending' && statusB === 'pending') return 1;  // إنزال الحالات الأخرى تحت

    // 2. فرز التاريخ: إذا كانت الحالات متساوية (مثلاً ثنينهم pending)، رتب بالأحدث زمنياً
    const dateA = a.createdAt?.seconds ? a.createdAt.seconds * 1000 : new Date(a.createdAt || 0).getTime();
    const dateB = b.createdAt?.seconds ? b.createdAt.seconds * 1000 : new Date(b.createdAt || 0).getTime();
    
    return dateB - dateA; // من الأحدث إلى الأقدم
  })
  .map((req) => {
    const badge = getStatusBadge(req.status);
    
            return (
              <div 
                key={req.id} 
             onClick={() => router.push(`/admin/officeReq/${req.id}`)}
                  className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm active:scale-[0.98] lg:hover:scale-[1.02] transition-all cursor-pointer group"
                >
                
                <div>
            
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {req.cityName || "مكة المكرمة"}
                    </span>
                    
                 
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full font-sans ${badge.className}`}>
                      {badge.text}
                    </span>
                  </div>

                <h3 className="text-base lg:text-lg font-black text-gray-800 mb-2 group-hover:text-[#5E3085] transition-colors">
                    {req.officeName}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      📍 <span className="font-semibold text-gray-700">الموقع:</span> {req.location}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      👤 <span className="font-semibold text-gray-700">المدير:</span> {req.managerName}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => router.push(`/admin/officeReq/${req.id}`)}
                  className="mt-6 w-full py-2.5 bg-[#5E3085] text-white font-bold rounded-xl text-sm hover:bg-[#4a246b] transition-colors shadow-sm"
                >
                  معاينة تفاصيل الطلب ←
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}