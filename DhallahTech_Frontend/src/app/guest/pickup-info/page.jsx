"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import API from "@/services/api";

export default function PickupInfoPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const [itemData, setItemData] = useState(null);
  const matchId = sp.get("matchId");
  const isVerified = true;

useEffect(() => {
  const fetchPickupInfo = async () => {
    try {
      const matchRes = await API.get(`/matches/${matchId}`);

      const foundItem = matchRes.data.data.foundItem;
      const office = matchRes.data.data.office;

      setItemData({
        officeName: office?.officeName || "مكتب غير محدد",
        officeHours: office?.workingHours || "غير محدد",
        description: foundItem.description || "لا يوجد وصف",
        location: office?.location || foundItem.location || "غير محدد",
        fullAddress: office?.fullAddress || "",
        phone: office?.phone || "",
        foundItemId: foundItem.id,
        officeId: foundItem.officeId || "",
      });
    } catch (err) {
      console.log("خطأ في جلب معلومات الاستلام:", err.response?.data || err.message);
    }
  };

  if (matchId) {
    fetchPickupInfo();
  }
}, [matchId]);
if (!itemData) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>

      <p className="text-gray-500 font-bold">
        جاري تحميل معلومات الاستلام...
      </p>
    </div>
  );
}

  return (
   <div className="p-4" dir="rtl">
  <h1 className="pageTitle">معلومات الإستلام</h1>
  <p className="pageSubTitle">تفاصيل المكتب الذي يحتوي على العنصر المطابق</p>
  <hr className="hrLine" />

  <div className="card space-y-6">
        
        {isVerified && (
      <div className="p-4 bg-green-100 text-green-700 rounded-2xl text-center font-bold">
        ✅ تم التحقق بنجاح! يمكنك الآن استلام العنصر المفقود.
       </div>
      )}

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
          <h3 className="font-black text-[#5E3085] border-b pb-2">معلومات الإستلام</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#5E3085]">📍</span>
              <div>
                <p className="text-xs text-gray-400">مكتب الإستلام</p>
                <p className="font-bold text-gray-800">{itemData.officeName}</p>
  
            {itemData.fullAddress && (
            <p className="text-sm text-gray-500 mt-1">{itemData.fullAddress}</p>
            )}

            {itemData.phone && (
             <p className="text-sm text-gray-500 mt-1">📞 {itemData.phone}</p>
               )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#5E3085]">⏰</span>
              <div>
                <p className="text-xs text-gray-400">ساعات العمل</p>
                <p className="font-bold text-gray-800">{itemData.officeHours}</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200 space-y-2">
  <div>
    <p className="text-xs text-gray-400 mb-1">وصف العنصر:</p>
    <p className="text-sm text-gray-600 leading-relaxed">
      {itemData.description}
    </p>
  </div>

  <div>
    <p className="text-xs text-gray-400 mb-1">موقع البلاغ:</p>
    <p className="text-sm text-gray-600">
      {itemData.location}
    </p>
  </div>
</div>
          </div>
        </div>
        
        {/* زر العودة */}
        <button 
          onClick={() => router.push('/guest/createreport')}
          className="w-full bg-[#5E3085] text-white p-4 rounded-2xl font-black shadow-lg shadow-purple-100"
        >
          العودة لإنشاء بلاغ جديد 
        </button>

      </div>
    </div>
  );
}