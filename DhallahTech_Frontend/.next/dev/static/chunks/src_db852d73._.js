(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addGuestItem",
    ()=>addGuestItem,
    "addItem",
    ()=>addItem,
    "analyzeImage",
    ()=>analyzeImage,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteComplaint",
    ()=>deleteComplaint,
    "deleteProfile",
    ()=>deleteProfile,
    "forgotPassword",
    ()=>forgotPassword,
    "getAllComplaints",
    ()=>getAllComplaints,
    "getAllOfficeRequests",
    ()=>getAllOfficeRequests,
    "getCustomerNotifications",
    ()=>getCustomerNotifications,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getMatchDetails",
    ()=>getMatchDetails,
    "getMyComplaints",
    ()=>getMyComplaints,
    "getMyReports",
    ()=>getMyReports,
    "getOfficeDetails",
    ()=>getOfficeDetails,
    "getOfficerNotifications",
    ()=>getOfficerNotifications,
    "getOfficerOffice",
    ()=>getOfficerOffice,
    "getProfile",
    ()=>getProfile,
    "getUserMatches",
    ()=>getUserMatches,
    "guestAccess",
    ()=>guestAccess,
    "loginUser",
    ()=>loginUser,
    "markAsReceived",
    ()=>markAsReceived,
    "markNotificationAsRead",
    ()=>markNotificationAsRead,
    "refreshMatches",
    ()=>refreshMatches,
    "registerOffice",
    ()=>registerOffice,
    "registerUser",
    ()=>registerUser,
    "resendCode",
    ()=>resendCode,
    "resetPassword",
    ()=>resetPassword,
    "respondToComplaint",
    ()=>respondToComplaint,
    "reviewOfficerRequest",
    ()=>reviewOfficerRequest,
    "sendMessageApi",
    ()=>sendMessageApi,
    "submitComplaint",
    ()=>submitComplaint,
    "updateComplaint",
    ()=>updateComplaint,
    "updateComplaintStatus",
    ()=>updateComplaintStatus,
    "updateProfile",
    ()=>updateProfile,
    "updateProfileFcm",
    ()=>updateProfileFcm,
    "verifyGuest",
    ()=>verifyGuest,
    "verifyMatchAnswer",
    ()=>verifyMatchAnswer,
    "verifyUser",
    ()=>verifyUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:5000/api'
});
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});
const addItem = (itemData)=>API.post('/items/add', itemData);
const addGuestItem = (itemData)=>API.post('/items/guest/add', itemData);
const registerUser = (data)=>API.post('/auth/register', data);
const verifyUser = (data)=>API.post('/auth/verify', data);
const resendCode = (data)=>API.post('/auth/resend-code', data);
const loginUser = (data)=>API.post('/auth/login', data);
const guestAccess = (data)=>API.post('/auth/guest', data);
const verifyGuest = (data)=>API.post('/auth/guest/verify', data);
const forgotPassword = (data)=>API.post('/auth/forgot-password', data);
const resetPassword = (data)=>API.post('/auth/reset-password', data);
const getUserMatches = (itemId)=>API.get('/matches', {
        params: {
            itemId
        }
    });
const getMyReports = ()=>API.get('/items/my-reports');
const getProfile = ()=>API.get('/auth/profile');
const updateProfile = (data)=>API.put('/auth/profile', data);
const deleteProfile = ()=>API.delete('/auth/profile');
const submitComplaint = (data)=>API.post('/complaints/submit', data);
const getMyComplaints = ()=>API.get('/complaints/my');
const updateComplaint = (complaintID, data)=>API.put(`/complaints/update/${complaintID}`, data);
const deleteComplaint = (complaintID)=>API.delete(`/complaints/delete/${complaintID}`);
const registerOffice = (data)=>API.post('/officer/register', data);
const getMatchDetails = (matchId)=>API.get(`/matches/${matchId}`);
const refreshMatches = (itemId)=>API.post(`/matches/refresh/${itemId}`);
const markAsReceived = (matchId)=>API.put(`/matches/received/${matchId}`);
const getAllOfficeRequests = ()=>API.get('/admin/offices');
const reviewOfficerRequest = (data)=>API.put('/admin/review-officer', data);
const getAllComplaints = ()=>API.get('/admin/complaints');
const respondToComplaint = (id, data)=>API.put(`/admin/complaint/respond/${id}`, data);
const updateComplaintStatus = (id, data)=>API.put(`/admin/complaint/status/${id}`, data);
const getOfficeDetails = (id)=>API.get(`/admin/office/${id}`);
const getDashboardStats = ()=>API.get('/office/dashboard-stats');
const getOfficerOffice = ()=>API.get('/office/my-office');
const updateProfileFcm = (data)=>API.put('/auth/profile', data);
const analyzeImage = (formData)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:4000/analyze', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const verifyMatchAnswer = async (matchId, userAnswer)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/matches/verify-answer`, {
        matchId,
        userAnswer
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
};
const getCustomerNotifications = (limit = 5)=>API.get(`/customer/my-notifications?limit=${limit}`);
const getOfficerNotifications = (limit = 5)=>API.get(`/officer/my-notifications?limit=${limit}`);
const markNotificationAsRead = (notifId)=>API.put(`/customer/notifications/${notifId}/read`);
const sendMessageApi = (data)=>API.post('/communication/send', data);
const __TURBOPACK__default__export__ = API;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/customer/home/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Page() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [notifLoading, setNotifLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadReports = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMyReports"])();
            let rawData = [];
            if (res.data && res.data.success) {
                rawData = res.data.data || [];
            } else {
                rawData = Array.isArray(res.data) ? res.data : [];
            }
            const sortedData = rawData.sort((a, b)=>{
                const aDone = [
                    "received",
                    "matched"
                ].includes(a.status?.toLowerCase().trim());
                const bDone = [
                    "received",
                    "matched"
                ].includes(b.status?.toLowerCase().trim());
                if (aDone && !bDone) return -1;
                if (!aDone && bDone) return 1;
                const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
                const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
                return timeB - timeA;
            });
            setReports(sortedData);
        } catch (err) {
            console.log("خطأ في جلب البلاغات:", err.response?.data || err.message);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            loadReports();
            loadNotifications();
            const interval = setInterval({
                "Page.useEffect.interval": ()=>{
                    loadReports();
                    loadNotifications();
                }
            }["Page.useEffect.interval"], 5000);
            return ({
                "Page.useEffect": ()=>clearInterval(interval)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    const handleRefreshMatches = async (itemId)=>{
        try {
            alert("جاري تحديث المطابقات الذكية عبر الـ AI...");
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshMatches"])(itemId);
            const freshMatches = response.data?.data?.matches || response.data?.matches || [];
            sessionStorage.setItem('aiMatches', JSON.stringify(freshMatches));
            router.push(`/customer/matches?itemId=${itemId}`);
        } catch (err_0) {
            console.log("خطأ في تحديث نتائج المطابقة:", err_0);
            alert("حدث خطأ أثناء تحديث نتائج المطابقة");
        }
    };
    const loadNotifications = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerNotifications"])(5).then((res_0)=>{
            const dataReceived = res_0.data?.data || [];
            console.log("الإشعارات المستلمة في الكستمر:", dataReceived);
            setNotifications(Array.isArray(dataReceived) ? dataReceived : []);
        }).catch((err_1)=>console.error("خطأ في جلب إشعارات العميل:", err_1)).finally(()=>setNotifLoading(false));
    };
    const markAsRead = async (notifId)=>{
        setNotifications((prev)=>prev.map((n)=>n.id === notifId ? {
                    ...n,
                    isRead: true
                } : n));
        try {
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
            await markNotificationAsRead(notifId);
        } catch (err_2) {
            console.error("خطأ في تحديث حالة قراءة إشعار العميل:", err_2);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 max-w-7xl mx-auto",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-6 items-start w-full mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-[360px] bg-white rounded-2xl shadow-sm border p-4 md:p-5 shrink-0 order-1 lg:order-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4 pb-3 border-b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base md:text-lg font-bold text-[#3A1C56] flex items-center gap-1.5",
                                    children: "🔔 التنبيهات والردود"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full",
                                    children: [
                                        notifications.filter((n_0)=>!n_0.isRead).length,
                                        " جديدة"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        notifLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-800"
                            }, void 0, false, {
                                fileName: "[project]/src/app/customer/home/page.jsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 87,
                            columnNumber: 27
                        }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-400 py-10 text-xs",
                            children: "لا توجد مستجدات حالياً"
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 89,
                            columnNumber: 51
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-[380px] overflow-y-auto pr-1",
                            children: notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3.5 rounded-xl border-r-4 transition-all duration-200 text-right ${notif.isRead ? 'bg-gray-50 border-gray-300' : 'bg-purple-50/60 border-[#3A1C56] shadow-sm'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-gray-800 text-xs md:text-sm",
                                                    children: notif.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                !notif.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 bg-purple-600 rounded-full inline-block mt-1 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/home/page.jsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-[11px] md:text-xs leading-relaxed",
                                            children: notif.body
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/customer/home/page.jsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mt-2.5 pt-2 border-t border-dashed border-gray-200 text-[10px] text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: notif.createdAt ? (()=>{
                                                        const seconds = notif.createdAt._seconds || notif.createdAt.seconds;
                                                        if (seconds) {
                                                            return new Date(seconds * 1000).toLocaleDateString("ar-SA");
                                                        }
                                                        const dateObj = new Date(notif.createdAt);
                                                        return isNaN(dateObj.getTime()) ? "الآن" : dateObj.toLocaleDateString("ar-SA");
                                                    })() : "الآن"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                notif.complaintId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        markAsRead(notif.id);
                                                        router.push(`/customer/tech-issues?id=${notif.complaintId}`);
                                                    },
                                                    className: "text-[#3A1C56] hover:underline font-bold text-[11px]",
                                                    children: "معاينة الرد ←"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 109,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/home/page.jsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, notif.id, true, {
                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                    lineNumber: 90,
                                    columnNumber: 43
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 89,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/customer/home/page.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full order-2 lg:order-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "sectionTitle mb-4",
                            children: "البلاغات الأخيرة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: reports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reportRow",
                                children: "لا توجد بلاغات حالياً"
                            }, void 0, false, {
                                fileName: "[project]/src/app/customer/home/page.jsx",
                                lineNumber: 124,
                                columnNumber: 33
                            }, this) : reports.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reportRow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "reportInfo text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportTitle",
                                                    children: r.itemName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportDate",
                                                    children: r.location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportDate",
                                                    children: r.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportDate",
                                                    children: r.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/home/page.jsx",
                                            lineNumber: 128,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-3 min-w-[190px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-5 py-3 rounded-2xl text-sm font-bold shadow-sm inline-flex items-center justify-center min-w-[170px] ${r.status?.toLowerCase().trim() === "received" || r.status === "تم الاستلام" ? "bg-green-100 text-green-700" : r.status?.toLowerCase().trim() === "matched" || r.status === "تمت المطابقة" ? "bg-purple-100 text-[#5E3085]" : "bg-amber-100 text-amber-700"}`,
                                                    children: r.status?.toLowerCase().trim() === "matched" || r.status === "تمت المطابقة" ? "تمت المطابقة" : r.status?.toLowerCase().trim() === "received" || r.status === "تم الاستلام" ? "تم الاستلام" : "لم تتم المطابقة للآن"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 15
                                                }, this),
                                                (r.status?.toLowerCase().trim() === "pending" || r.status === "لم تتم المطابقة للآن" || !r.status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleRefreshMatches(r.id || r._id),
                                                    className: "bg-[#5E3085] text-white px-5 py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-all shadow-sm",
                                                    children: "تحديث نتائج المطابقة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 118
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/home/page.jsx",
                                            lineNumber: 148,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/customer/home/page.jsx",
                                    lineNumber: 126,
                                    columnNumber: 44
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/customer/home/page.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/customer/home/page.jsx",
                    lineNumber: 121,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/customer/home/page.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/customer/home/page.jsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
_s(Page, "8HGyJJ0gC6Bapw/9P9nZYUuf0sI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_db852d73._.js.map