"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import FormField from "@/components/commonForm/FormField";
import { submitComplaint,deleteComplaint } from "@/services/api";

export default function ComplaintsPage() {
  const router = useRouter();

  
  const [formData, setFormData] = useState({ title: "", details: "" });
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null); 

 
  const fetchMyComplaints = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
     const response = await fetch('http://localhost:5000/api/complaints/my', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
   
        const data = result.data?.complaints || result.data?.data?.complaints || [];
        

        const sortedData = data.sort((a, b) => {
          const aHasReply = a.adminResponse && a.adminResponse.trim() !== "";
          const bHasReply = b.adminResponse && b.adminResponse.trim() !== "";
          
        
          if (aHasReply && !bHasReply) return -1;
          if (!aHasReply && bHasReply) return 1;
          
         
          const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
          const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
          
          return timeB - timeA; 
        });

        setComplaints(sortedData); 
      }
    } catch (err) {
      console.error("خطأ في جلب الشكاوى :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyComplaints();
  }, []);

  // دالة إرسال الشكوى
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.details) {
      alert("الرجاء ملء جميع الحقول");
      return;
    }

    try {
      setLoading(true);
      const response = await submitComplaint(formData);
      
      if (response.status === 201 || response.status === 200) {
        alert("تم إرسال الشكوى بنجاح ✅");
        setFormData({ title: "", details: "" });
        fetchMyComplaints(); 
      }
    } catch (error) {
      console.error("خطأ في الإرسال:", error);
      alert(error.response?.data?.message || "حدث خطأ أثناء إرسال الشكوى");
    } finally {
      setLoading(false);
    }
  };


  const isEditable = (comp) => {
    if (comp.adminResponse || comp.status === "تم الحل") return false;
    if (!comp.createdAt) return false;
    
    const createdTime = comp.createdAt._seconds ? new Date(comp.createdAt._seconds * 1000) : new Date(comp.createdAt);
    const now = new Date();
    const diffInMinutes = (now - createdTime) / (1000 * 60);
    
    return diffInMinutes < 60; 
  };

  const handleDeleteComplaint = async (complaintID) => {
  if (!window.confirm("هل أنت متأكد من حذف هذه الشكوى؟")) return;
  try {
    const token = localStorage.getItem('token');
    
    
  const response = await deleteComplaint(complaintID);
    
    
   if (response.status === 200 || response.status === 204) {
      alert("تم حذف الشكوى بنجاح ✅");
      setComplaints(prev => prev.filter(comp => comp.complaintID !== complaintID));
    }
  } catch (err) {
    console.error("خطأ في الحذف:", err);
    alert(err.response?.data?.message || "حدث خطأ أثناء حذف الشكوى");
  } finally {
    setLoading(false);
  }
};

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10 space-y-10" dir="rtl">

      
      <section className="card max-w-4xl mx-auto shadow-md rounded-[1.5rem] p-8 bg-white border border-gray-100">
        <h2 className="text-xl font-bold mb-8 text-right text-gray-500 border-b pb-4">تقديم شكوى جديدة</h2>
        
        <form className="formWrap" onSubmit={handleSubmit}>
          <FormField 
            label="موضوع الشكوى" 
            placeholder="أدخل موضوع الشكوى..." 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          
          <FormField 
            label="التفاصيل" 
            placeholder="اكتب تفاصيل شكواك هنا..." 
            isTextArea={true} 
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
          />

          <button 
            type="submit" 
            disabled={loading}
            className={`bigSubmit w-full mt-6 py-3 rounded-xl transition-all text-white font-bold 
              ${loading ? 'bg-gray-400' : 'bg-purple-700 hover:bg-purple-800'}`}
          >
            {loading ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h3 className="text-xl font-bold mb-6 text-right text-gray-800">سجل شكواك المرفوعة</h3>

        {complaints.length === 0 ? (
          <p className="text-center text-gray-500 py-6 bg-white border rounded-2xl">لا توجد شكاوى حالياً</p>
        ) : (
          complaints.map((comp) => {
            const hasReply = comp.adminResponse && comp.adminResponse.trim() !== "";

            return (
              <div 
                key={comp.complaintID}
                className="card border rounded-2xl shadow-sm bg-white overflow-hidden transition-all"
              >
              
                <div
                  onClick={() => toggle(comp.complaintID)}
                  className="p-5 cursor-pointer flex justify-between items-center bg-white hover:bg-gray-50/50"
                >
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-purple-700">📋</span>
                      <span className="font-bold text-gray-800 text-base">
                        {comp.title}
                      </span>
                    </div>
                
                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${hasReply || comp.status === 'تم الحل' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {hasReply || comp.status === 'تم الحل' ? 'تم الرد' : (comp.status || 'قيد الانتظار')}
                    </span>
                  </div>

                  <span className="text-gray-400">
                    {openId === comp.complaintID ? "▲" : "▼"}
                  </span>
                </div>

                {openId === comp.complaintID && (
                  <div className="p-5 border-t bg-gray-50 rounded-b-2xl space-y-4">
                    
                    <div className="flex flex-col">
                      <label className="mb-2 font-bold text-gray-700 text-sm">تفاصيل الشكوى</label>
                      <div className="bg-white p-4 rounded-xl border text-right text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                        {comp.details}
                      </div>
                    </div>

                    {isEditable(comp) ? (
                      <div className="flex justify-end gap-2 pt-2">
                        <button 
    onClick={() => router.push(`/offecer/complaints/edit/${comp.complaintID}`)} // 👈 تأكدي من حفظ هذا السطر بوجود /offecer/
    className="px-4 py-2 bg-white border border-purple-200 hover:border-purple-500 text-purple-700 font-bold text-xs rounded-xl transition-all shadow-sm"
  >
                           تعديل البيانات
                        </button>
                        <button 
                          onClick={() => handleDeleteComplaint(comp.complaintID)}
                          className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-xl transition-all"
                        >
                           حذف الشكوى
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl mt-2">
                        <p className="text-green-800 font-bold mb-1 text-xs flex items-center gap-1">
                          💬 رد الإدارة ومكتب المفقودات:
                        </p>
                        <p className="text-green-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                          {comp.adminResponse || "الشكوى قيد المراجعة والتدقيق حالياً من قِبل موظفي المكتب."}
                        </p>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

    </div>
  );
}