(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/offecer/my-reports/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ReportDetailsPage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportDetailsPage.useEffect": ()=>{
            const dataString = sessionStorage.getItem('selectedReport');
            if (dataString) {
                try {
                    setReport(JSON.parse(dataString));
                } catch (e) {
                    console.error("Error parsing report data:", e);
                }
            }
        }
    }["ReportDetailsPage.useEffect"], [
        params.id
    ]);
    if (!report) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center font-bold text-[#5E3085]",
            children: "جاري تحميل تفاصيل البلاغ..."
        }, void 0, false, {
            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
            lineNumber: 22,
            columnNumber: 12
        }, this);
    }
    const formatReportDate = (dateObj)=>{
        if (!dateObj) return "تاريخ غير محدد";
        const seconds = dateObj._seconds ? dateObj._seconds * 1000 : dateObj;
        return new Date(seconds).toLocaleDateString('ar-SA') + ' ' + new Date(seconds).toLocaleTimeString('ar-SA', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const handleMarkAsDelivered = async ()=>{
        if (!window.confirm("هل أنت متأكد من تغيير حالة البلاغ إلى 'تم التسليم'؟")) return;
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:5000/api/items/update-status/${report._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    status: 'Claimed'
                })
            });
            const result = await response.json();
            if (response.ok && result.success) {
                alert(" تم تحديث حالة البلاغ بنجاح وإغلاقه!");
                router.back();
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
    const handleDeleteReport = async ()=>{
        if (!window.confirm(" هل أنت متأكد من حذف هذا البلاغ نهائياً؟")) return;
        const token_0 = localStorage.getItem('token');
        try {
            const response_0 = await fetch(`http://localhost:5000/api/items/delete/${report._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token_0}`
                }
            });
            const result_0 = await response_0.json();
            if (response_0.ok && result_0.success) {
                alert(" تم حذف البلاغ بنجاح.");
                router.back();
            }
        } catch (error_0) {
            console.error("Error deleting report:", error_0);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8F9FA] p-4 md:p-8",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto bg-white rounded-[2.5rem] border border-gray-200 p-6 md:p-10 shadow-sm text-right",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.back(),
                    className: "mb-6 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl font-bold text-sm transition-all",
                    children: "→ عودة للقائمة"
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-100 pb-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-8 bg-[#5E3085] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-black text-[#5E3085]",
                                    children: report.itemName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-xs mr-5",
                            children: [
                                "رقم البلاغ الرقمي: ",
                                report._id
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-4 py-1.5 rounded-full text-xs font-bold border ${report.status?.toLowerCase() === 'claimed' ? 'bg-green-100 text-green-700 border-green-200' : report.status?.toLowerCase() === 'matched' ? 'bg-purple-100 text-[#5E3085] border-purple-200' : 'bg-orange-100 text-orange-700 border-orange-200'}`,
                    children: report.status?.toLowerCase() === 'claimed' ? 'تم التسليم بنجاح ' : report.status?.toLowerCase() === 'matched' ? 'تمت المطابقة بانتظار الاستلام ' : report.status?.toLowerCase().trim() === 'pending' || report.status === 'لم تتم المطابقة للآن' || !report.status ? 'بالانتظار' : report.status
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-xs block mb-1 font-bold",
                                    children: "التصنيف الرسمي"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-800 font-black text-base",
                                    children: report.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-xs block mb-1 font-bold",
                                    children: "اللون"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-800 font-black text-base",
                                    children: report.color || "غير محدد"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-xs block mb-1 font-bold",
                                    children: "مكان العثور / الفقدان"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-800 font-black text-base",
                                    children: report.location
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 p-4 rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 text-xs block mb-1 font-bold",
                                    children: "تاريخ ووقت البلاغ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-800 font-black text-base",
                                    children: formatReportDate(report.date)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 p-6 rounded-[2rem] mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-black text-gray-700 text-sm mb-3",
                            children: "الوصف التفصيلي للعنصر:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed font-semibold text-sm bg-white p-4 rounded-xl border border-gray-100 shadow-inner",
                            children: report.description || "لا يوجد وصف إضافي مكتوب لهذا العنصر."
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                report.verificationQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-2 border-dashed border-[#5E3085]/20 p-6 rounded-[2rem] bg-[#FDFBFF] space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-black text-[#5E3085] text-sm flex items-center gap-2",
                            children: "سؤال التحقق المعتمد للمطابقة"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm mr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 font-bold",
                                    children: [
                                        "السؤال: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-800",
                                            children: report.verificationQuestion
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                            lineNumber: 131,
                                            columnNumber: 62
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 font-bold mt-1",
                                    children: [
                                        "الإجابة النموذجية المحددة: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-600 font-black",
                                            children: report.correctAnswer
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                            lineNumber: 132,
                                            columnNumber: 86
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 126,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-end gap-3",
                    children: [
                        report.status?.toLowerCase() !== 'delivered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleMarkAsDelivered,
                            className: "w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2",
                            children: "تم تسليم العنصر لصاحبه"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 138,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push(`/offecer/my-reports/edit/${report._id}`),
                            className: "w-full sm:w-auto px-6 py-3 bg-white text-[#5E3085] border-2 border-[#5E3085] hover:bg-[#F3EBFF] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2",
                            children: "تعديل البيانات"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDeleteReport,
                            className: "w-full sm:w-auto px-6 py-3 bg-red-50 text-red-600 hover:bg-red-100 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2",
                            children: "حذف البلاغ نهائياً"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/offecer/my-reports/[id]/page.jsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
_s(ReportDetailsPage, "JXPeUMyNgW4x4lo6l/15GJyGg5U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ReportDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "ReportDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_offecer_my-reports_%5Bid%5D_page_jsx_f4928f83._.js.map