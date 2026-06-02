"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReportDetailsPage({ params }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [report, setReport] = useState(null);

  

useEffect(() => {
  const dataString = sessionStorage.getItem('selectedReport');
  if (dataString) {
    try {
      setReport(JSON.parse(dataString));
    } catch (e) {
      console.error("Error parsing report data:", e);
    }
  }
}, [params.id]);
  if (!report) {
    return <div className="p-10 text-center font-bold text-[#5E3085]">جاري تحميل تفاصيل البلاغ...</div>;
  }

 
  const formatReportDate = (dateObj) => {
    if (!dateObj) return "تاريخ غير محدد";
    const seconds = dateObj._seconds ? dateObj._seconds * 1000 : dateObj;
    return new Date(seconds).toLocaleDateString('ar-SA') + ' ' + new Date(seconds).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
  };


  const handleMarkAsDelivered = async () => {
    if (!window.confirm("هل أنت متأكد من تغيير حالة البلاغ إلى 'تم التسليم'؟")) return;
    
    const token = localStorage.getItem('token');
    try {
     const response = await fetch(`http://localhost:5000/api/items/update-status/${report._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: 'Claimed' })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        alert(" تم تحديث حالة البلاغ بنجاح وإغلاقه!");
        router.back();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };


  const handleDeleteReport = async () => {
    if (!window.confirm(" هل أنت متأكد من حذف هذا البلاغ نهائياً؟")) return;

    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/items/delete/${report._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result = await response.json();
      if (response.ok && result.success) {
        alert(" تم حذف البلاغ بنجاح.");
        router.back();
      }
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] border border-gray-200 p-6 md:p-10 shadow-sm text-right">
        
      
        <button 
          onClick={() => router.back()} 
          className="mb-6 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl font-bold text-sm transition-all"
        >
          → عودة للقائمة
        </button>

       
        <div className="border-b border-gray-100 pb-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-8 bg-[#5E3085] rounded-full"></span>
            <h1 className="text-2xl font-black text-[#5E3085]">{report.itemName}</h1>
          </div>
          <p className="text-gray-400 text-xs mr-5">رقم البلاغ الرقمي: {report._id}</p>
        </div>
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
    report.status?.toLowerCase() === 'claimed' 
      ? 'bg-green-100 text-green-700 border-green-200' 
      : report.status?.toLowerCase() === 'matched'
      ? 'bg-purple-100 text-[#5E3085] border-purple-200'
      : 'bg-orange-100 text-orange-700 border-orange-200'
  }`}>
    {report.status?.toLowerCase() === 'claimed' 
      ? 'تم التسليم بنجاح ' 
      : report.status?.toLowerCase() === 'matched'
      ? 'تمت المطابقة بانتظار الاستلام '
     : (report.status?.toLowerCase().trim() === 'pending' || report.status === 'لم تتم المطابقة للآن' || !report.status)
              ? 'بالانتظار'
              : report.status}
</span>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-2xl">
            <span className="text-gray-400 text-xs block mb-1 font-bold">التصنيف الرسمي</span>
            <span className="text-gray-800 font-black text-base">{report.category}</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-2xl">
            <span className="text-gray-400 text-xs block mb-1 font-bold">اللون</span>
            <span className="text-gray-800 font-black text-base">{report.color || "غير محدد"}</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl">
            <span className="text-gray-400 text-xs block mb-1 font-bold">مكان العثور / الفقدان</span>
            <span className="text-gray-800 font-black text-base">{report.location}</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl">
            <span className="text-gray-400 text-xs block mb-1 font-bold">تاريخ ووقت البلاغ</span>
            <span className="text-gray-800 font-black text-base">{formatReportDate(report.date)}</span>
          </div>
        </div>

      
        <div className="bg-gray-50 p-6 rounded-[2rem] mb-8">
          <h3 className="font-black text-gray-700 text-sm mb-3">الوصف التفصيلي للعنصر:</h3>
          <p className="text-gray-600 leading-relaxed font-semibold text-sm bg-white p-4 rounded-xl border border-gray-100 shadow-inner">
            {report.description || "لا يوجد وصف إضافي مكتوب لهذا العنصر."}
          </p>
        </div>

        
        {report.verificationQuestion && (
          <div className="border-2 border-dashed border-[#5E3085]/20 p-6 rounded-[2rem] bg-[#FDFBFF] space-y-3">
            <h3 className="font-black text-[#5E3085] text-sm flex items-center gap-2">
               سؤال التحقق المعتمد للمطابقة
            </h3>
            <div className="text-sm mr-4">
              <p className="text-gray-500 font-bold">السؤال: <span className="text-gray-800">{report.verificationQuestion}</span></p>
              <p className="text-gray-500 font-bold mt-1">الإجابة النموذجية المحددة: <span className="text-green-600 font-black">{report.correctAnswer}</span></p>
            </div>
          </div>
        )}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          
         
          {report.status?.toLowerCase() !== 'delivered' && (
            <button
              onClick={handleMarkAsDelivered}
              className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              تم تسليم العنصر لصاحبه
            </button>
          )}

          
          <button
            onClick={() => router.push(`/offecer/my-reports/edit/${report._id}`)}
            className="w-full sm:w-auto px-6 py-3 bg-white text-[#5E3085] border-2 border-[#5E3085] hover:bg-[#F3EBFF] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            تعديل البيانات
          </button>

          
          <button
            onClick={handleDeleteReport}
            className="w-full sm:w-auto px-6 py-3 bg-red-50 text-red-600 hover:bg-red-100 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            حذف البلاغ نهائياً
          </button>
          
        </div>

      </div>
    </div>
  );
}