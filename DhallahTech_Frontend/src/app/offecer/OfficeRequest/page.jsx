"use client";
import { useState, useEffect } from "react"; 
import { useRouter } from "next/navigation";
import { registerOffice } from "@/services/api"; 
import FormField from "@/components/commonForm/FormField";

export default function OfficeRequestPage() {
  const router = useRouter();
 
  const [formData, setFormData] = useState({
    cityName: "",
    officeName: "",
    location: "",
    fullAddress: "",
    email: "",
    phone: "",
    capacity: "",
    workingHours: "",
    managerName: "",
    notes: "",
  });

 const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkExistingRequest = async () => {
      try {
        const token = localStorage.getItem('token');
    
        const response = await fetch('http://localhost:5000/api/officer/my-office', {
            headers: { 'Authorization': `Bearer ${token}` }
        }); 
        if (response.ok) {
          const result = await response.json();
         

          const officeData = result.data?.office || result.office || result.data;
          
          if (officeData?.status === "approved" || officeData?.status === "active") {
          
            router.push("/offecer/dashboard"); 
          } else {
            
            router.push("/offecer/request-status"); 
          }
        } else {
         
          setChecking(false);
        }
      } catch (error) {
        console.error("خطأ في فحص الطلبات السابقة:", error);
        setChecking(false);
      }
    };
    checkExistingRequest();
  }, [router]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { notes, ...requiredFields } = formData;
    const hasEmptyField = Object.values(requiredFields).some(value => value.trim() === "");

    if (hasEmptyField) {
      alert("الرجاء ملء جميع الخانات الإجبارية ⚠️");
      return;
    }
    const phoneRegex = /^\+966\d{9}$/;
    const formattedPhone = formData.phone.trim();

    if (!phoneRegex.test(formattedPhone)) {
      alert("صيغة رقم الهاتف غير صحيحة ❌\nيجب أن يبدأ بـ +966 متبوعاً بـ 9 أرقام (مثال: +966512345678)");
      return;
    }
    setLoading(true);
    try {
      await registerOffice({
        ...formData,
        phone: formattedPhone 
      });
      alert("تم إرسال طلب إنشاء المكتب بنجاح ✅");
      router.push("/offecer/request-status");
    }catch (err) {
  console.error("تفاصيل الخطأ:", err);
  
  
  const serverMessage = err.response?.data?.error || err.response?.data?.message || "حدث خطأ أثناء الإرسال";
  
  alert(` فشل الإرسال: ${serverMessage}`);

    } finally {
      setLoading(false);
    }
  };
if (checking) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
    </div>
  );

  return (
    <div className="space-y-10 p-4 md:p-8 max-w-3xl mx-auto" dir="rtl">
      <section className="upload-container">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
  طلب إنشاء مكتب جديد
</h2>

<h3 className="text-sm md:text-base font-medium mb-8 text-center text-gray-500 px-2 leading-relaxed">
  لكي يتم الوصول لكل المزايا ولوحة التحكم يجب توثيق مكتب المفقودات الخاص بك على النظام.
</h3>
        
      
        <form className="formWrap" onSubmit={handleSubmit}>
          <div className="twoCols">
            <FormField 
              label="المدينة" 
              placeholder="مثال: مكة المكرمة" 
              value={formData.cityName} 
              required={true}
              onChange={(e) => setFormData({...formData, cityName: e.target.value})} 
            />
            <FormField 
              label="اسم المكتب" 
              placeholder="مثال: مكتب مفقودات الحجاز مول" 
              value={formData.officeName} 
              required={true}
              onChange={(e) => setFormData({...formData, officeName: e.target.value})}
            />
          </div>

          <FormField 
            label="موقع المكتب" 
            placeholder="اسم الشارع- الحي" 
            value={formData.location} 
            required={true}
            onChange={(e) => setFormData({...formData, location: e.target.value})} 
          />
          <FormField 
            label="العنوان التفصيلي" 
            placeholder="اكتب العنوان..." 
            isTextArea={true} 
            value={formData.fullAddress} 
            required={true}
            onChange={(e) => setFormData({...formData, fullAddress: e.target.value})} 
          />

          <div className="twoCols">
            <FormField 
              label="البريد الإلكتروني" 
              placeholder="office@example.com" 
              type="email" 
              value={formData.email}
              required={true}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            <FormField 
              label="رقم الهاتف" 
              placeholder="+966512345678"
              type="tel" 
              value={formData.phone} 
              required={true}
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            />
          </div>

          <div className="twoCols">
            <FormField 
              label="سعة المكتب(عدد العناصر المحتملة)" 
              placeholder="500" 
              type="number" 
              value={formData.capacity} 
              required={true}
              onChange={(e) => setFormData({...formData, capacity: e.target.value})} // (سطر معدل)
            />
            <FormField 
              label="ساعات العمل" 
              placeholder="8 صباحاً - 8 مساءً" 
              value={formData.workingHours} 
              required={true}
              onChange={(e) => setFormData({...formData, workingHours: e.target.value})} // (سطر معدل)
            />
          </div>
          <FormField 
            label="مدير المكتب" 
            placeholder="اسم مدير المكتب" 
            value={formData.managerName} 
            required={true}
            onChange={(e) => setFormData({...formData, managerName: e.target.value})} // (سطر معدل)
          />
          <FormField 
         label="ملاحظات إضافية (اختياري)"
            placeholder="أي ملاحظات..." 
            isTextArea={true} 
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})} 
          />

        
          <button type="submit" disabled={loading} className="bigSubmit mt-6 w-full md:w-auto px-8 py-3">
            {loading ? "جاري الإرسال..." : "إرسال"}
          </button>
        </form>
      </section>
    </div>
  );
}