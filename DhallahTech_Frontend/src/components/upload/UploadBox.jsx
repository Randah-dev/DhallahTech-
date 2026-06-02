"use client";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { addItem , analyzeImage} from "@/services/api"; 

export default function UploadBox({ userRole: initialRole }) {
    const router = useRouter();
   
    const [fileName, setFileName] = useState("لم يتم اختيار ملف");
    const [location, setLocation] = useState("");
    const [foundDate, setFoundDate] = useState(new Date().toISOString().slice(0, 16));
    const [description, setDescription] = useState("");
    const [hasPhoto, setHasPhoto] = useState(null);
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [type, setType] = useState("Lost");
  const [userRole, setUserRole] = useState(initialRole || "customer");

   const [verificationQuestion, setVerificationQuestion] = useState("");
   const [correctAnswer, setCorrectAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);
    const triggerUpload = () => fileInputRef.current?.click();
    const handleFileChange = (e) => setFileName(e.target.files[0]?.name || "لم يتم اختيار ملف");
   const [aiDescription, setAiDescription] = useState(""); 
    const [isAnalyzing, setIsAnalyzing] = useState(false);  
  
   
    const handleAnalyzeImage = async () => {
    if (!fileInputRef.current?.files[0]) {
        alert("الرجاء اختيار صورة أولاً");
        return;
    }
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);
    try {
        const response = await analyzeImage(formData);
        setAiDescription(response.data.description);
        setDescription(response.data.description);
    } catch (err) {
        alert("فشل تحليل الصورة");
    } finally {
        setIsAnalyzing(false);
    }
    }; 

useEffect(() => {
 
  if (initialRole === "guest") {
    setUserRole("GUEST");
    return;
  }
  
  if (initialRole) {
    setUserRole(initialRole.toUpperCase());
    return;
  }

 
  const savedRole = localStorage.getItem("role");

  if (savedRole) {
    setUserRole(savedRole.toUpperCase());
  } else {
  
    setUserRole("CUSTOMER"); 
  }
}, [initialRole]);
//
useEffect(() => {
  if (userRole?.toUpperCase() === "OFFICER") {
    
    const savedOfficeName = localStorage.getItem("officeName") || "مكتب المفقودات";
    setLocation(`${savedOfficeName} - `);
  }
}, [userRole]);


const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (isSubmitting) return;
    const token = localStorage.getItem('token');
    if (!itemName.trim() || !category || !type || !location.trim() || !foundDate) {
  alert("الرجاء تعبئة جميع البيانات المطلوبة");
  return;
}

if (hasPhoto === null) {
  alert("الرجاء تحديد هل لديك صورة أم لا");
  return;
}

if (hasPhoto === false && !description.trim()) {
  alert("الرجاء كتابة وصف يدوي للعنصر");
  return;
}
const finalDescription = hasPhoto === true ? aiDescription : description;

    if (!finalDescription.trim()) {
        alert("الرجاء كتابة وصف للعنصر أو إنشاء وصف بالذكاء الاصطناعي");
        return;
    }
setIsSubmitting(true);

    
  const reportData = { itemName, category, color, type, location, date: foundDate, description: finalDescription, verificationQuestion: verificationQuestion || "", 
    correctAnswer: correctAnswer || "" };
    try {
      
        let response;
        response = await addItem(reportData);
        const result = response.data; 
    if (result.success) {
      const currentRole = userRole?.toUpperCase();
      if (currentRole === "OFFICER") {
        alert( "تم إنشاء البلاغ بنجاح" );
        router.push("/offecer/my-reports");
        return;
    } 
      else if (currentRole === "GUEST") {
     const matches = result.data?.matches || [];
     sessionStorage.setItem('aiMatches', JSON.stringify(matches));
      alert("تم إنشاء البلاغ بنجاح");
       router.push(`/guest/matches?itemId=${result.data?.id}`);
  return;
}else {
        const matches = result.data?.matches || result.matches || [];
        console.log("المطابقات المستلمة:", matches);
        sessionStorage.setItem('aiMatches', JSON.stringify(matches));
        router.push(`/customer/matches?itemId=${result.data?.id}`);
    }
} else {
    alert(`❌ فشل: ${result.message || "حدث خطأ في السيرفر"}`);
}
    } catch (error) {
    console.error("Front-end Error:", error);
    setIsSubmitting(false);
    
    const serverErrorMessage = error.response?.data?.message || error.response?.data?.error || "حدث خطأ أثناء الإرسال";
    
    
    if (error.message === "Network Error") {
       alert("❌ فشل الاتصال بالسيرفر، تأكدي من تشغيل الباك أند");
    } else {
       alert(`❌ رفض السيرفر الطلب: ${serverErrorMessage}`);
    }
  }
};
    return (
        <div className="w-full lg:max-w-4xl mx-auto bg-[#F8F9FA] p-4 md:p-6 lg:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-200" dir="rtl">
           
           <div className="space-y-5 md:space-y-8 text-right">
                
                
             <div className="bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all">
                    <h3 className="font-bold text-gray-800 mb-8 text-xl flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#5E3085] rounded-full"></span>
                        بيانات العنصر الأساسية
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <label className="block text-sm font-black text-gray-600 mb-2 mr-2">اسم العنصر</label>
                            <input value={itemName} onChange={(e) => setItemName(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all" placeholder="مثال: ساعة يد" />
                        </div>
                       <div>
    <label className="block text-sm font-black text-gray-600 mb-2 mr-2">التصنيف</label>
    <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
       className="w-full p-3.5 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all text-sm md:text-base"
         >
        <option value="" disabled>اختر التصنيف المناسب</option>
        <option value="Personal Tech">الأجهزة الشخصية والإلكترونيات (Personal Tech)</option>
        <option value="Cables & Power">ملحقات الطاقة والكابلات (Cables & Power)</option>
        <option value="Valuables">المقتنيات الثمينة والصغيرة (Valuables)</option>
        <option value="Bags & Containers">الحقائب والأوعية (Bags & Containers)</option>
        <option value="Academic Supplies">المستلزمات الأكاديمية والكتب (Academic Supplies)</option>
        <option value="IDs & Documents">الهويات والبطاقات الرسمية (IDs & Documents)</option>
        <option value="Clothing">الملابس والمظهر (Clothing)</option>
        <option value="Medical & Personal Care">مستلزمات طبية وشخصية (Medical & Personal Care)</option>
        <option value="Miscellaneous">أخرى (Miscellaneous)</option>
    </select>
</div>
                        <div>
                            <label className="block text-sm font-black text-gray-600 mb-2 mr-2">اللون</label>
                            <input value={color} onChange={(e) => setColor(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all" placeholder="مثال: أسود" />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-gray-600 mb-2 mr-2">نوع البلاغ</label>
                            <select 
                              value={type}
                              onChange={(e) => setType(e.target.value)}
                           className="w-full p-3.5 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all text-sm md:text-base"
                              >
                             <option value="Lost">مفقود</option>

                            {userRole?.toUpperCase() === "OFFICER" && (
                            <option value="Found">موجود</option>
                            )}
                         </select>
                        </div>
                    </div>
                </div>

               
              <div className="bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all">
                   <h3 className="font-bold text-gray-800 mb-4 text-sm md:text-lg text-center px-2">
        هل لديك صورة للغرض المفقود (لا تحتوي على معلومات حساسة)؟
    </h3>
<div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
        <button type="button" onClick={() => setHasPhoto(true)} className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${hasPhoto === true ? 'bg-[#5E3085] text-white' : 'bg-white text-[#5E3085] border border-[#5E3085]'}`}>
            نعم، لدي صورة
        </button>
        <button type="button" onClick={() => setHasPhoto(false)} className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${hasPhoto === false ? 'bg-[#5E3085] text-white' : 'bg-white text-[#5E3085] border border-[#5E3085]'}`}>
            لا، سأصفه يدوياً
        </button>
    </div>
</div>
           {hasPhoto === true && (
              <div className="bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all">
                    <h3 className="font-bold text-gray-800 mb-8 text-xl flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#5E3085] rounded-full"></span>
                         رفع صورة
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="w-full">
                                <label className="block text-sm font-black text-gray-600 mb-3 mr-2">رفع صورة</label>
                                <div className="flex items-center gap-3 p-3 border-2 border-gray-100 rounded-2xl bg-gray-100 shadow-inner" dir="ltr">
                                    <button type="button" onClick={triggerUpload} className="px-5 py-2 bg-white text-[#5E3085] text-xs rounded-xl border border-gray-300 font-black shadow-sm hover:bg-[#5E3085] hover:text-white transition-all">
                                        Choose File
                                    </button>
                                    <span className="text-gray-500 text-sm truncate flex-1 font-bold">{fileName}</span>
                                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange}/>
                                </div>
                            </div>
                            <button type="button" onClick={handleAnalyzeImage} disabled={isAnalyzing} className="w-full h-14 bg-white border-2 border-[#5E3085] text-[#5E3085] rounded-2xl font-black text-sm hover:bg-[#F3EBFF] transition-all shadow-md">
                                <i className="fas fa-magic ml-2"></i> {isAnalyzing ? "جاري التحليل..." : "إنشاء وصف بالذكاء الاصطناعي"}
                            </button>
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-black text-gray-600 mb-3 mr-2 ">الوصف (قابل للتعديل)</label>
                            <textarea 
                            value={aiDescription}
                                onChange={(e) => setAiDescription(e.target.value)}
                                className="w-full p-4 bg-gray-100 rounded-xl md:rounded-[2rem] h-28 md:h-36 outline-none border-2 border-transparent focus:border-[#5E3085] text-base text-right resize-none transition-all shadow-inner focus:bg-white text-gray-800" 
                                placeholder="الوصف المنشأ بالذكاء الاصطناعي..."
                            ></textarea>
                        </div>
                    </div>
                </div>
            )}
             {hasPhoto === false && (

                <div className="bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all">
                        <h3 className="font-bold text-gray-800 mb-8 text-xl flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#5E3085] rounded-full"></span>
                        وصف يدوي
                    </h3>
                    <div className="w-full">
                        <label className="block text-sm font-black text-gray-600 mb-3 mr-2">وصف يدوي مفصل</label>
                        <textarea 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-5 bg-gray-100 rounded-[2rem] h-48 outline-none border-2 border-transparent focus:border-[#5E3085] text-base text-right resize-none transition-all shadow-inner focus:bg-white text-gray-700" 
                            placeholder="اكتب وصف العنصر بالتفصيل (اللون، العلامة التجارية، مكان العثور)..."
                        ></textarea>
                    </div>
                </div>
                )}

                <div className="bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all">
                       <h3 className="font-bold text-gray-800 mb-8 text-xl flex items-center gap-3">
                        <span className="w-2 h-8 bg-[#5E3085] rounded-full"></span>
                        تحديد المكان والوقت 
                    </h3>
                    <div className="w-full">
                        <label className="block text-sm font-black text-gray-600 mb-2 mr-2">المكان</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none transition-all text-right shadow-inner" placeholder="حدد مكان المفقود ..." />
                    </div>
                    <div className="w-full">
                        <label className="block text-sm font-black text-gray-600 mb-2 mr-2">الوقت والتاريخ</label>
                        <input type="datetime-local" value={foundDate} onChange={(e) => setFoundDate(e.target.value)} className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none transition-all text-left shadow-inner" />
                    </div>
                </div>

             {userRole?.toUpperCase() === "OFFICER" && (
            <div className="bg-[#F1F3F5] p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 border-gray-200 space-y-4 md:space-y-6">
                 <div className="w-full">
            <label className="block text-sm md:text-base font-black text-gray-700 mb-2 mr-2 text-right">
                      سؤال التحقق (اختياري)
            </label>
            <input 
                type="text"
               value={verificationQuestion} 
                onChange={(e) => setVerificationQuestion(e.target.value)} 
    
                className="w-full p-5 bg-white rounded-2xl border-2 border-gray-200 outline-none focus:border-[#5E3085] text-base text-right shadow-sm transition-all" 
                placeholder="ادخل سؤال بإجابة ثابته لا تتغير مثل :ماهو رقم الهوية داخل المحفظة؟"
            />
        </div>
        <div className="w-full">
            <label className="block text-base font-black text-gray-700 mb-3 mr-4 text-right ">
                الإجابة الصحيحة
            </label>
            <input 
                type="text"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)} 
                className="w-full p-5 bg-white rounded-2xl border-2 border-[#5E3085]/20 outline-none focus:border-[#5E3085] text-base text-right shadow-sm transition-all" 
                placeholder="ادخل الإجابة الدقيقة هنا..."
            />
            <p className="text-[15px] text-gray-400 mt-2 mr-4">
                * سيقوم النظام بمقارنة إجابة المستخدم بهذه الكلمة بدقة.
            </p>
        </div>
    </div>
)}

                 <button 
                   onClick={handleSubmit} 
                    disabled={isSubmitting} 
                className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-black text-white shadow-lg transform active:scale-95 flex items-center justify-center gap-2.5 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#5E3085] hover:bg-[#4a2669]'}`}
                        >
                      {isSubmitting ? (
                      <>
                      <i className="fas fa-spinner fa-spin text-xl"></i> 
                             جاري الحفــــظ...
                         </>
                        ) : (
                            <>
                        <i className="fas fa-save text-xl"></i>
                              حفــــظ 
                            </>
                              )}
                        </button>
            </div>
        </div>
    );
}