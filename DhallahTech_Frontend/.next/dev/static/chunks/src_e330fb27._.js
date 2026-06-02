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
"[project]/src/components/commonForm/FormField.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function FormField(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "0f30deb550331b37cdca18added19f381fdbb9c422015d9f667e7d887bbf3d8f") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f30deb550331b37cdca18added19f381fdbb9c422015d9f667e7d887bbf3d8f";
    }
    const { label, placeholder, isTextArea: t1, type: t2, value, onChange, required: t3 } = t0;
    const isTextArea = t1 === undefined ? false : t1;
    const type = t2 === undefined ? "text" : t2;
    const required = t3 === undefined ? false : t3;
    let t4;
    if ($[1] !== label) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "fieldTitle mb-2",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/commonForm/FormField.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== isTextArea || $[4] !== onChange || $[5] !== placeholder || $[6] !== required || $[7] !== type || $[8] !== value) {
        t5 = isTextArea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            className: "textarea text-right h-32",
            placeholder: placeholder,
            value: value,
            onChange: onChange,
            required: required
        }, void 0, false, {
            fileName: "[project]/src/components/commonForm/FormField.jsx",
            lineNumber: 34,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            className: "input text-right",
            placeholder: placeholder,
            value: value,
            onChange: onChange,
            required: required
        }, void 0, false, {
            fileName: "[project]/src/components/commonForm/FormField.jsx",
            lineNumber: 34,
            columnNumber: 155
        }, this);
        $[3] = isTextArea;
        $[4] = onChange;
        $[5] = placeholder;
        $[6] = required;
        $[7] = type;
        $[8] = value;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col mb-4",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/commonForm/FormField.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c = FormField;
var _c;
__turbopack_context__.k.register(_c, "FormField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/offecer/OfficeRequest/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfficeRequestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/commonForm/FormField.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OfficeRequestPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cityName: "",
        officeName: "",
        location: "",
        fullAddress: "",
        email: "",
        phone: "",
        capacity: "",
        workingHours: "",
        managerName: "",
        notes: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checking, setChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficeRequestPage.useEffect": ()=>{
            const checkExistingRequest = {
                "OfficeRequestPage.useEffect.checkExistingRequest": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const response = await fetch('http://localhost:5000/api/officer/my-office', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (response.ok) {
                            const result = await response.json();
                            const officeData = result.data?.office || result.office || result.data;
                            if (officeData?.status === "approved" || officeData?.status === "active") {
                                router.push("/offecer/dashboard");
                            } else {
                                router.push("/offecer/request-status");
                            }
                        } else {
                            setChecking(false);
                        }
                    } catch (error) {
                        console.error("خطأ في فحص الطلبات السابقة:", error);
                        setChecking(false);
                    }
                }
            }["OfficeRequestPage.useEffect.checkExistingRequest"];
            checkExistingRequest();
        }
    }["OfficeRequestPage.useEffect"], [
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const { notes, ...requiredFields } = formData;
        const hasEmptyField = Object.values(requiredFields).some((value)=>value.trim() === "");
        if (hasEmptyField) {
            alert("الرجاء ملء جميع الخانات الإجبارية ⚠️");
            return;
        }
        const phoneRegex = /^\+966\d{9}$/;
        const formattedPhone = formData.phone.trim();
        if (!phoneRegex.test(formattedPhone)) {
            alert("صيغة رقم الهاتف غير صحيحة ❌\nيجب أن يبدأ بـ +966 متبوعاً بـ 9 أرقام (مثال: +966512345678)");
            return;
        }
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerOffice"])({
                ...formData,
                phone: formattedPhone
            });
            alert("تم إرسال طلب إنشاء المكتب بنجاح ✅");
            router.push("/offecer/request-status");
        } catch (err) {
            console.error("تفاصيل الخطأ:", err);
            const serverMessage = err.response?.data?.error || err.response?.data?.message || "حدث خطأ أثناء الإرسال";
            alert(` فشل الإرسال: ${serverMessage}`);
        } finally{
            setLoading(false);
        }
    };
    if (checking) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center min-h-[400px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"
        }, void 0, false, {
            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
        lineNumber: 83,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10 p-4 md:p-8 max-w-3xl mx-auto",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "upload-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold mb-4 text-center text-gray-800",
                    children: "طلب إنشاء مكتب جديد"
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm md:text-base font-medium mb-8 text-center text-gray-500 px-2 leading-relaxed",
                    children: "لكي يتم الوصول لكل المزايا ولوحة التحكم يجب توثيق مكتب المفقودات الخاص بك على النظام."
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                    lineNumber: 92,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "formWrap",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "twoCols",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "المدينة",
                                    placeholder: "مثال: مكة المكرمة",
                                    value: formData.cityName,
                                    required: true,
                                    onChange: (e_0)=>setFormData({
                                            ...formData,
                                            cityName: e_0.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "اسم المكتب",
                                    placeholder: "مثال: مكتب مفقودات الحجاز مول",
                                    value: formData.officeName,
                                    required: true,
                                    onChange: (e_1)=>setFormData({
                                            ...formData,
                                            officeName: e_1.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "موقع المكتب",
                            placeholder: "اسم الشارع- الحي",
                            value: formData.location,
                            required: true,
                            onChange: (e_2)=>setFormData({
                                    ...formData,
                                    location: e_2.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "العنوان التفصيلي",
                            placeholder: "اكتب العنوان...",
                            isTextArea: true,
                            value: formData.fullAddress,
                            required: true,
                            onChange: (e_3)=>setFormData({
                                    ...formData,
                                    fullAddress: e_3.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "twoCols",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "البريد الإلكتروني",
                                    placeholder: "office@example.com",
                                    type: "email",
                                    value: formData.email,
                                    required: true,
                                    onChange: (e_4)=>setFormData({
                                            ...formData,
                                            email: e_4.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "رقم الهاتف",
                                    placeholder: "+966512345678",
                                    type: "tel",
                                    value: formData.phone,
                                    required: true,
                                    onChange: (e_5)=>setFormData({
                                            ...formData,
                                            phone: e_5.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "twoCols",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "سعة المكتب(عدد العناصر المحتملة)",
                                    placeholder: "500",
                                    type: "number",
                                    value: formData.capacity,
                                    required: true,
                                    onChange: (e_6)=>setFormData({
                                            ...formData,
                                            capacity: e_6.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "ساعات العمل",
                                    placeholder: "8 صباحاً - 8 مساءً",
                                    value: formData.workingHours,
                                    required: true,
                                    onChange: (e_7)=>setFormData({
                                            ...formData,
                                            workingHours: e_7.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "مدير المكتب",
                            placeholder: "اسم مدير المكتب",
                            value: formData.managerName,
                            required: true,
                            onChange: (e_8)=>setFormData({
                                    ...formData,
                                    managerName: e_8.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$commonForm$2f$FormField$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "ملاحظات إضافية (اختياري)",
                            placeholder: "أي ملاحظات...",
                            isTextArea: true,
                            value: formData.notes,
                            onChange: (e_9)=>setFormData({
                                    ...formData,
                                    notes: e_9.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "bigSubmit mt-6 w-full md:w-auto px-8 py-3",
                            children: loading ? "جاري الإرسال..." : "إرسال"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/offecer/OfficeRequest/page.jsx",
        lineNumber: 86,
        columnNumber: 10
    }, this);
}
_s(OfficeRequestPage, "pRPEKcOxKwqPQUv4mql3ixk/fz4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OfficeRequestPage;
var _c;
__turbopack_context__.k.register(_c, "OfficeRequestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e330fb27._.js.map