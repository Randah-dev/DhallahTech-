"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token');
      try {
       
        const response = await fetch('http://localhost:5000/api/items/officer-reports', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        const result = await response.json();
        
       if (response.ok && result.success) {
  const rawData = result.data || [];
  

const sortedData = rawData.sort((a, b) => {
    const aDone = ['claimed', 'matched'].includes(a.status?.toLowerCase().trim());
    const bDone = ['claimed', 'matched'].includes(b.status?.toLowerCase().trim());


    if (aDone && !bDone) return -1;
    if (!aDone && bDone) return 1;

   
    const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
    const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
    return timeB - timeA; 
});

  // تحويل المعرفات
  const normalizedData = sortedData.map(item => ({
    ...item,
    _id: item.id || item._id
  }));

  setReports(normalizedData);

        } else {
          console.error("السيرفر أرجع استجابة غير ناجحة:", result.message);
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);
const getStatusStyle = (status) => {
    const cleanStatus = status?.toLowerCase().trim() || '';
    
    switch (cleanStatus) {
      case 'claimed': 
      case 'delivered':
      case 'تم التسليم':
        return "bg-green-100 text-green-600";
      case 'matched': 
      case 'تمت المطابقة':
        return "bg-purple-100 text-[#5E3085]";
      default: 
        return "bg-amber-100 text-amber-600"; 
    }
  };
const getStatusLabel = (status) => {
    const cleanStatus = status?.toLowerCase().trim() || '';
    
    switch (cleanStatus) {
      case 'claimed':
      case 'delivered':
      case 'تم التسليم':
        return "تم التسليم";
      case 'matched':
      case 'تمت المطابقة':
        return "تمت المطابقة ";
      default:
        return "بالانتظار"; 
    }
  };

  if (loading) return <div className="p-10 text-center font-bold text-[#5E3085]">جاري تحميل بلاغات المكتب...</div>;

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8" dir="rtl">
      <div className="max-w-5xl mx-auto">
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-[#5E3085]">بلاغات المكتب المرفوعة</h1>
            <p className="text-gray-500 text-xs md:text-sm">إدارة العناصر المرفوعة ومتابعة حالتها</p>
          </div>
        </header>

        {reports.length === 0 ? (
          <div className="bg-white p-12 md:p-20 rounded-3xl text-center shadow-sm border border-dashed border-gray-300">
            <div className="text-4xl mb-4 text-gray-200">📁</div>
            <p className="text-gray-400 font-bold">لا توجد بلاغات مرفوعة حالياً بهذا المكتب.</p>
          </div>
        ) : (
          <div className="grid gap-3 md:gap-4">
            {reports.map((report) => (
              <div 
                key={report._id} 
                className="bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3 md:gap-4 items-center w-full md:w-auto">
                  <div className="min-w-[48px] h-[48px] bg-[#F3EBF9] rounded-xl flex items-center justify-center text-xl">
                    📦
                  </div>
                  <div className="truncate text-right">
                    <h3 className="font-bold text-gray-800 text-base md:text-lg truncate">{report.itemName}</h3>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                      {report.location} • {report.date 
  ? new Date(report.date._seconds ? report.date._seconds * 1000 : report.date).toLocaleDateString('ar-SA') 
  : 'تاريخ غير محدد'
}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto md:gap-4 border-t md:border-none pt-3 md:pt-0">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black whitespace-nowrap ${getStatusStyle(report.status)}`}>
    {getStatusLabel(report.status)}
</span>
                  <button 
                   onClick={() => {
   
    sessionStorage.setItem('selectedReport', JSON.stringify(report));
    
   
    router.push(`/offecer/my-reports/${report._id}`);
  }}
  className="w-10 h-10 md:w-8 md:h-8 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-[#5E3085] hover:text-white transition-colors"
>
                    ←
                  </button>
                </div>
              </div>
            ))} 
          </div>
        )}
      </div>
    </div>
  );
}