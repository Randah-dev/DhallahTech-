export default function CheckoutPage() {
  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen" dir="rtl">
      <h1 className="text-2xl font-black text-gray-800 mb-8 mr-4">الدفع</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* ملخص الطلب */}
        <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-8 shadow-sm">
          <h3 className="font-black text-gray-800 mb-6 text-lg border-b pb-4">ملخص الطلب</h3>
          <div className="flex justify-between items-center text-sm font-bold">
            <span className="text-gray-400">محفظة جلدية</span>
            <i className="fas fa-wallet text-[#5E3085]"></i>
          </div>
          <div className="mt-6 pt-6 border-t space-y-3">
            <div className="flex justify-between text-gray-400 text-xs font-bold"><span>30 ريال</span><span>رسوم التوصيل</span></div>
            <div className="flex justify-between text-gray-800 text-xl font-black"><span>30 ريال</span><span>الإجمالي</span></div>
          </div>
        </div>

        {/* طريقة الدفع */}
        <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-8 shadow-sm space-y-6">
          <h3 className="font-black text-gray-800 text-lg italic">طريقة الدفع</h3>
          <div className="space-y-4">
            <input type="text" placeholder="رقم البطاقة" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 text-gray-800 text-sm outline-none focus:border-[#5E3085]" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="تاريخ الانتهاء MM/YY" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 text-gray-800 text-sm outline-none focus:border-[#5E3085]" />
              <input type="text" placeholder="CVV" className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100 text-gray-800 text-sm outline-none focus:border-[#5E3085]" />
            </div>
          </div>
          <button className="w-full py-5 bg-[#5E3085] text-white rounded-[2rem] font-black text-xl shadow-xl hover:bg-[#4a2669] transition-all">
            ادفع الآن
          </button>
        </div>
      </div>
    </div>
  );
}