"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";


export default function EditReportPage({ params }) {
  const unwrappedParams = use(params); 
  const id = unwrappedParams.id;
  const router = useRouter();
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    const dataString = sessionStorage.getItem('selectedReport');
    if (dataString) {
      try {
        const report = JSON.parse(dataString);
        setItemName(report.itemName || "");
        setCategory(report.category || "");
        setLocation(report.location || "");
        setDescription(report.description || "");
      } catch (e) {
        console.error("Error parsing report data:", e);
      }
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      setLoading(true);
   
    const response = await fetch(`http://localhost:5000/api/items/update-status/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          itemName,
          category,
          location,
          description
        })
      });

      if (response.ok) {
        alert(" تم تحديث بيانات البلاغ بنجاح!");
        router.back(); 
      }
    } catch (error) {
      console.error("Error updating report:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8" dir="rtl">
      <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] border border-gray-200 p-6 md:p-10 shadow-sm text-right">
        
        <h1 className="text-2xl font-black text-[#5E3085] mb-6"> تعديل بيانات البلاغ</h1>
        
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">اسم العنصر</label>
            <input 
              type="text" 
              value={itemName} 
              onChange={(e) => setItemName(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5E3085]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">التصنيف</label>
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5E3085]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">مكان العثور</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5E3085]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">الوصف التفصيلي</label>
            <textarea 
              rows="4"
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5E3085]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#5E3085] hover:bg-[#4a236d] text-white font-bold text-sm rounded-xl transition-all disabled:bg-gray-300"
            >
              {loading ? "جاري الحفظ..." : "حفظ التعديلات"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-sm rounded-xl transition-all"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}