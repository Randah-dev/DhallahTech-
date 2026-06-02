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
"[project]/src/app/customer/matches/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$LanguageProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/customer/i18n/LanguageProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MatchesPage() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$LanguageProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const itemId = searchParams.get("itemId");
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MatchesPage.useEffect": ()=>{
            setMounted(true);
            const loadMatches = {
                "MatchesPage.useEffect.loadMatches": async ()=>{
                    try {
                        setLoading(true);
                        const localAiMatches = sessionStorage.getItem('aiMatches');
                        if (localAiMatches) {
                            const parsedMatches = JSON.parse(localAiMatches);
                            console.log("البيانات الخام من session:", parsedMatches);
                            const matchesArray = parsedMatches?.data?.matches || parsedMatches?.matches || (Array.isArray(parsedMatches) ? parsedMatches : []);
                            const cleanMatches = matchesArray.map({
                                "MatchesPage.useEffect.loadMatches.cleanMatches": (m)=>({
                                        ...m,
                                        score: m.score || m.matchScore || 0,
                                        matchScore: m.matchScore || m.score || 0
                                    })
                            }["MatchesPage.useEffect.loadMatches.cleanMatches"]);
                            const sortedSessionMatches = cleanMatches.sort({
                                "MatchesPage.useEffect.loadMatches.sortedSessionMatches": (a, b)=>b.score - a.score
                            }["MatchesPage.useEffect.loadMatches.sortedSessionMatches"]);
                            const uniqueSessionMatches = sortedSessionMatches.filter({
                                "MatchesPage.useEffect.loadMatches.uniqueSessionMatches": (match, index, self)=>self.findIndex({
                                        "MatchesPage.useEffect.loadMatches.uniqueSessionMatches": (m_0)=>m_0.id === match.id || m_0.foundItemId === match.foundItemId && m_0.lostItemId === match.lostItemId
                                    }["MatchesPage.useEffect.loadMatches.uniqueSessionMatches"]) === index
                            }["MatchesPage.useEffect.loadMatches.uniqueSessionMatches"]);
                            setMatches(uniqueSessionMatches);
                            sessionStorage.removeItem('aiMatches');
                            return;
                        }
                        console.log(`جاري السحب الآمن للمطابقات الخاصة بالبلاغ ${itemId}...`);
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserMatches"])(itemId);
                        const result = response.data;
                        console.log("المطابقات المستلمة من السيرفر:", result);
                        let finalArray = [];
                        if (result && result.success) {
                            finalArray = result.data?.matches || result.data || [];
                        } else if (Array.isArray(result)) {
                            finalArray = result;
                        } else if (result && result.matches) {
                            finalArray = result.matches;
                        }
                        const sortedServerMatches = finalArray.map({
                            "MatchesPage.useEffect.loadMatches.sortedServerMatches": (m_1)=>({
                                    ...m_1,
                                    score: m_1.score || m_1.matchScore || 0,
                                    matchScore: m_1.matchScore || m_1.score || 0
                                })
                        }["MatchesPage.useEffect.loadMatches.sortedServerMatches"]).sort({
                            "MatchesPage.useEffect.loadMatches.sortedServerMatches": (a_0, b_0)=>b_0.score - a_0.score
                        }["MatchesPage.useEffect.loadMatches.sortedServerMatches"]);
                        const uniqueServerMatches = sortedServerMatches.filter({
                            "MatchesPage.useEffect.loadMatches.uniqueServerMatches": (match_0, index_0, self_0)=>self_0.findIndex({
                                    "MatchesPage.useEffect.loadMatches.uniqueServerMatches": (m_2)=>m_2.id === match_0.id || m_2.foundItemId === match_0.foundItemId && m_2.lostItemId === match_0.lostItemId
                                }["MatchesPage.useEffect.loadMatches.uniqueServerMatches"]) === index_0
                        }["MatchesPage.useEffect.loadMatches.uniqueServerMatches"]);
                        setMatches(uniqueServerMatches);
                    } catch (error) {
                        console.error("Error loading matches:", error);
                        alert("حدث خطأ أثناء جلب المطابقات");
                        setMatches([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["MatchesPage.useEffect.loadMatches"];
            loadMatches();
        }
    }["MatchesPage.useEffect"], [
        itemId
    ]);
    if (!mounted) return null;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center min-h-[400px] gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 font-bold",
                    children: lang === "ar" ? "جاري البحث عن مطابقات ذكية..." : "Searching for smart matches..."
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 72,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/customer/matches/page.jsx",
            lineNumber: 69,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: lang === "ar" ? "rtl" : "ltr",
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "pageTitle",
                children: lang === "ar" ? "العناصر المتطابقة ذكيًا" : "AI Smart Matches"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pageSubTitle",
                children: matches.length > 0 ? lang === "ar" ? "إليك أفضل النتائج التي عثر عليها نظامنا" : "Here are the best matches found by our system" : lang === "ar" ? "لا توجد تطابقات حالية" : "No matches found yet"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "hrLine"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: matches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hintText",
                    children: lang === "ar" ? "لم يتم العثور على بلاغات مطابقة بعد. قم برفع بلاغ لعرض النتائج المحتملة" : "No matching reports were found yet. Submit a report to view potential matches."
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 87,
                    columnNumber: 33
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reportList",
                    children: matches.filter((m_3)=>m_3.itemName || m_3.foundItemName || m_3.lostItemName || m_3.lostItem?.itemName || m_3.foundItem?.itemName).map((m_4, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reportRow flex items-center justify-between gap-4 p-4 mb-3 bg-white rounded-2xl border border-gray-100 shadow-sm",
                            dir: "rtl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 flex-1 min-w-0",
                                    children: [
                                        (()=>{
                                            const score = Math.round(m_4.matchScore || m_4.score || 0);
                                            let colorStyle = "";
                                            if (score >= 90) {
                                                colorStyle = "bg-[#D1FAE5] text-[#065F46]";
                                            } else if (score >= 75) {
                                                colorStyle = "bg-[#DBEAFE] text-[#1E40AF]";
                                            } else {
                                                colorStyle = "bg-[#FEF3C7] text-[#92400E]";
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[12px] px-3 py-1 rounded-full font-black shadow-sm flex-shrink-0 ${colorStyle}`,
                                                children: [
                                                    score,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/customer/matches/page.jsx",
                                                lineNumber: 105,
                                                columnNumber: 22
                                            }, this);
                                        })(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportTitle text-gray-800 font-bold text-base truncate",
                                                    children: m_4.itemName || m_4.foundItemName || m_4.lostItemName || m_4.lostItem?.itemName || m_4.foundItem?.itemName || "عنصر مطابق"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportDate text-xs text-gray-400 font-medium",
                                                    style: {
                                                        marginTop: '2px'
                                                    },
                                                    children: (m_4.matchScore || m_4.score || 0) >= 80 ? lang === "ar" ? "تطابق ذكي مؤكد" : "Confirmed Smart Match" : lang === "ar" ? "تطابق محتمل" : "Potential Match"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/matches/page.jsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rowActions flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "smallBtn",
                                        type: "button",
                                        onClick: ()=>router.push(`/customer/match-confirmation?matchId=${m_4.id || m_4._id || m_4.matchId}&itemName=${m_4.itemName || m_4.foundItemName || m_4.lostItemName || m_4.lostItem?.itemName || m_4.foundItem?.itemName || "عنصر مطابق"}&score=${m_4.matchScore || m_4.score || 0}`),
                                        children: lang === "ar" ? "تأكيد" : "Confirm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/customer/matches/page.jsx",
                                        lineNumber: 126,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                    lineNumber: 125,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, `${m_4.id || m_4._id || 'match'}-${index_1}`, true, {
                            fileName: "[project]/src/app/customer/matches/page.jsx",
                            lineNumber: 90,
                            columnNumber: 165
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 89,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/customer/matches/page.jsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_s(MatchesPage, "Wd3CcKHrVWUl+fxEk/IgGMrHODA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$LanguageProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = MatchesPage;
var _c;
__turbopack_context__.k.register(_c, "MatchesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b7c16764._.js.map