(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/dashboard/StatCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function StatCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "890c43aa60584c82a4867e30a53c9ab3646276b298906c5689b5bf8124ded337") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "890c43aa60584c82a4867e30a53c9ab3646276b298906c5689b5bf8124ded337";
    }
    const { icon, count, text, color, textColor } = t0;
    const t1 = `w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`;
    const t2 = `${icon} text-2xl`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/StatCard.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== t1 || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/StatCard.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `text-4xl ${textColor} font-black`;
    let t6;
    if ($[6] !== count || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5,
            children: count
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/StatCard.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[6] = count;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== text) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[11px] font-bold text-gray-700 mt-2",
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/StatCard.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[9] = text;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t4 || $[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-card p-6 text-center shadow-sm",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/StatCard.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[11] = t4;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/RecentActivity.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function RecentActivity(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e56c37be3bd1d42b91d90c3404d7184f548f81a93f59dc42750a4f15f010405e") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e56c37be3bd1d42b91d90c3404d7184f548f81a93f59dc42750a4f15f010405e";
    }
    const { activities, title } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold mb-6 text-right text-gray-800",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== activities) {
        t2 = activities.map(_RecentActivityActivitiesMap);
        $[3] = activities;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c = RecentActivity;
function _RecentActivityActivitiesMap(act) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-gray-800 text-lg",
                        children: act.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
                        lineNumber: 50,
                        columnNumber: 181
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400",
                        children: act.location
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
                        lineNumber: 50,
                        columnNumber: 243
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
                lineNumber: 50,
                columnNumber: 153
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-300",
                children: act.time
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
                lineNumber: 50,
                columnNumber: 304
            }, this)
        ]
    }, act.id, true, {
        fileName: "[project]/src/components/dashboard/RecentActivity.jsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/ReportSummary.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const reportStyles = {
    closed: {
        bgColor: 'bg-green-100',
        textColor: 'text-green-600',
        icon: 'fas fa-check-circle',
        iconBg: 'bg-green-50',
        iconColor: 'text-green-500'
    },
    processing: {
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-600',
        icon: 'fas fa-chart-line',
        iconBg: 'bg-purple-50',
        iconColor: 'text-purple-500'
    }
};
function ReportSummary(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "813b4b88a42ed1398c1064375670a337fd035dcd5fde4e961f1f4d48c5a5fe60") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "813b4b88a42ed1398c1064375670a337fd035dcd5fde4e961f1f4d48c5a5fe60";
    }
    const { reports, title } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-bold mb-6 text-right text-gray-800",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== reports) {
        t2 = reports.map(_ReportSummaryReportsMap);
        $[3] = reports;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50",
            children: [
                t1,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
}
_c = ReportSummary;
function _ReportSummaryReportsMap(rep) {
    const style = reportStyles[rep.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${style.bgColor} ${style.textColor} px-2 py-0.5 rounded-md text-xs font-bold`,
                        children: rep.percentage
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                        lineNumber: 67,
                        columnNumber: 115
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400",
                                children: rep.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                                lineNumber: 67,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black text-gray-800",
                                children: rep.count
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                                lineNumber: 67,
                                columnNumber: 315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                        lineNumber: 67,
                        columnNumber: 235
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                lineNumber: 67,
                columnNumber: 74
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-12 h-12 ${style.iconBg} rounded-2xl flex items-center justify-center ${style.iconColor}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: `${style.icon} text-xl`
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                    lineNumber: 67,
                    columnNumber: 500
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
                lineNumber: 67,
                columnNumber: 391
            }, this)
        ]
    }, rep.id, true, {
        fileName: "[project]/src/components/dashboard/ReportSummary.jsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ReportSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/offecer/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/RecentActivity.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ReportSummary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/ReportSummary.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardPage() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activities, setActivities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [latestNotifications, setLatestNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const fetchDashboardData = {
                "DashboardPage.useEffect.fetchDashboardData": async ()=>{
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
                                {
                                    icon: 'fas fa-user',
                                    count: statsData.unclaimedCount,
                                    text: 'عدد العناصر غير المستلمة',
                                    color: 'bg-red-50 text-red-600',
                                    textColor: 'text-red-600'
                                },
                                {
                                    icon: 'fas fa-clock',
                                    count: statsData.averageCloseTime,
                                    text: 'متوسط وقت إغلاق البلاغ',
                                    color: 'bg-orange-50 text-orange-600',
                                    textColor: 'text-orange-600'
                                },
                                {
                                    icon: 'fas fa-file-alt',
                                    count: statsData.monthlyNewReports,
                                    text: 'البلاغات الجديدة (شهرياً)',
                                    color: 'bg-purple-50 text-purple-600',
                                    textColor: 'text-purple-600'
                                },
                                {
                                    icon: 'fas fa-check-circle',
                                    count: statsData.returnedCount,
                                    text: 'عدد العناصر المسترجعة',
                                    color: 'bg-green-50 text-green-600',
                                    textColor: 'text-green-600'
                                }
                            ]);
                            const formattedActivities = (recentActivities || []).map({
                                "DashboardPage.useEffect.fetchDashboardData.formattedActivities": (act)=>({
                                        id: act._id,
                                        title: act.itemName,
                                        location: act.location,
                                        time: act.time
                                    })
                            }["DashboardPage.useEffect.fetchDashboardData.formattedActivities"]);
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
                    } finally{
                        setLoading(false);
                    }
                }
            }["DashboardPage.useEffect.fetchDashboardData"];
            fetchDashboardData();
        }
    }["DashboardPage.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center font-bold text-[#5E3085]",
            children: "جاري تحميل لوحة التحكم..."
        }, void 0, false, {
            fileName: "[project]/src/app/offecer/dashboard/page.jsx",
            lineNumber: 84,
            columnNumber: 12
        }, this);
    }
    const markAsRead = async (notifId)=>{
        setLatestNotifications((prev)=>prev.map((n)=>n.id === notifId ? {
                    ...n,
                    isRead: true
                } : n));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 p-4",
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-800",
                    children: "لوحة التحكم"
                }, void 0, false, {
                    fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4",
                children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...stat
                    }, idx, false, {
                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                        lineNumber: 110,
                        columnNumber: 43
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex flex-col lg:grid lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-2 lg:order-none lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            activities: activities,
                            title: "النشاط الأخير"
                        }, void 0, false, {
                            fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "order-1 lg:order-none bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full min-h-[350px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4 border-b pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/offecer/notifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-[#3A1C56] flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "آخر الإشعارات"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                lineNumber: 126,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                            lineNumber: 125,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                        lineNumber: 124,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full",
                                        children: [
                                            latestNotifications.filter((n_0)=>!n_0.isRead).length,
                                            " جديدة"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            latestNotifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center text-gray-400 py-8 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "لا توجد إشعارات جديدة حالياً."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                lineNumber: 135,
                                columnNumber: 57
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 max-h-[400px] overflow-y-auto pr-1",
                                children: latestNotifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-4 rounded-xl border-r-4 transition-all duration-200 text-right ${notif.isRead ? 'bg-gray-50 border-gray-300' : 'bg-purple-50/60 border-[#3A1C56] shadow-sm'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-gray-800 text-sm md:text-base",
                                                        children: notif.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 41
                                                    }, this),
                                                    !notif.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-purple-600 rounded-full inline-block mt-1.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 59
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                lineNumber: 139,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-xs md:text-sm leading-relaxed",
                                                children: notif.body
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                lineNumber: 143,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mt-3 pt-2 border-t border-dashed border-gray-200 text-[10px] md:text-xs text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: notif.createdAt ? (()=>{
                                                            if (typeof notif.createdAt.toDate === 'function') {
                                                                return notif.createdAt.toDate().toLocaleDateString("ar-SA") + ' - ' + notif.createdAt.toDate().toLocaleTimeString("ar-SA", {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                });
                                                            }
                                                            const seconds = notif.createdAt._seconds || notif.createdAt.seconds;
                                                            if (seconds) {
                                                                const dateObj = new Date(seconds * 1000);
                                                                return dateObj.toLocaleDateString("ar-SA") + ' - ' + dateObj.toLocaleTimeString("ar-SA", {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                });
                                                            }
                                                            const dateObj_0 = new Date(notif.createdAt);
                                                            return isNaN(dateObj_0.getTime()) ? "تاريخ غير محدد" : dateObj_0.toLocaleDateString("ar-SA") + ' - ' + dateObj_0.toLocaleTimeString("ar-SA", {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            });
                                                        })() : "تاريخ غير محدد"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 41
                                                    }, this),
                                                    notif.requestId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `/offecer/my-reports/${notif.requestId}`,
                                                        onClick: ()=>markAsRead(notif.id),
                                                        className: "text-[#3A1C56] hover:underline font-bold text-xs",
                                                        children: "مراجعة الآن ←"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 61
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                                lineNumber: 145,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, notif.id, true, {
                                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                        lineNumber: 138,
                                        columnNumber: 63
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                                lineNumber: 137,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/offecer/dashboard/page.jsx",
                lineNumber: 114,
                columnNumber: 12
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/offecer/dashboard/page.jsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
_s(DashboardPage, "Ftel4/7Pg98P3IXWz9qLR6rajcw=");
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dbbf9590._.js.map