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
"[project]/src/components/upload/UploadBox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UploadBox({ userRole: initialRole }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("لم يتم اختيار ملف");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [foundDate, setFoundDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().slice(0, 16));
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hasPhoto, setHasPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [itemName, setItemName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Lost");
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialRole || "customer");
    const [verificationQuestion, setVerificationQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [correctAnswer, setCorrectAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerUpload = ()=>fileInputRef.current?.click();
    const handleFileChange = (e)=>setFileName(e.target.files[0]?.name || "لم يتم اختيار ملف");
    const [aiDescription, setAiDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAnalyzeImage = async ()=>{
        if (!fileInputRef.current?.files[0]) {
            alert("الرجاء اختيار صورة أولاً");
            return;
        }
        setIsAnalyzing(true);
        const formData = new FormData();
        formData.append('image', fileInputRef.current.files[0]);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeImage"])(formData);
            setAiDescription(response.data.description);
            setDescription(response.data.description);
        } catch (err) {
            alert("فشل تحليل الصورة");
        } finally{
            setIsAnalyzing(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadBox.useEffect": ()=>{
            if (initialRole === "guest") {
                setUserRole("GUEST");
                return;
            }
            if (initialRole) {
                setUserRole(initialRole.toUpperCase());
                return;
            }
            const savedRole = localStorage.getItem("role");
            if (savedRole) {
                setUserRole(savedRole.toUpperCase());
            } else {
                setUserRole("CUSTOMER");
            }
        }
    }["UploadBox.useEffect"], [
        initialRole
    ]);
    //
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadBox.useEffect": ()=>{
            if (userRole?.toUpperCase() === "OFFICER") {
                const savedOfficeName = localStorage.getItem("officeName") || "مكتب المفقودات";
                setLocation(`${savedOfficeName} - `);
            }
        }
    }["UploadBox.useEffect"], [
        userRole
    ]);
    const handleSubmit = async (e_0)=>{
        if (e_0) e_0.preventDefault();
        if (isSubmitting) return;
        const token = localStorage.getItem('token');
        if (!itemName.trim() || !category || !type || !location.trim() || !foundDate) {
            alert("الرجاء تعبئة جميع البيانات المطلوبة");
            return;
        }
        if (hasPhoto === null) {
            alert("الرجاء تحديد هل لديك صورة أم لا");
            return;
        }
        if (hasPhoto === false && !description.trim()) {
            alert("الرجاء كتابة وصف يدوي للعنصر");
            return;
        }
        const finalDescription = hasPhoto === true ? aiDescription : description;
        if (!finalDescription.trim()) {
            alert("الرجاء كتابة وصف للعنصر أو إنشاء وصف بالذكاء الاصطناعي");
            return;
        }
        setIsSubmitting(true);
        const reportData = {
            itemName,
            category,
            color,
            type,
            location,
            date: foundDate,
            description: finalDescription,
            verificationQuestion: verificationQuestion || "",
            correctAnswer: correctAnswer || ""
        };
        try {
            let response_0;
            response_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItem"])(reportData);
            const result = response_0.data;
            if (result.success) {
                const currentRole = userRole?.toUpperCase();
                if (currentRole === "OFFICER") {
                    alert("تم إنشاء البلاغ بنجاح");
                    router.push("/offecer/my-reports");
                    return;
                } else if (currentRole === "GUEST") {
                    const matches = result.data?.matches || [];
                    sessionStorage.setItem('aiMatches', JSON.stringify(matches));
                    alert("تم إنشاء البلاغ بنجاح");
                    router.push(`/guest/matches?itemId=${result.data?.id}`);
                    return;
                } else {
                    const matches_0 = result.data?.matches || result.matches || [];
                    console.log("المطابقات المستلمة:", matches_0);
                    sessionStorage.setItem('aiMatches', JSON.stringify(matches_0));
                    router.push(`/customer/matches?itemId=${result.data?.id}`);
                }
            } else {
                alert(`❌ فشل: ${result.message || "حدث خطأ في السيرفر"}`);
            }
        } catch (error) {
            console.error("Front-end Error:", error);
            setIsSubmitting(false);
            const serverErrorMessage = error.response?.data?.message || error.response?.data?.error || "حدث خطأ أثناء الإرسال";
            if (error.message === "Network Error") {
                alert("❌ فشل الاتصال بالسيرفر، تأكدي من تشغيل الباك أند");
            } else {
                alert(`❌ رفض السيرفر الطلب: ${serverErrorMessage}`);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:max-w-4xl mx-auto bg-[#F8F9FA] p-4 md:p-6 lg:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-200",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5 md:space-y-8 text-right",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-800 mb-8 text-xl flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-8 bg-[#5E3085] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                "بيانات العنصر الأساسية"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                            children: "اسم العنصر"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: itemName,
                                            onChange: (e_1)=>setItemName(e_1.target.value),
                                            className: "w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all",
                                            placeholder: "مثال: ساعة يد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 151,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 149,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                            children: "التصنيف"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 154,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: category,
                                            onChange: (e_2)=>setCategory(e_2.target.value),
                                            className: "w-full p-3.5 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "اختر التصنيف المناسب"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Personal Tech",
                                                    children: "الأجهزة الشخصية والإلكترونيات (Personal Tech)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cables & Power",
                                                    children: "ملحقات الطاقة والكابلات (Cables & Power)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Valuables",
                                                    children: "المقتنيات الثمينة والصغيرة (Valuables)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Bags & Containers",
                                                    children: "الحقائب والأوعية (Bags & Containers)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Academic Supplies",
                                                    children: "المستلزمات الأكاديمية والكتب (Academic Supplies)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "IDs & Documents",
                                                    children: "الهويات والبطاقات الرسمية (IDs & Documents)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Clothing",
                                                    children: "الملابس والمظهر (Clothing)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Medical & Personal Care",
                                                    children: "مستلزمات طبية وشخصية (Medical & Personal Care)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Miscellaneous",
                                                    children: "أخرى (Miscellaneous)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 165,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 155,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 153,
                                    columnNumber: 24
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                            children: "اللون"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: color,
                                            onChange: (e_3)=>setColor(e_3.target.value),
                                            className: "w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all",
                                            placeholder: "مثال: أسود"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                            children: "نوع البلاغ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: type,
                                            onChange: (e_4)=>setType(e_4.target.value),
                                            className: "w-full p-3.5 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none shadow-inner transition-all text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lost",
                                                    children: "مفقود"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 30
                                                }, this),
                                                userRole?.toUpperCase() === "OFFICER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Found",
                                                    children: "موجود"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 71
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 143,
                    columnNumber: 14
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-800 mb-4 text-sm md:text-lg text-center px-2",
                            children: "هل لديك صورة للغرض المفقود (لا تحتوي على معلومات حساسة)؟"
                        }, void 0, false, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 185,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setHasPhoto(true),
                                    className: `w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${hasPhoto === true ? 'bg-[#5E3085] text-white' : 'bg-white text-[#5E3085] border border-[#5E3085]'}`,
                                    children: "نعم، لدي صورة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 189,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setHasPhoto(false),
                                    className: `w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${hasPhoto === false ? 'bg-[#5E3085] text-white' : 'bg-white text-[#5E3085] border border-[#5E3085]'}`,
                                    children: "لا، سأصفه يدوياً"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 192,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 188,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 184,
                    columnNumber: 15
                }, this),
                hasPhoto === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-800 mb-8 text-xl flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-8 bg-[#5E3085] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, this),
                                "رفع صورة"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 198,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-black text-gray-600 mb-3 mr-2",
                                                    children: "رفع صورة"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 p-3 border-2 border-gray-100 rounded-2xl bg-gray-100 shadow-inner",
                                                    dir: "ltr",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: triggerUpload,
                                                            className: "px-5 py-2 bg-white text-[#5E3085] text-xs rounded-xl border border-gray-300 font-black shadow-sm hover:bg-[#5E3085] hover:text-white transition-all",
                                                            children: "Choose File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                            lineNumber: 207,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 text-sm truncate flex-1 font-bold",
                                                            children: fileName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            ref: fileInputRef,
                                                            className: "hidden",
                                                            accept: "image/*",
                                                            onChange: handleFileChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                            lineNumber: 211,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 204,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleAnalyzeImage,
                                            disabled: isAnalyzing,
                                            className: "w-full h-14 bg-white border-2 border-[#5E3085] text-[#5E3085] rounded-2xl font-black text-sm hover:bg-[#F3EBFF] transition-all shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-magic ml-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 33
                                                }, this),
                                                " ",
                                                isAnalyzing ? "جاري التحليل..." : "إنشاء وصف بالذكاء الاصطناعي"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 214,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 203,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-black text-gray-600 mb-3 mr-2 ",
                                            children: "الوصف (قابل للتعديل)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 219,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: aiDescription,
                                            onChange: (e_5)=>setAiDescription(e_5.target.value),
                                            className: "w-full p-4 bg-gray-100 rounded-xl md:rounded-[2rem] h-28 md:h-36 outline-none border-2 border-transparent focus:border-[#5E3085] text-base text-right resize-none transition-all shadow-inner focus:bg-white text-gray-800",
                                            placeholder: "الوصف المنشأ بالذكاء الاصطناعي..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                                            lineNumber: 220,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 218,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 197,
                    columnNumber: 34
                }, this),
                hasPhoto === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-800 mb-8 text-xl flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-8 bg-[#5E3085] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 226,
                                    columnNumber: 25
                                }, this),
                                "وصف يدوي"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 225,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-black text-gray-600 mb-3 mr-2",
                                    children: "وصف يدوي مفصل"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: description,
                                    onChange: (e_6)=>setDescription(e_6.target.value),
                                    className: "w-full p-5 bg-gray-100 rounded-[2rem] h-48 outline-none border-2 border-transparent focus:border-[#5E3085] text-base text-right resize-none transition-all shadow-inner focus:bg-white text-gray-700",
                                    placeholder: "اكتب وصف العنصر بالتفصيل (اللون، العلامة التجارية، مكان العثور)..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 231,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 229,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 224,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-2 border-gray-100 md:border-gray-200 rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 shadow-sm hover:border-[#5E3085] transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-800 mb-8 text-xl flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-8 bg-[#5E3085] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, this),
                                "تحديد المكان والوقت"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 236,
                            columnNumber: 24
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                    children: "المكان"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 241,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: location,
                                    onChange: (e_7)=>setLocation(e_7.target.value),
                                    className: "w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none transition-all text-right shadow-inner",
                                    placeholder: "حدد مكان المفقود ..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 242,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 240,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-black text-gray-600 mb-2 mr-2",
                                    children: "الوقت والتاريخ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 245,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "datetime-local",
                                    value: foundDate,
                                    onChange: (e_8)=>setFoundDate(e_8.target.value),
                                    className: "w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#5E3085] outline-none transition-all text-left shadow-inner"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 244,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 235,
                    columnNumber: 17
                }, this),
                userRole?.toUpperCase() === "OFFICER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#F1F3F5] p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 border-gray-200 space-y-4 md:space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm md:text-base font-black text-gray-700 mb-2 mr-2 text-right",
                                    children: "سؤال التحقق (اختياري)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: verificationQuestion,
                                    onChange: (e_9)=>setVerificationQuestion(e_9.target.value),
                                    className: "w-full p-5 bg-white rounded-2xl border-2 border-gray-200 outline-none focus:border-[#5E3085] text-base text-right shadow-sm transition-all",
                                    placeholder: "ادخل سؤال بإجابة ثابته لا تتغير مثل :ماهو رقم الهوية داخل المحفظة؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 251,
                            columnNumber: 18
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-base font-black text-gray-700 mb-3 mr-4 text-right ",
                                    children: "الإجابة الصحيحة"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: correctAnswer,
                                    onChange: (e_10)=>setCorrectAnswer(e_10.target.value),
                                    className: "w-full p-5 bg-white rounded-2xl border-2 border-[#5E3085]/20 outline-none focus:border-[#5E3085] text-base text-right shadow-sm transition-all",
                                    placeholder: "ادخل الإجابة الدقيقة هنا..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] text-gray-400 mt-2 mr-4",
                                    children: "* سيقوم النظام بمقارنة إجابة المستخدم بهذه الكلمة بدقة."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadBox.jsx",
                            lineNumber: 257,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 250,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSubmit,
                    disabled: isSubmitting,
                    className: `w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-black text-white shadow-lg transform active:scale-95 flex items-center justify-center gap-2.5 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#5E3085] hover:bg-[#4a2669]'}`,
                    children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-spinner fa-spin text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/upload/UploadBox.jsx",
                                lineNumber: 270,
                                columnNumber: 23
                            }, this),
                            "جاري الحفــــظ..."
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-save text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/upload/UploadBox.jsx",
                                lineNumber: 273,
                                columnNumber: 25
                            }, this),
                            "حفــــظ"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/upload/UploadBox.jsx",
                    lineNumber: 268,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/upload/UploadBox.jsx",
            lineNumber: 140,
            columnNumber: 12
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/upload/UploadBox.jsx",
        lineNumber: 138,
        columnNumber: 10
    }, this);
}
_s(UploadBox, "raazrSM6HVcK1wxQHIZ1zIddZJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadBox;
var _c;
__turbopack_context__.k.register(_c, "UploadBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/offecer/upload/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/upload/UploadBox.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function UploadPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b006e4b40eaf6590f475a69e8db98a55125c7f7f6301ae4ced273a82c7ac4680") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b006e4b40eaf6590f475a69e8db98a55125c7f7f6301ae4ced273a82c7ac4680";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-1 min-h-screen p-4 bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadBox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userRole: "Officer"
            }, void 0, false, {
                fileName: "[project]/src/app/offecer/upload/page.jsx",
                lineNumber: 15,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/offecer/upload/page.jsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = UploadPage;
var _c;
__turbopack_context__.k.register(_c, "UploadPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b2e235c7._.js.map