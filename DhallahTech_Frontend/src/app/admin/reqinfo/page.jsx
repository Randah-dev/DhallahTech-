"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getOfficeDetails, reviewOfficerRequest } from "@/services/api"; 

export default function OfficeDetailsPage() {
  const { id } = useParams(); 
  const router = useRouter();
  const [office, setOffice] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await getOfficeDetails(id); 
        setOffice(response.data?.data || response.data);
      } catch (error) {
        console.error("خطأ في جلب التفاصيل:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  // 2. دالة التعامل مع القبول أو الرفض
  const handleAction = async (action) => {
    try {
      const response = await reviewOfficerRequest({ 
        requestId: id, 
        action: action 
      });

      if (response.status === 200 || response.data.success) {
        alert(action === "approve" ? "✅ تم قبول المكتب بنجاح" : "❌ تم رفض الطلب");
        router.push("/admin/offices"); 
      }
    } catch (error) {
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
    <div className="AdminContent" dir="rtl">
     
      <h2 className="text-2xl font-bold mb-6">تفاصيل طلب المكتب</h2>

      <div className="card p-8 bg-white border rounded-2xl shadow-sm">
        {/* اسم المكتب */}
        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#3A1C56", marginBottom: "25px" }}>
          {office.officeName}
        </h3>

        {/* المعلومات */}
        <div className="space-y-4 text-right">
          <p className="info-row"><span className="label">المدينة:</span> {office.cityName}</p>
          <p className="info-row"><span className="label">الموقع:</span> {office.location}</p>
          <p className="info-row"><span className="label">العنوان التفصيلي:</span> {office.fullAddress}</p>
          <p className="info-row"><span className="label">البريد الإلكتروني:</span> {office.email}</p>
          <p className="info-row"><span className="label">رقم الهاتف:</span> {office.phone}</p>
          <p className="info-row"><span className="label">السعة الاستيعابية:</span> {office.capacity}</p>
          <p className="info-row"><span className="label">ساعات العمل:</span> {office.workingHours}</p>
          <p className="info-row"><span className="label">مدير المكتب:</span> {office.managerName}</p>
          <p className="info-row"><span className="label">ملاحظات إضافية:</span> {office.notes || "لا يوجد"}</p>

          {/* الحالة الحالية */}
          <div className="mt-6">
            <span className="status">الحالة: {office.status === 'approved' ? 'مقبول' : office.status === 'rejected' ? 'مرفوض' : 'قيد الانتظار'}</span>
          </div>
        </div>

        
        {(!office.status || office.status === "pending") && (<div className="actions mt-10 flex gap-4">
            <button 
              onClick={() => handleAction("approve")} 
              className="btn-accept-box flex-1 py-3 text-lg"
            >
              قبول المكتب
            </button>
            <button 
              onClick={() => handleAction("reject")} 
              className="btn-reject-box flex-1 py-3 text-lg"
            >
              رفض الطلب
            </button>
          </div>
        )}
      </div>
    </div>
  );
}