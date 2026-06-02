"use client";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import FormField from "@/components/commonForm/FormField";
import { updateComplaint } from "@/services/api";

export default function EditComplaintPage({ params: paramsPromise }) {
  const params = use(paramsPromise); 
  const complaintID = params.id;
  const router = useRouter();

  const [formData, setFormData] = useState({ title: "", details: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchComplaintDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/complaints/my", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.ok) {
          const data = result.data?.complaints || result.data?.data?.complaints || result.complaints || [];
          const currentComplaint = data.find((c) => c.complaintID === complaintID);

          if (currentComplaint) {
            setFormData({
              title: currentComplaint.title,
              details: currentComplaint.details,
            });
          } else {
            alert("الشكوى غير موجودة");
            router.push("/offecer/complaints");
          }
        }
      } catch (err) {
        console.error("خطأ في جلب بيانات الشكوى للفرونت:", err);
      } finally {
        setLoading(false);
      }
    };

    if (complaintID) {
      fetchComplaintDetails();
    }
  }, [complaintID, router]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.details) {
      alert("الرجاء ملء جميع الحقول");
      return;
    }

    try {
      setSubmitting(true);
      const response = await updateComplaint(complaintID, formData);

      if (response.status === 200 || response.status === 204) {
        alert("تم تعديل الشكوى بنجاح ✅");
        router.push("/offecer/complaints"); 
        router.refresh();
      } else {
        alert("حدث خطأ أثناء تعديل البيانات");
      }
    } catch (error) {
      console.error("خطأ في الاتصال أثناء التحديث:", error);
      alert("حدث خطأ في الاتصال بالخادم");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10" dir="rtl">
      <section className="card max-w-4xl mx-auto shadow-md rounded-[1.5rem] p-8 bg-white border border-gray-100">
        <h2 className="text-xl font-bold mb-8 text-right text-gray-700 border-b pb-4">تعديل الشكوى المرفوعة</h2>
        
        <form onSubmit={handleUpdateSubmit} className="space-y-4">
          <FormField 
            label="موضوع الشكوى الجديد" 
            placeholder="تعديل العنوان..." 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          
          <FormField 
            label="تفاصيل الشكوى الجديدة" 
            placeholder="تعديل التفاصيل..." 
            isTextArea={true} 
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
          />

          <div className="flex gap-4 mt-6">
            <button 
              type="submit" 
              disabled={submitting}
              className={`w-full py-3 rounded-xl transition-all text-white font-bold 
                ${submitting ? 'bg-purple-400' : 'bg-purple-800 hover:bg-purple-900'}`}
            >
              {submitting ? "جاري الحفظ..." : "حفظ التعديلات"}
            </button>
            
            <button 
              type="button"
              onClick={() => router.push("/offecer/complaints")}
              className="w-1/3 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold transition-all"
            >
              إلغاء
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}