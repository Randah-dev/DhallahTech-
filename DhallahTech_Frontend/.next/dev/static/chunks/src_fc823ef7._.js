(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/firebase/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: "AIzaSyDjUd0IQzzL6NnOrzgpSVR6m6eeTCZQgho",
    authDomain: "dhallahtech.firebaseapp.com",
    projectId: "dhallahtech",
    storageBucket: "dhallahtech.firebasestorage.app",
    messagingSenderId: "251529980765",
    appId: "1:251529980765:web:2ce09729330358272fd6b4",
    measurementId: "G-QZ2ZBV5NNG"
};
// تشغيل الفايربيس
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/chat/ChatList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ChatList(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "82390b3af31d9c6c1eacba128430743d160d7157f85a1abb8c6cdd24e69005ed") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "82390b3af31d9c6c1eacba128430743d160d7157f85a1abb8c6cdd24e69005ed";
    }
    const { conversations, onOpen, currentId } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] !== conversations || $[2] !== currentId || $[3] !== onOpen) {
        const sortedConversations = Object.entries(conversations).sort(_ChatListAnonymous);
        t1 = "contactsList";
        t2 = "flex-1 overflow-y-auto bg-gray-50 p-3 space-y-3 custom-scrollbar";
        let t4;
        if ($[7] !== currentId || $[8] !== onOpen) {
            t4 = ({
                "ChatList[sortedConversations.map()]": (t5)=>{
                    const [id, conv] = t5;
                    const lastMsgObj = conv.messages[conv.messages.length - 1];
                    const lastMsgText = lastMsgObj?.message || lastMsgObj?.text || "\u0644\u0627 \u062A\u0648\u062C\u062F \u0631\u0633\u0627\u0626\u0644";
                    const lastTime = lastMsgObj?.timestamp?.toDate ? lastMsgObj.timestamp.toDate().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }) : lastMsgObj?.time || "";
                    const isActive = id === currentId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "ChatList[sortedConversations.map() > <div>.onClick]": ()=>onOpen(id)
                        }["ChatList[sortedConversations.map() > <div>.onClick]"],
                        className: `p-4 cursor-pointer rounded-2xl transition-all duration-300 flex justify-between items-start border-2
                        ${isActive ? "bg-white border-[#5E3085] shadow-lg scale-[1.02] z-10" : "bg-white border-transparent hover:border-purple-100 shadow-sm"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col flex-1 overflow-hidden ml-2 text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-black text-sm mb-1 ${isActive ? "text-[#5E3085]" : "text-gray-800"}`,
                                        children: conv.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatList.jsx",
                                        lineNumber: 37,
                                        columnNumber: 233
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs truncate w-full ${isActive ? "text-gray-600" : "text-gray-400"}`,
                                        children: lastMsgText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatList.jsx",
                                        lineNumber: 37,
                                        columnNumber: 344
                                    }, this),
                                    conv.item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] bg-purple-50 text-[#5E3085] px-2 py-0.5 rounded-full mt-2 w-fit font-bold border border-purple-100",
                                        children: conv.item
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatList.jsx",
                                        lineNumber: 37,
                                        columnNumber: 464
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatList.jsx",
                                lineNumber: 37,
                                columnNumber: 163
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-gray-400 whitespace-nowrap",
                                        children: lastTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatList.jsx",
                                        lineNumber: 37,
                                        columnNumber: 664
                                    }, this),
                                    (()=>{
                                        const unreadCount = conv.messages.filter({
                                            "ChatList[sortedConversations.map() > <anonymous> > conv.messages.filter()]": (msg)=>msg.status !== "read" && msg.senderId === id
                                        }["ChatList[sortedConversations.map() > <anonymous> > conv.messages.filter()]"]).length;
                                        if (unreadCount > 0 && !isActive) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-[#5E3085] text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce",
                                                children: unreadCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/chat/ChatList.jsx",
                                                lineNumber: 42,
                                                columnNumber: 26
                                            }, this);
                                        }
                                        return isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-[#5E3085] rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatList.jsx",
                                            lineNumber: 44,
                                            columnNumber: 35
                                        }, this) : null;
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/chat/ChatList.jsx",
                                lineNumber: 37,
                                columnNumber: 617
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/src/components/chat/ChatList.jsx",
                        lineNumber: 34,
                        columnNumber: 18
                    }, this);
                }
            })["ChatList[sortedConversations.map()]"];
            $[7] = currentId;
            $[8] = onOpen;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t3 = sortedConversations.map(t4);
        $[1] = conversations;
        $[2] = currentId;
        $[3] = onOpen;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: t1,
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatList.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c = ChatList;
function _ChatListAnonymous(t0, t1) {
    const [, convA] = t0;
    const [, convB] = t1;
    const lastMsgA = convA.messages[convA.messages.length - 1];
    const lastMsgB = convB.messages[convB.messages.length - 1];
    const timeA = lastMsgA?.timestamp?.toDate ? lastMsgA.timestamp.toDate().getTime() : lastMsgA?.timestamp || 0;
    const timeB = lastMsgB?.timestamp?.toDate ? lastMsgB.timestamp.toDate().getTime() : lastMsgB?.timestamp || 0;
    return timeB - timeA;
}
var _c;
__turbopack_context__.k.register(_c, "ChatList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/MessageBubble.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function MessageBubble(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "97492ffd6f46fcd41608cb893af79f059a427c36ff3cd1a2ee749be194710805") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "97492ffd6f46fcd41608cb893af79f059a427c36ff3cd1a2ee749be194710805";
    }
    const { text, type, time } = t0;
    const isSent = type === "sent";
    const t1 = `flex flex-col ${isSent ? "items-end" : "items-start"} space-y-1`;
    const t2 = `px-4 py-2.5 rounded-[1.25rem] text-sm font-semibold shadow-sm border
                ${isSent ? "bg-[#5E3085] text-white rounded-tr-none border-[#4a2669]" : "bg-white text-gray-700 rounded-tl-none border-gray-200"}`;
    let t3;
    if ($[1] !== t2 || $[2] !== text) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageBubble.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = text;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== time) {
        t4 = time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[10px] text-gray-400 font-bold px-2",
            children: time
        }, void 0, false, {
            fileName: "[project]/src/components/chat/MessageBubble.jsx",
            lineNumber: 30,
            columnNumber: 18
        }, this);
        $[4] = time;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t1 || $[7] !== t3 || $[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/MessageBubble.jsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[6] = t1;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_c = MessageBubble;
var _c;
__turbopack_context__.k.register(_c, "MessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatWindow.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/MessageBubble.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ChatWindow(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "16f5659db47571a22a8b1d78581d76515a4bd7890bff62ed0fd65ff0de1c6e16") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16f5659db47571a22a8b1d78581d76515a4bd7890bff62ed0fd65ff0de1c6e16";
    }
    const { conversationName, officeName, messages, myId, onSend, onBack } = t0;
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== input || $[2] !== onSend) {
        t1 = ({
            "ChatWindow[handleSend]": ()=>{
                if (input.trim() !== "") {
                    onSend(input);
                    setInput("");
                }
            }
        })["ChatWindow[handleSend]"];
        $[1] = input;
        $[2] = onSend;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSend = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "19",
                    y1: "12",
                    x2: "5",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                    lineNumber: 42,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "12 5 19 12 12 19"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                    lineNumber: 42,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== onBack) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onBack,
            className: "p-2 ml-1 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = onBack;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const t4 = conversationName ? conversationName[0] : "\u061F";
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11 h-11 bg-[#5E3085] rounded-2xl flex items-center justify-center text-white font-black shadow-md",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== conversationName) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-black text-base text-gray-800 leading-tight",
            children: conversationName
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[9] = conversationName;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== officeName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[11px] text-[#5E3085] font-bold mt-0.5",
            children: officeName
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[11] = officeName;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t3 || $[17] !== t5 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-white border-b-2 border-gray-50 flex items-center shadow-sm z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-right",
                children: [
                    t3,
                    t5,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatWindow.jsx",
                lineNumber: 91,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t5;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== messages || $[21] !== myId) {
        let t11;
        if ($[23] !== myId) {
            t11 = ({
                "ChatWindow[messages.map()]": (msg)=>{
                    const isMe = msg.senderId === myId;
                    const messageTime = msg.timestamp?.toDate ? msg.timestamp.toDate().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }) : msg.time || "";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isMe ? "justify-end" : "justify-start"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col max-w-[85%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$MessageBubble$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: msg.message || msg.text,
                                    type: isMe ? "sent" : "received",
                                    time: messageTime
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                                    lineNumber: 110,
                                    columnNumber: 140
                                }, this),
                                isMe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] mt-1 mr-2 self-end font-black transition-all ${msg.status === "read" ? "text-blue-500" : "text-gray-400"}`,
                                    children: msg.status === "read" ? "\u2713\u2713 \u0645\u0642\u0631\u0648\u0621" : "\u2713 \u0645\u0631\u0633\u0644"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                                    lineNumber: 110,
                                    columnNumber: 250
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatWindow.jsx",
                            lineNumber: 110,
                            columnNumber: 97
                        }, this)
                    }, msg.id, false, {
                        fileName: "[project]/src/components/chat/ChatWindow.jsx",
                        lineNumber: 110,
                        columnNumber: 18
                    }, this);
                }
            })["ChatWindow[messages.map()]"];
            $[23] = myId;
            $[24] = t11;
        } else {
            t11 = $[24];
        }
        t10 = messages.map(t11);
        $[20] = messages;
        $[21] = myId;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 p-4 md:p-6 overflow-y-auto flex flex-col-reverse space-y-4 space-y-reverse",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "ChatWindow[<input>.onChange]": (e)=>setInput(e.target.value)
        })["ChatWindow[<input>.onChange]"];
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== handleSend) {
        t13 = ({
            "ChatWindow[<input>.onKeyPress]": (e_0)=>e_0.key === "Enter" && handleSend()
        })["ChatWindow[<input>.onKeyPress]"];
        $[28] = handleSend;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== input || $[31] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: input,
            onChange: t12,
            onKeyPress: t13,
            type: "text",
            placeholder: "\u0627\u0643\u062A\u0628 \u0631\u0633\u0627\u0644\u062A\u0643...",
            className: "flex-1 bg-transparent border-none outline-none text-sm p-2 text-right font-bold"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[30] = input;
        $[31] = t13;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3",
            className: "rotate-180",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "22",
                    y1: "2",
                    x2: "11",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                    lineNumber: 163,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "22 2 15 22 11 13 2 9 22 2"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatWindow.jsx",
                    lineNumber: 163,
                    columnNumber: 171
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== handleSend) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSend,
            className: "w-10 h-10 bg-[#5E3085] text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-transform",
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[34] = handleSend;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t14 || $[37] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 md:p-4 bg-white border-t-2 border-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 bg-gray-50 rounded-[1.5rem] px-4 py-2 border-2 border-transparent focus-within:border-[#5E3085] transition-all",
                children: [
                    t14,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatWindow.jsx",
                lineNumber: 178,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[36] = t14;
        $[37] = t16;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t11 || $[40] !== t17 || $[41] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col bg-[#F8F9FA] h-full overflow-hidden",
            children: [
                t9,
                t11,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatWindow.jsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[39] = t11;
        $[40] = t17;
        $[41] = t9;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    return t18;
}
_s(ChatWindow, "RL+Zbs2TIka0YpcBOJptmHqCgYA=");
_c = ChatWindow;
var _c;
__turbopack_context__.k.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/chat/ChatEngine.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatList.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatWindow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatWindow.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatEngine({ externalSelectedChat, onSendMessage }) {
    _s();
    const [allMessages, setAllMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentChatId, setCurrentChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOffice, setSelectedOffice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [myId, setMyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [offices, setOffices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatEngine.useEffect": ()=>{
            setIsMounted(true);
            const finalId = localStorage.getItem('id') || localStorage.getItem('userId');
            if (finalId) setMyId(finalId);
        }
    }["ChatEngine.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatEngine.useEffect": ()=>{
            if (externalSelectedChat) {
                setCurrentChatId(externalSelectedChat.officerId);
                setSelectedOffice(externalSelectedChat);
            }
        }
    }["ChatEngine.useEffect"], [
        externalSelectedChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatEngine.useEffect": ()=>{
            if (!isMounted) return;
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "offices"), {
                "ChatEngine.useEffect.unsubscribe": (snapshot)=>{
                    const officesList = snapshot.docs.map({
                        "ChatEngine.useEffect.unsubscribe.officesList": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["ChatEngine.useEffect.unsubscribe.officesList"]);
                    setOffices(officesList);
                }
            }["ChatEngine.useEffect.unsubscribe"]);
            return ({
                "ChatEngine.useEffect": ()=>unsubscribe()
            })["ChatEngine.useEffect"];
        }
    }["ChatEngine.useEffect"], [
        isMounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatEngine.useEffect": ()=>{
            if (!isMounted || !myId) return;
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chats"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("participants", "array-contains", myId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
            const unsubscribe_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "ChatEngine.useEffect.unsubscribe_0": (snapshot_0)=>{
                    const msgs = snapshot_0.docs.map({
                        "ChatEngine.useEffect.unsubscribe_0.msgs": (doc_0)=>({
                                id: doc_0.id,
                                ...doc_0.data()
                            })
                    }["ChatEngine.useEffect.unsubscribe_0.msgs"]);
                    setAllMessages(msgs);
                }
            }["ChatEngine.useEffect.unsubscribe_0"]);
            return ({
                "ChatEngine.useEffect": ()=>unsubscribe_0()
            })["ChatEngine.useEffect"];
        }
    }["ChatEngine.useEffect"], [
        isMounted,
        myId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatEngine.useEffect": ()=>{
            const markAsRead = {
                "ChatEngine.useEffect.markAsRead": async ()=>{
                    if (!currentChatId || !myId || allMessages.length === 0) return;
                    const unreadMessages = allMessages.filter({
                        "ChatEngine.useEffect.markAsRead.unreadMessages": (msg)=>msg.senderId === currentChatId && msg.receiverId === myId && msg.status !== 'read'
                    }["ChatEngine.useEffect.markAsRead.unreadMessages"]);
                    if (unreadMessages.length > 0) {
                        try {
                            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
                            unreadMessages.forEach({
                                "ChatEngine.useEffect.markAsRead": (msg_0)=>{
                                    const msgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chats", msg_0.id);
                                    batch.update(msgRef, {
                                        status: 'read'
                                    });
                                }
                            }["ChatEngine.useEffect.markAsRead"]);
                            await batch.commit();
                        } catch (err) {
                            console.error("Error marking messages as read:", err);
                        }
                    }
                }
            }["ChatEngine.useEffect.markAsRead"];
            markAsRead();
        }
    }["ChatEngine.useEffect"], [
        currentChatId,
        allMessages,
        myId
    ]);
    const conversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatEngine.useMemo[conversations]": ()=>{
            return allMessages.reduce({
                "ChatEngine.useMemo[conversations]": (acc, msg_1)=>{
                    const otherId = msg_1.senderId === myId ? msg_1.receiverId : msg_1.senderId;
                    if (!acc[otherId]) {
                        let displayName = msg_1.senderId === myId ? msg_1.receiverName : msg_1.senderName;
                        const matchingOffice = offices.find({
                            "ChatEngine.useMemo[conversations].matchingOffice": (office)=>office.officerId === otherId
                        }["ChatEngine.useMemo[conversations].matchingOffice"]);
                        if (matchingOffice && matchingOffice.officeName) {
                            displayName = matchingOffice.officeName;
                        }
                        acc[otherId] = {
                            name: displayName,
                            messages: [],
                            officeName: matchingOffice ? matchingOffice.officeName : null
                        };
                    }
                    acc[otherId].messages.push(msg_1);
                    return acc;
                }
            }["ChatEngine.useMemo[conversations]"], {});
        }
    }["ChatEngine.useMemo[conversations]"], [
        allMessages,
        myId,
        offices
    ]);
    const handleSendMessage = async (text)=>{
        if (!text.trim() || !currentChatId) return;
        const cleanedText = text.trim();
        const wordsArray = cleanedText.split(/\s+/).filter(Boolean);
        const wordCount = wordsArray.length;
        if (wordCount > 200) {
            alert(`عذراً، لا يمكن أن تتجاوز الرسالة 200 كلمة. (رسالتك الحالية تحتوي على ${wordCount} كلمة)`);
            return;
        }
        try {
            if (onSendMessage) {
                await onSendMessage(text, currentChatId, selectedOffice?.officeName || null);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendMessageApi"])({
                    receiverId: currentChatId,
                    message: text,
                    officeId: selectedOffice?.id || null
                });
            }
        } catch (e) {
            console.error(e);
            alert("فشل الإرسال");
        }
    };
    if (!isMounted || !myId) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 h-[85vh] md:h-[75vh] bg-gray-50 rounded-3xl overflow-hidden p-2",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full lg:w-1/3 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm 
            ${currentChatId ? 'hidden lg:flex' : 'flex'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border-b font-black text-[#5E3085] text-xl",
                        children: "المحادثات"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatEngine.jsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            conversations: conversations,
                            onOpen: (id)=>setCurrentChatId(id),
                            currentId: currentChatId
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatEngine.jsx",
                            lineNumber: 123,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatEngine.jsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatEngine.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full lg:w-2/3 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm 
            ${currentChatId ? 'flex' : 'hidden lg:flex'}`,
                children: currentChatId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatWindow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    conversationName: conversations[currentChatId]?.name || "محادثة",
                    messages: [
                        ...allMessages.filter((m)=>m.participants?.includes(currentChatId) && m.participants?.includes(myId))
                    ].reverse(),
                    myId: myId,
                    onSend: handleSendMessage,
                    onBack: ()=>setCurrentChatId(null)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatEngine.jsx",
                    lineNumber: 129,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-purple-50 rounded-full mb-4 text-4xl",
                            children: "💬"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatEngine.jsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold",
                            children: "اختر محادثة للبدء"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatEngine.jsx",
                            lineNumber: 131,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/ChatEngine.jsx",
                    lineNumber: 129,
                    columnNumber: 315
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatEngine.jsx",
                lineNumber: 127,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/chat/ChatEngine.jsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
_s(ChatEngine, "kT8Jg+cZWnpDFheYwVCMTWKd7Oo=");
_c = ChatEngine;
var _c;
__turbopack_context__.k.register(_c, "ChatEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/customer/chats/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatEngine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatEngine.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/config.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CustomerChatPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "64c142dace936f76a4de6c27ba0a0e2a99100890a0f7982ffe884591f606d9ae") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64c142dace936f76a4de6c27ba0a0e2a99100890a0f7982ffe884591f606d9ae";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [selectedFromSearch, setSelectedFromSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "CustomerChatPage[handleSearch]": async (e)=>{
                const term = e.target.value;
                setSearchTerm(term);
                if (term.length > 1) {
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "offices"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("officeName", ">=", term), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("officeName", "<=", term + "\uF8FF"));
                    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                    setSearchResults(snap.docs.map(_CustomerChatPageHandleSearchSnapDocsMap));
                } else {
                    setSearchResults([]);
                }
            }
        })["CustomerChatPage[handleSearch]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleSearch = t1;
    let t2;
    if ($[3] !== searchTerm) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "\u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u0643\u062A\u0628 \u0644\u0645\u0631\u0627\u0633\u0644\u062A\u0647...",
            value: searchTerm,
            onChange: handleSearch,
            className: "w-full p-4 rounded-2xl border shadow-sm outline-none focus:border-purple-500"
        }, void 0, false, {
            fileName: "[project]/src/app/customer/chats/page.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[3] = searchTerm;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== searchResults) {
        t3 = searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-50 w-full bg-white shadow-xl rounded-xl mt-2 border",
            children: searchResults.map({
                "CustomerChatPage[searchResults.map()]": (office)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: {
                            "CustomerChatPage[searchResults.map() > <div>.onClick]": ()=>{
                                setSelectedFromSearch(office);
                                setSearchResults([]);
                                setSearchTerm("");
                            }
                        }["CustomerChatPage[searchResults.map() > <div>.onClick]"],
                        className: "p-4 hover:bg-gray-50 cursor-pointer border-b last:border-0",
                        children: office.officeName
                    }, office.id, false, {
                        fileName: "[project]/src/app/customer/chats/page.jsx",
                        lineNumber: 57,
                        columnNumber: 60
                    }, this)
            }["CustomerChatPage[searchResults.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/customer/chats/page.jsx",
            lineNumber: 56,
            columnNumber: 38
        }, this);
        $[5] = searchResults;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/customer/chats/page.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== selectedFromSearch) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatEngine$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            externalSelectedChat: selectedFromSearch
        }, void 0, false, {
            fileName: "[project]/src/app/customer/chats/page.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[10] = selectedFromSearch;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t4 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gray-50 min-h-screen",
            dir: "rtl",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/customer/chats/page.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_s(CustomerChatPage, "ZfEkYH2qlZ7KIyO/T3Dj357mPBA=");
_c = CustomerChatPage;
function _CustomerChatPageHandleSearchSnapDocsMap(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}
var _c;
__turbopack_context__.k.register(_c, "CustomerChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fc823ef7._.js.map