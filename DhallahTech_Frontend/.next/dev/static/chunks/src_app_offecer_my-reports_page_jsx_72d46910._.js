(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/offecer/my-reports/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfficeReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function OfficeReportsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficeReportsPage.useEffect": ()=>{
            const fetchReports = {
                "OfficeReportsPage.useEffect.fetchReports": async ()=>{
                    const token = localStorage.getItem('token');
                    try {
                        const response = await fetch('http://localhost:5000/api/items/officer-reports', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        const result = await response.json();
                        if (response.ok && result.success) {
                            const rawData = result.data || [];
                            const sortedData = rawData.sort({
                                "OfficeReportsPage.useEffect.fetchReports.sortedData": (a, b)=>{
                                    const aDone = [
                                        'claimed',
                                        'matched'
                                    ].includes(a.status?.toLowerCase().trim());
                                    const bDone = [
                                        'claimed',
                                        'matched'
                                    ].includes(b.status?.toLowerCase().trim());
                                    if (aDone && !bDone) return -1;
                                    if (!aDone && bDone) return 1;
                                    const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
                                    const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
                                    return timeB - timeA;
                                }
                            }["OfficeReportsPage.useEffect.fetchReports.sortedData"]);
                            // تحويل المعرفات
                            const normalizedData = sortedData.map({
                                "OfficeReportsPage.useEffect.fetchReports.normalizedData": (item)=>({
                                        ...item,
                                        _id: item.id || item._id
                                    })
                            }["OfficeReportsPage.useEffect.fetchReports.normalizedData"]);
                            setReports(normalizedData);
                        } else {
                            console.error("السيرفر أرجع استجابة غير ناجحة:", result.message);
                        }
                    } catch (error) {
                        console.error("Error fetching reports:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["OfficeReportsPage.useEffect.fetchReports"];
            fetchReports();
        }
    }["OfficeReportsPage.useEffect"], []);
    const getStatusStyle = (status)=>{
        const cleanStatus = status?.toLowerCase().trim() || '';
        switch(cleanStatus){
            case 'claimed':
            case 'delivered':
            case 'تم التسليم':
                return "bg-green-100 text-green-600";
            case 'matched':
            case 'تمت المطابقة':
                return "bg-purple-100 text-[#5E3085]";
            default:
                return "bg-amber-100 text-amber-600";
        }
    };
    const getStatusLabel = (status_0)=>{
        const cleanStatus_0 = status_0?.toLowerCase().trim() || '';
        switch(cleanStatus_0){
            case 'claimed':
            case 'delivered':
            case 'تم التسليم':
                return "تم التسليم";
            case 'matched':
            case 'تمت المطابقة':
                return "تمت المطابقة ";
            default:
                return "بالانتظار";
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center font-bold text-[#5E3085]",
        children: "جاري تحميل بلاغات المكتب..."
    }, void 0, false, {
        fileName: "[project]/src/app/offecer/my-reports/page.jsx",
        lineNumber: 76,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F8F9FA] p-4 md:p-8",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-2xl font-black text-[#5E3085]",
                                children: "بلاغات المكتب المرفوعة"
                            }, void 0, false, {
                                fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs md:text-sm",
                                children: "إدارة العناصر المرفوعة ومتابعة حالتها"
                            }, void 0, false, {
                                fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                reports.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-12 md:p-20 rounded-3xl text-center shadow-sm border border-dashed border-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-4xl mb-4 text-gray-200",
                            children: "📁"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 font-bold",
                            children: "لا توجد بلاغات مرفوعة حالياً بهذا المكتب."
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                    lineNumber: 87,
                    columnNumber: 33
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:gap-4",
                    children: reports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 md:gap-4 items-center w-full md:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-[48px] h-[48px] bg-[#F3EBF9] rounded-xl flex items-center justify-center text-xl",
                                            children: "📦"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "truncate text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-800 text-base md:text-lg truncate",
                                                    children: report.itemName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] md:text-xs text-gray-400 mt-1",
                                                    children: [
                                                        report.location,
                                                        " • ",
                                                        report.date ? new Date(report.date._seconds ? report.date._seconds * 1000 : report.date).toLocaleDateString('ar-SA') : 'تاريخ غير محدد'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between w-full md:w-auto md:gap-4 border-t md:border-none pt-3 md:pt-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black whitespace-nowrap ${getStatusStyle(report.status)}`,
                                            children: getStatusLabel(report.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                sessionStorage.setItem('selectedReport', JSON.stringify(report));
                                                router.push(`/offecer/my-reports/${report._id}`);
                                            },
                                            className: "w-10 h-10 md:w-8 md:h-8 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-[#5E3085] hover:text-white transition-colors",
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, report._id, true, {
                            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                            lineNumber: 91,
                            columnNumber: 36
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/my-reports/page.jsx",
                    lineNumber: 90,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/offecer/my-reports/page.jsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/offecer/my-reports/page.jsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_s(OfficeReportsPage, "6H0QXBUQgr57JUr27reeRUQzcyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OfficeReportsPage;
var _c;
__turbopack_context__.k.register(_c, "OfficeReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_offecer_my-reports_page_jsx_72d46910._.js.map