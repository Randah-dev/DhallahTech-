"use client";
import { useState, useEffect } from "react";
import FormField from "@/components/commonForm/FormField";
import { getAllComplaints, respondToComplaint } from "@/services/api";

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [adminResponse, setAdminResponse] = useState(""); 

  // 1. دالة جلب الشكاوى
  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const response = await getAllComplaints();
      const data = response.data?.data?.complaints || [];
      setComplaints(data);
    } catch (error) {
      console.error("خطأ في جلب الشكاوى:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // 2. دالة إرسال الرد
  const handleSendResponse = async (complaintID) => {
    if (!adminResponse.trim()) {
      alert("الرجاء كتابة الرد أولاً");
      return;
    }

    try {
      const response = await respondToComplaint(complaintID, { response: adminResponse });
      if (response.status === 200 || response.data.success) {
        alert("✅ تم إرسال الرد بنجاح");
        setAdminResponse("");
        fetchComplaints(); 
      }
    } catch (error) {
      console.error("خطأ في الرد:", error);
      alert("⚠️ حدث خطأ أثناء إرسال الرد");
    }
  };

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
    setAdminResponse(""); 
  };

  if (loading) return  <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
      </div>


  return (
    <div className="flex min-h-screen bg-gray-50">
   

      <div className="flex-1 p-10 space-y-6" dir="rtl">
        <h2 className="text-2xl font-bold mb-6 text-right">الشكاوى الواردة</h2>

        {complaints.length === 0 ? (
          <p className="text-center text-gray-500">لا توجد شكاوى حالياً</p>
        ) : (
          complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="card max-w-4xl mx-auto border rounded-2xl shadow-sm bg-white mb-4"
            >
              {/* الهيدر */}
              <div
                onClick={() => toggle(complaint.id)}
                className="p-5 cursor-pointer flex justify-between items-center"
              >
                <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
      <span className="text-purple-700">👤</span>
      <span className="font-bold text-gray-800" style={{ fontSize: '16px' }}>
        {complaint.userName || "مستخدم غير معروف"}
      </span>
    </div>
                  <p className="text-gray-600 font-medium">{complaint.title}</p>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${complaint.status === 'تم الحل' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {complaint.status || 'قيد الانتظار'}
                  </span>
                </div>

                <span className="text-gray-400">
                  {openId === complaint.id ? "▲" : "▼"}
                </span>
              </div>

              {/* التفاصيل والرد */}
              {openId === complaint.id && (
                <div className="p-5 border-t bg-gray-50 rounded-b-2xl">
                  <div className="flex flex-col mb-4">
                    <label className="fieldTitle mb-2 font-bold text-gray-700">تفاصيل الشكوى</label>
                    <div className="bg-white p-4 rounded-lg border text-right text-gray-800">
                      {complaint.details}
                    </div>
                  </div>
{complaint.status !== 'تم الحل' ? (
                    <>
                      <FormField
                        label="الرد على الشكوى"
                        placeholder="اكتب الرد هنا..."
                        isTextArea={true}
                        value={adminResponse}
                        onChange={(e) => setAdminResponse(e.target.value)}
                      />

                      <button 
                        onClick={() => handleSendResponse(complaint.id)}
                        className="bigSubmit w-full mt-4 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold transition-all"
                      >
                     ارسال الرد
                      </button>
                    </>
                  ) : (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-bold mb-1 text-sm">رد الإدارة السابق:</p>
                      <p className="text-green-700 text-sm">{complaint.adminResponse}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
  }