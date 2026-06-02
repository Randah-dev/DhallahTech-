"use client";
import { useEffect, useState } from 'react';

export default function RequestStatus() {
    const [requestData, setRequestData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
      
        const fetchStatus = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/officer/my-office', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                });
                const result = await res.json();
                
                if (res.ok) {
                
                    const actualData = result.data?.office || result.office || result.data;
                    setRequestData(actualData);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("خطأ في جلب حالة الطلب:", err);
                setError(true);
            }
        };
        fetchStatus();
    }, []);

    if (error) return <p className="text-center p-10 text-red-500 font-bold">❌ حدث خطأ أثناء تحميل تفاصيل الطلب أو لا يوجد طلب مسبق.</p>;

    if (!requestData) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5E3085]"></div>
        </div>
    );

    const getStatusLabel = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
            case 'active':
                return 'تم التفعيل والقبول بنجاح ✅';
            case 'rejected':
                return 'تم رفض الطلب ❌';
            case 'pending':
            default:
                return 'قيد المراجعة والانتظار ⏳';
        }
    };


    const requestId = requestData.id || requestData._id || "000000";

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100" dir="rtl">
            <h1 className="text-2xl font-black text-[#5E3085] mb-6">تفاصيل طلب إنشاء المكتب</h1>
            
            {/* بطاقة الحالة الملونة */}
            <div className="bg-[#F3EBFF] p-6 rounded-2xl mb-8 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-600 mb-1">حالة الطلب الحالية:</p>
                    <h2 className="text-xl font-bold text-[#5E3085]">
                        {getStatusLabel(requestData.status)}
                    </h2>
                </div>
                <div className="text-xs bg-white px-4 py-2 rounded-full font-bold shadow-sm font-sans">
                    رقم الطلب: #{requestId.slice(-6)}
                </div>
            </div>

        
            <div className="space-y-4 text-right">
                <div className="border-b pb-3">
                    <span className="text-gray-400 text-sm">اسم المكتب:</span>
                    <p className="font-bold text-gray-800 mt-1">{requestData.officeName}</p>
                </div>
                <div className="border-b pb-3">
                    <span className="text-gray-400 text-sm">المدينة:</span>
                    <p className="font-bold text-gray-800 mt-1">{requestData.cityName || "مكة المكرمة"}</p>
                </div>
                <div className="border-b pb-3">
                    <span className="text-gray-400 text-sm">الموقع (المبنى/الدور):</span>
                    <p className="font-bold text-gray-800 mt-1">{requestData.location}</p>
                </div>
                <div className="border-b pb-3">
                    <span className="text-gray-400 text-sm">تاريخ التقديم:</span>
                    <p className="font-bold text-gray-800 mt-1 font-sans">
                        {requestData.createdAt 
                          ? new Date(requestData.createdAt._seconds ? requestData.createdAt._seconds * 1000 : requestData.createdAt).toLocaleDateString('ar-SA')
                          : new Date().toLocaleDateString('ar-SA')
                        }
                    </p>
                </div>
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm leading-relaxed">
                سيتم إخطارك فور موافقة الإدارة وتفعيل كامل صلاحيات لوحة التحكم في السايد بار تلقائياً.
            </p>
        </div>
    );
}