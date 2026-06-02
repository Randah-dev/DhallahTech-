'use client';
export default function TrackingPage() {
  const steps = [
    { title: "تم تقديم الطلب", time: "15 ديسمبر 2024 - 10:30 ص", desc: "تم استلام طلبك بنجاح", completed: true },
    { title: "قيد المعالجة", time: "15 ديسمبر 2024 - 02:15 م", desc: "جاري تجهيز طلبك", completed: true },
    { title: "تم الشحن", time: "15 ديسمبر 2024 - 06:45 م", desc: "تم شحن الطلب من المكتب", completed: true },
    { title: "تم التسليم", time: "16 ديسمبر 2024 - 11:30 ص", desc: "تم التسليم بنجاح", completed: true }
  ];

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen" dir="rtl">
      <div className="max-w-3xl mx-auto bg-white border-2 border-gray-100 rounded-[2.5rem] p-10 shadow-sm">
        <h3 className="text-left text-gray-400 font-bold mb-10 text-xs italic">تاريخ الطلب</h3>
        <div className="space-y-0 relative mr-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 pb-10 relative">
            
              {idx !== steps.length - 1 && <div className="absolute right-[19px] top-10 w-0.5 h-full bg-green-500"></div>}
              
              <div className="flex-1 text-right">
                <h4 className="font-black text-green-600 text-sm">{step.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold mt-1">{step.time}</p>
                <p className="text-[10px] text-gray-400 font-medium">{step.desc}</p>
              </div>

          
              <div className="w-10 h-10 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 z-10 shadow-sm">
                <i className="fas fa-check text-xs"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}