"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getOfficeDetails, reviewOfficerRequest } from "@/services/api"; 

export default function OfficeDetailsPage() {
const params = useParams();
const id = params?.id; 
const router = useRouter();

  const [office, setOffice] = useState(null);
  const [loading, setLoading] = useState(true);
console.log("🔍 [Debug] الـ ID المستخرج من الرابط حالياً هو:", id);
  
  useEffect(() => {
   const fetchDetails = async () => {
    console.log("=== 🚀 بداية فحص جلب البيانات ===");
    console.log("1. الـ ID المرسل لدالة getOfficeDetails هو:", id);
    
    if (!id) {
      console.error("❌ خطأ: الـ ID قيمته فارغة، عشان كذا اللودينق معلق!");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await getOfficeDetails(id); 
      
      console.log("2. استجابة السيرفر الكاملة (response):", response);
      console.log("3. البيانات بداخل response.data:", response?.data);

   
      const actualData = response.data?.data || response.data;
      console.log("4. البيانات الصافية المستخرجة (actualData):", actualData);

      if (actualData) {
         setOffice(actualData);
      } else {
         console.error("❌ السيرفر رجع استجابة ناجحة بس فاضية ما فيها بيانات المكتب!");
      }

    } catch (error) {
      console.error("❌ امسك خطأ الـ Catch هنا:", error);
      console.error("تفاصيل الخطأ القادم من السيرفر:", error.response?.data);
    } finally {
      setLoading(false);
      console.log("=== 🏁 نهاية الفحص ===");
    }
  };

  fetchDetails();
}, [id]);
  // 2. دالة التعامل مع القبول أو الرفض
  const handleAction = async (action) => {
    try {
      const response = await reviewOfficerRequest({ 
        requestId: id, 
        action: action 
      });

    if (response && (response.status === 200 || response.data?.success)) {
        alert(action === "approve" ? "✅ تم قبول المكتب بنجاح" : "❌ تم رفض الطلب");
       router.push("/admin/officeReq"); // العودة لقائمة الطلبات
      } else {
       
        alert("⚠️ فشلت العملية، يرجى المحاولة مرة أخرى");
      }
    } catch (error) {
      console.error("❌ خطأ أثناء تنفيذ عملية القبول/الرفض:", error);
      alert("حدث خطأ في تنفيذ العملية");
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
    </div>
  );

  if (!office) return <div className="AdminContent text-center">المكتب غير موجود</div>;

  return (
    
    <div className="min-h-screen bg-gray-50 pb-10" dir="rtl">
      
     
      <div className="bg-white p-4 shadow-sm mb-4 flex items-center gap-4 lg:hidden">
        <button onClick={() => router.back()} className="text-purple-800 font-bold text-xl">❮</button>
        <h2 className="text-lg font-black text-gray-800">تفاصيل الطلب</h2>
      </div>

    
      <div className="max-w-3xl mx-auto px-4 lg:px-0 lg:mt-8">
        
     
        <h2 className="hidden lg:block text-2xl font-black mb-6 text-[#3A1C56]">تفاصيل طلب المكتب</h2>

        <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          
          {/* رأس البطاقة */}
          <div className="p-6 border-b border-gray-50 bg-gradient-to-l from-purple-50 to-white">
            <h3 className="text-xl lg:text-2xl font-black text-[#3A1C56]">
              {office.officeName}
            </h3>
            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase">
               {office.status === 'approved' ? '✅ مقبول' : office.status === 'rejected' ? '❌ مرفوض' : '⏳ قيد الانتظار'}
            </div>
          </div>

      
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
            <InfoBox label="المدينة" value={office.cityName} />
            <InfoBox label="الموقع" value={office.location} />
            <InfoBox label="العنوان التفصيلي" value={office.fullAddress} />
            <InfoBox label="البريد الإلكتروني" value={office.email} isEmail />
            <InfoBox label="رقم الهاتف" value={office.phone} />
            <InfoBox label="السعة الاستيعابية" value={office.capacity} />
<InfoBox label="ساعات العمل" value={office.workingHours} />
            <InfoBox label="مدير المكتب" value={office.managerName} />
            <div className="md:col-span-2">
               <InfoBox label="ملاحظات إضافية" value={office.notes || "لا يوجد"} />
            </div>
          </div>

     
          {(!office.status || office.status === "pending") && (
            <div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => handleAction("approve")} 
                className="flex-1 bg-[#3A1C56] hover:bg-[#2a1442] text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 text-center"
              >
                قبول المكتب
              </button>
              <button 
                onClick={() => handleAction("reject")} 
                className="flex-1 bg-white hover:bg-red-50 text-red-600 font-bold py-4 rounded-2xl transition-all active:scale-95 text-center border border-red-100"
              >
                رفض الطلب
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


function InfoBox({ label, value, isEmail = false }) {
  return (
    <div className="flex flex-col border-b border-gray-50 pb-2 md:border-none">
   
      <span className="text-[10px] text-purple-400 font-bold mb-1 tracking-wider uppercase">{label}</span>
      <span className={`text-sm font-bold text-gray-700 ${isEmail ? 'break-all' : ''}`}>
        {value}
      </span>
    </div>
  );
}