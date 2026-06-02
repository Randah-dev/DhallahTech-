module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/services/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
const analyzeImage = (formData)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('http://localhost:4000/analyze', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
const verifyMatchAnswer = async (matchId, userAnswer)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${API_URL}/matches/verify-answer`, {
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
}),
"[project]/src/app/customer/matches/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MatchesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$LanguageProvider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/customer/i18n/LanguageProvider.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MatchesPage() {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$LanguageProvider$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLang"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const itemId = searchParams.get("itemId");
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const loadMatches = async ()=>{
            try {
                setLoading(true);
                const localAiMatches = sessionStorage.getItem('aiMatches');
                if (localAiMatches) {
                    const parsedMatches = JSON.parse(localAiMatches);
                    console.log("البيانات الخام من session:", parsedMatches);
                    const matchesArray = parsedMatches?.data?.matches || parsedMatches?.matches || (Array.isArray(parsedMatches) ? parsedMatches : []);
                    const cleanMatches = matchesArray.map((m)=>({
                            ...m,
                            score: m.score || m.matchScore || 0,
                            matchScore: m.matchScore || m.score || 0
                        }));
                    const sortedSessionMatches = cleanMatches.sort((a, b)=>b.score - a.score);
                    const uniqueSessionMatches = sortedSessionMatches.filter((match, index, self)=>self.findIndex((m)=>m.id === match.id || m.foundItemId === match.foundItemId && m.lostItemId === match.lostItemId) === index);
                    setMatches(uniqueSessionMatches);
                    sessionStorage.removeItem('aiMatches');
                    return;
                }
                console.log(`جاري السحب الآمن للمطابقات الخاصة بالبلاغ ${itemId}...`);
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserMatches"])(itemId);
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
                const sortedServerMatches = finalArray.map((m)=>({
                        ...m,
                        score: m.score || m.matchScore || 0,
                        matchScore: m.matchScore || m.score || 0
                    })).sort((a, b)=>b.score - a.score);
                const uniqueServerMatches = sortedServerMatches.filter((match, index, self)=>self.findIndex((m)=>m.id === match.id || m.foundItemId === match.foundItemId && m.lostItemId === match.lostItemId) === index);
                setMatches(uniqueServerMatches);
            } catch (error) {
                console.error("Error loading matches:", error);
                alert("حدث خطأ أثناء جلب المطابقات");
                setMatches([]);
            } finally{
                setLoading(false);
            }
        };
        loadMatches();
    }, [
        itemId
    ]);
    if (!mounted) return null;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center min-h-[400px] gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 font-bold",
                    children: lang === "ar" ? "جاري البحث عن مطابقات ذكية..." : "Searching for smart matches..."
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/customer/matches/page.jsx",
            lineNumber: 93,
            columnNumber: 5
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dir: lang === "ar" ? "rtl" : "ltr",
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "pageTitle",
                children: lang === "ar" ? "العناصر المتطابقة ذكيًا" : "AI Smart Matches"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pageSubTitle",
                children: matches.length > 0 ? lang === "ar" ? "إليك أفضل النتائج التي عثر عليها نظامنا" : "Here are the best matches found by our system" : lang === "ar" ? "لا توجد تطابقات حالية" : "No matches found yet"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "hrLine"
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                children: matches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hintText",
                    children: lang === "ar" ? "لم يتم العثور على بلاغات مطابقة بعد. قم برفع بلاغ لعرض النتائج المحتملة" : "No matching reports were found yet. Submit a report to view potential matches."
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reportList",
                    children: matches.filter((m)=>m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName).map((m, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reportRow flex items-center justify-between gap-4 p-4 mb-3 bg-white rounded-2xl border border-gray-100 shadow-sm",
                            dir: "rtl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 flex-1 min-w-0",
                                    children: [
                                        (()=>{
                                            const score = Math.round(m.matchScore || m.score || 0);
                                            let colorStyle = "";
                                            if (score >= 90) {
                                                colorStyle = "bg-[#D1FAE5] text-[#065F46]";
                                            } else if (score >= 75) {
                                                colorStyle = "bg-[#DBEAFE] text-[#1E40AF]";
                                            } else {
                                                colorStyle = "bg-[#FEF3C7] text-[#92400E]";
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[12px] px-3 py-1 rounded-full font-black shadow-sm flex-shrink-0 ${colorStyle}`,
                                                children: [
                                                    score,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/customer/matches/page.jsx",
                                                lineNumber: 149,
                                                columnNumber: 25
                                            }, this);
                                        })(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportTitle text-gray-800 font-bold text-base truncate",
                                                    children: m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName || "عنصر مطابق"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "reportDate text-xs text-gray-400 font-medium",
                                                    style: {
                                                        marginTop: '2px'
                                                    },
                                                    children: (m.matchScore || m.score || 0) >= 80 ? lang === "ar" ? "تطابق ذكي مؤكد" : "Confirmed Smart Match" : lang === "ar" ? "تطابق محتمل" : "Potential Match"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/customer/matches/page.jsx",
                                            lineNumber: 155,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rowActions flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "smallBtn",
                                        type: "button",
                                        onClick: ()=>router.push(`/customer/match-confirmation?matchId=${m.id || m._id || m.matchId}&itemName=${m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName || "عنصر مطابق"}&score=${m.matchScore || m.score || 0}`),
                                        children: lang === "ar" ? "تأكيد" : "Confirm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/customer/matches/page.jsx",
                                        lineNumber: 171,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/customer/matches/page.jsx",
                                    lineNumber: 170,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, `${m.id || m._id || 'match'}-${index}`, true, {
                            fileName: "[project]/src/app/customer/matches/page.jsx",
                            lineNumber: 127,
                            columnNumber: 5
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/customer/matches/page.jsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/customer/matches/page.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/customer/matches/page.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6883738._.js.map