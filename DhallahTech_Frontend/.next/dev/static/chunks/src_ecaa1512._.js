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
"[project]/src/app/offecer/notifications/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NotificationsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e603a76110c40975d6e23cf299ffd4a25e10afd4c11227693a6292bee04a42ed") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e603a76110c40975d6e23cf299ffd4a25e10afd4c11227693a6292bee04a42ed";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "NotificationsPage[useEffect()]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/officer/my-notifications").then({
                    "NotificationsPage[useEffect() > (anonymous)()]": (res)=>{
                        setNotifications(res.data?.data || res.data || []);
                    }
                }["NotificationsPage[useEffect() > (anonymous)()]"]).catch(_NotificationsPageUseEffectAnonymous).finally({
                    "NotificationsPage[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["NotificationsPage[useEffect() > (anonymous)()]"]);
            }
        })["NotificationsPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "NotificationsPage[markAsRead]": async (notifId)=>{
                setNotifications({
                    "NotificationsPage[markAsRead > setNotifications()]": (prev)=>prev.map({
                            "NotificationsPage[markAsRead > setNotifications() > prev.map()]": (n)=>n.id === notifId ? {
                                    ...n,
                                    isRead: true
                                } : n
                        }["NotificationsPage[markAsRead > setNotifications() > prev.map()]"])
                }["NotificationsPage[markAsRead > setNotifications()]"]);
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/officer/notifications/${notifId}/read`);
                } catch (t4) {
                    const err_0 = t4;
                    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631:", err_0);
                }
            }
        })["NotificationsPage[markAsRead]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const markAsRead = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-right",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: "26px",
                        fontWeight: "900",
                        color: "#3A1C56"
                    },
                    children: " مركز الإشعارات"
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                    lineNumber: 74,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "60px",
                        height: "5px",
                        backgroundColor: "#3A1C56",
                        borderRadius: "10px",
                        marginTop: "10px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                    lineNumber: 78,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/offecer/notifications/page.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== loading || $[7] !== notifications || $[8] !== visibleCount) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 md:p-6 max-w-4xl mx-auto",
            dir: "rtl",
            children: [
                t4,
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-800"
                    }, void 0, false, {
                        fileName: "[project]/src/app/offecer/notifications/page.jsx",
                        lineNumber: 91,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                    lineNumber: 91,
                    columnNumber: 81
                }, this) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-400 py-12 text-sm",
                    children: "لا توجد إشعارات جديدة حالياً."
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                    lineNumber: 91,
                    columnNumber: 268
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-2 px-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg md:text-xl font-bold text-[#3A1C56]",
                                    children: "آخر التنبيهات"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                    lineNumber: 91,
                                    columnNumber: 454
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm",
                                    children: [
                                        notifications.filter(_NotificationsPageNotificationsFilter).length,
                                        " جديدة"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                    lineNumber: 91,
                                    columnNumber: 532
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                            lineNumber: 91,
                            columnNumber: 393
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 w-full",
                            children: [
                                notifications.slice(0, visibleCount).map({
                                    "NotificationsPage[(anonymous)()]": (notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-4 rounded-xl border-r-4 transition-all duration-200 text-right ${notif.isRead ? "bg-gray-50 border-gray-300" : "bg-purple-50/60 border-[#3A1C56] shadow-sm"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-800 text-sm md:text-base",
                                                            children: notif.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 306
                                                        }, this),
                                                        !notif.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 bg-purple-600 rounded-full inline-block mt-1.5 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 403
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 251
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-xs md:text-sm leading-relaxed",
                                                    children: notif.body
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 494
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mt-3 pt-2 border-t border-dashed border-gray-200 text-[11px] md:text-xs text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: notif.createdAt ? (()=>{
                                                                const seconds = notif.createdAt._seconds || notif.createdAt.seconds;
                                                                if (seconds) {
                                                                    return new Date(seconds * 1000).toLocaleDateString("ar-SA");
                                                                }
                                                                const dateObj = new Date(notif.createdAt);
                                                                return isNaN(dateObj.getTime()) ? "\u0627\u0644\u0622\u0646" : dateObj.toLocaleDateString("ar-SA");
                                                            })() : "\u0627\u0644\u0622\u0646"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 711
                                                        }, this),
                                                        notif.requestId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `/offecer/my-reports/${notif.requestId}`,
                                                            onClick: {
                                                                "NotificationsPage[(anonymous)() > <a>.onClick]": ()=>markAsRead(notif.id)
                                                            }["NotificationsPage[(anonymous)() > <a>.onClick]"],
                                                            className: "text-[#3A1C56] hover:underline font-bold text-xs",
                                                            children: "مراجعة الآن ←"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                            lineNumber: 99,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 574
                                                }, this)
                                            ]
                                        }, notif.id, true, {
                                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                            lineNumber: 92,
                                            columnNumber: 58
                                        }, this)
                                }["NotificationsPage[(anonymous)()]"]),
                                notifications.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-4 pt-3 border-t border-gray-100",
                                    children: visibleCount < notifications.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "NotificationsPage[<button>.onClick]": ()=>setVisibleCount(_NotificationsPageButtonOnClickSetVisibleCount)
                                        }["NotificationsPage[<button>.onClick]"],
                                        className: "text-[#3A1C56] hover:text-[#5E3085] text-xs font-bold transition-colors",
                                        children: "عرض المزيد من الإشعارات ⬇️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                        lineNumber: 102,
                                        columnNumber: 182
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "NotificationsPage[<button>.onClick]": ()=>setVisibleCount(5)
                                        }["NotificationsPage[<button>.onClick]"],
                                        className: "text-gray-400 hover:text-gray-600 text-xs font-bold transition-colors",
                                        children: "إظهار أقل ⬆️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                        lineNumber: 104,
                                        columnNumber: 177
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                                    lineNumber: 102,
                                    columnNumber: 79
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/notifications/page.jsx",
                            lineNumber: 91,
                            columnNumber: 720
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/notifications/page.jsx",
                    lineNumber: 91,
                    columnNumber: 359
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/offecer/notifications/page.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = loading;
        $[7] = notifications;
        $[8] = visibleCount;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(NotificationsPage, "fvsO2IT/jxkNGZN2d8NyWMAYxFA=");
_c = NotificationsPage;
function _NotificationsPageButtonOnClickSetVisibleCount(prev_0) {
    return prev_0 + 5;
}
function _NotificationsPageNotificationsFilter(n_0) {
    return !n_0.isRead;
}
function _NotificationsPageUseEffectAnonymous(err) {
    return console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641:", err);
}
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ecaa1512._.js.map