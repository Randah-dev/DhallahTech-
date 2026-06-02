'use client';
export default function DeliveryPage() {
  const items = [
    { id: 1, title: "محفظة جلدية", location: "الحجاز مول، مكة المكرمة", status: "قيد الانتظار", icon: "fa-wallet" },
    { id: 2, title: "مفاتيح سيارة", location: "الحجاز مول، مكة المكرمة", status: "جاري التنفيذ", icon: "fa-key" }
  ];

  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen" dir="rtl">
      <h1 className="text-2xl font-black text-gray-800 mb-8 mr-4">التوصيل</h1>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 shadow-sm hover:border-purple-200 transition-all max-w-5xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <span className={`px-4 py-1 rounded-full text-[10px] font-bold ${item.status === 'جاري التنفيذ' ? 'bg-purple-100 text-[#5E3085]' : 'bg-gray-100 text-gray-400'}`}>
                {item.status}
              </span>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <h3 className="font-black text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-xs text-gray-400 font-bold">{item.location}</p>
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#5E3085] text-xl border border-gray-100">
                  <i className={`fas ${item.icon}`}></i>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="block text-xs font-black text-gray-500 mr-2">عنوان التوصيل</label>
              <input type="text" placeholder="أدخل عنوان التوصيل..." className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] focus:bg-white outline-none text-sm transition-all text-gray-800" />
              <button className="w-full py-4 bg-[#5E3085] text-white rounded-2xl font-black text-base shadow-lg hover:bg-[#4a2669] transition-all">
                طلب التوصيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}