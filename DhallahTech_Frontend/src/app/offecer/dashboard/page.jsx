"use client";
import { useState, useEffect } from 'react';
import StatCard from '../../../components/dashboard/StatCard';
import RecentActivity from "@/components/dashboard/RecentActivity";
import ReportSummary from "@/components/dashboard/ReportSummary";
import Link from 'next/link';

export default function DashboardPage() {
  
    const [stats, setStats] = useState([]);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [latestNotifications, setLatestNotifications] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem('token');
            try {
                setLoading(true);
              
                const response = await fetch('http://localhost:5000/api/office/dashboard-stats', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    }
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    const { statsData, recentActivities } = result.data;
                  
                    setStats([
                        { icon: 'fas fa-user', count: statsData.unclaimedCount, text: 'عدد العناصر غير المستلمة', color: 'bg-red-50 text-red-600', textColor: 'text-red-600' },
                        { icon: 'fas fa-clock', count: statsData.averageCloseTime, text: 'متوسط وقت إغلاق البلاغ', color: 'bg-orange-50 text-orange-600', textColor: 'text-orange-600' },
                        { icon: 'fas fa-file-alt', count: statsData.monthlyNewReports, text: 'البلاغات الجديدة (شهرياً)', color: 'bg-purple-50 text-purple-600', textColor: 'text-purple-600' },
                        { icon: 'fas fa-check-circle', count: statsData.returnedCount, text: 'عدد العناصر المسترجعة', color: 'bg-green-50 text-green-600', textColor: 'text-green-600' },
                    ]);

                    const formattedActivities = (recentActivities || []).map(act => ({
                        id: act._id,
                        title: act.itemName, 
                        location: act.location,
                        time: act.time 
                    }));

                    setActivities(formattedActivities);
                }

                const notifResponse = await fetch('http://localhost:5000/api/office/my-notifications?limit=5', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (notifResponse.ok) {
                    const notifResult = await notifResponse.json();
                    setLatestNotifications(notifResult.data || []);
                }

            } catch (error) {
                console.error("Error loading dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div className="p-10 text-center font-bold text-[#5E3085]">جاري تحميل لوحة التحكم...</div>;
    }

    const markAsRead = async (notifId) => {
        setLatestNotifications(prev =>
            prev.map(n => n.id === notifId ? { ...n, isRead: true } : n)
        );

        try {
            await fetch(`http://localhost:5000/api/office/notifications/${notifId}/read`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
        } catch (err) {
            console.error("خطأ في تحديث حالة قراءة الإشعار بالداشبورد:", err);
        }
    };

    return (
        <div className="space-y-8 p-4" dir="rtl"> 
            
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">لوحة التحكم</h1>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>

           
           <div className="mt-8 flex flex-col lg:grid lg:grid-cols-3 gap-6">
                
                
                <div className="order-2 lg:order-none lg:col-span-2">
                    <RecentActivity activities={activities} title="النشاط الأخير" />
                </div>
       
               
                <div className="order-1 lg:order-none bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full min-h-[350px]">
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                       <Link href="/offecer/notifications">
                        <h2 className="text-lg font-bold text-[#3A1C56] flex items-center gap-2">
                            <span>آخر الإشعارات</span>
                        </h2>
                        </Link>
                        <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full">
                            {latestNotifications.filter(n => !n.isRead).length} جديدة
                        </span>
                       
                    </div>

                    {latestNotifications.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-8 text-sm">
                            <p>لا توجد إشعارات جديدة حالياً.</p>
                        </div>
                    ) : (
                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                            {latestNotifications.map((notif) => (
                                <div 
                                    key={notif.id} 
                                    className={`p-4 rounded-xl border-r-4 transition-all duration-200 text-right ${
                                        notif.isRead ? 'bg-gray-50 border-gray-300' : 'bg-purple-50/60 border-[#3A1C56] shadow-sm'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base">{notif.title}</h4>
                                        {!notif.isRead && (
                                            <span className="w-2 h-2 bg-purple-600 rounded-full inline-block mt-1.5 shrink-0"></span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{notif.body}</p>
                                    
                                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-dashed border-gray-200 text-[10px] md:text-xs text-gray-400">
                                        <span>
                                            {notif.createdAt ? (() => {
                                                if (typeof notif.createdAt.toDate === 'function') {
                                                    return notif.createdAt.toDate().toLocaleDateString("ar-SA") + ' - ' + notif.createdAt.toDate().toLocaleTimeString("ar-SA", { hour: '2-digit', minute: '2-digit' });
                                                }
                                                const seconds = notif.createdAt._seconds || notif.createdAt.seconds;
                                                if (seconds) {
                                                    const dateObj = new Date(seconds * 1000);
                                                    return dateObj.toLocaleDateString("ar-SA") + ' - ' + dateObj.toLocaleTimeString("ar-SA", { hour: '2-digit', minute: '2-digit' });
                                                }
                                                const dateObj = new Date(notif.createdAt);
                                                return isNaN(dateObj.getTime()) ? "تاريخ غير محدد" : dateObj.toLocaleDateString("ar-SA") + ' - ' + dateObj.toLocaleTimeString("ar-SA", { hour: '2-digit', minute: '2-digit' });
                                            })() : "تاريخ غير محدد"}
                                        </span>
                                        
                                        {notif.requestId && (
                                            <a 
                                                href={`/offecer/my-reports/${notif.requestId}`}
                                                onClick={() => markAsRead(notif.id)}
                                                className="text-[#3A1C56] hover:underline font-bold text-xs"
                                            >
                                                مراجعة الآن ←
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}