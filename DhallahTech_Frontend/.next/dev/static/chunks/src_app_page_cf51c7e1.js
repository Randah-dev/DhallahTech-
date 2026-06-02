(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const splashLogoPath = "/image-removebg-preview.png";
const headerLogoPath = "/logo-icon.png";
const placeholderLogo = "https://placehold.co/600x200/ffffff/5E3085?text=ضالتك";
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
function App() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=El+Messiri:wght@600;700&display=swap",
            rel: "stylesheet"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[-5%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-br from-[#E6E6FA]/15 via-[#C9B1E6]/5 to-transparent blur-[80px] md:blur-[120px] pointer-events-none z-0"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#9966CC]/15 via-transparent to-transparent blur-[80px] md:blur-[100px] pointer-events-none z-0"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            y: -10
        };
        t6 = {
            opacity: 1,
            y: 0
        };
        t7 = {
            duration: 0.5
        };
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] !== router) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: headerLogoPath,
            alt: "Logo",
            className: "h-8 md:h-9 w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105",
            onClick: {
                "App[<img>.onClick]": ()=>router.push("/")
            }["App[<img>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[9] = router;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t10;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            scale: 1.02
        };
        t10 = {
            scale: 0.98
        };
        $[11] = t10;
        $[12] = t9;
    } else {
        t10 = $[11];
        t9 = $[12];
    }
    let t11;
    if ($[13] !== router) {
        t11 = ({
            "App[<motion.button>.onClick]": ()=>router.push("/signup")
        })["App[<motion.button>.onClick]"];
        $[13] = router;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            fontFamily: "'Cairo', sans-serif"
        };
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegisterIcon, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hidden sm:inline",
            children: "إنشاء حساب"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t13;
        $[17] = t14;
    } else {
        t12 = $[15];
        t13 = $[16];
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t11) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t9,
            whileTap: t10,
            onClick: t11,
            className: "text-[#5E3085] hover:text-[#4A2669] text-xs sm:text-sm font-bold px-3 py-2 rounded-xl hover:bg-purple-50 flex items-center gap-1.5 transition-colors",
            style: t12,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            scale: 1.03
        };
        t17 = {
            scale: 0.97
        };
        $[20] = t16;
        $[21] = t17;
    } else {
        t16 = $[20];
        t17 = $[21];
    }
    let t18;
    if ($[22] !== router) {
        t18 = ({
            "App[<motion.button>.onClick]": ()=>router.push("/login")
        })["App[<motion.button>.onClick]"];
        $[22] = router;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    let t20;
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            fontFamily: "'Cairo', sans-serif"
        };
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginIcon, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "تسجيل الدخول"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[24] = t19;
        $[25] = t20;
        $[26] = t21;
    } else {
        t19 = $[24];
        t20 = $[25];
        t21 = $[26];
    }
    let t22;
    if ($[27] !== t18) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            whileHover: t16,
            whileTap: t17,
            onClick: t18,
            className: "bg-[#5E3085] text-white px-4 sm:px-5 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-[#4A2669] flex items-center gap-1.5 transition-all",
            style: t19,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[27] = t18;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] !== t15 || $[30] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 sm:gap-3",
            children: [
                t15,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t22;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t23 || $[33] !== t8) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            initial: t5,
            animate: t6,
            transition: t7,
            className: "w-full px-4 md:px-12 py-3.5 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-purple-100/30 sticky top-0 z-50 shadow-[0_2px_20px_-10px_rgba(94,48,133,0.05)]",
            children: [
                t8,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t8;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== router) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-full flex-1 flex flex-col items-center relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplashScreen, {
                router: router
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 223,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[35] = router;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "w-full py-6 text-center bg-white border-t border-gray-100 relative z-30 mt-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-xs font-bold tracking-wide px-4",
                style: {
                    fontFamily: "'Cairo', sans-serif"
                },
                children: "جميع الحقوق محفوظة © منصة ضالتك 2026"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 231,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] !== t24 || $[39] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-[#E6E6FA] bg-gradient-to-br from-[#E6E6FA] via-[#ececec] to-[#8955bc] bg-no-repeat bg-fixed flex flex-col justify-between overflow-x-hidden",
            children: [
                t0,
                t1,
                t2,
                t3,
                t4,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t25;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    return t27;
}
_s(App, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = App;
const SplashScreen = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "mb-1 flex items-center justify-center w-full max-w-[220px] md:max-w-[280px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: splashLogoPath,
                onError: _temp,
                alt: "DhallaTec Logo",
                className: "w-full h-auto object-contain"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 259,
                columnNumber: 134
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 259,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "py-1 px-2 flex items-center justify-center w-full max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-black leading-tight text-[#1A0B2E] text-center tracking-tight",
                style: {
                    fontFamily: "'El Messiri', sans-serif"
                },
                children: "ضالتك.. تعود بكل سهولة"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 266,
                columnNumber: 126
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 266,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            className: "w-full max-w-4xl mx-auto pt-10 pb-8 px-4 md:px-8 flex flex-col items-center justify-center gap-5 relative z-10 text-center",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: itemVariants,
                    className: "text-gray-600 text-xs md:text-base leading-relaxed max-w-2xl mx-auto font-medium px-2",
                    style: {
                        fontFamily: "'Cairo', sans-serif"
                    },
                    children: "ضالتك منصة رقمية ذكية تعنى بإعادة المفقودات لذويها بسرعة ودقة، عبر نظام تطابق مدعوم بالذكاء الاصطناعي، تربط الأفراد بالجهات المحلية في منطقة مكة المكرمة ضمن تجربة موثوقة وسلسة ضمن حل تقني مبتكر يعزز جودة الحياة ويدعم مستهدفات رؤية المملكة العربية السعودية 2030."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 275,
                    columnNumber: 229
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 275,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0
        };
        t5 = {
            opacity: 1
        };
        t6 = {
            duration: 0.6
        };
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            fontFamily: "'El Messiri', sans-serif"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 309,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
        $[8] = t8;
    } else {
        t7 = $[7];
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t4,
            whileInView: t5,
            transition: t6,
            className: "w-full bg-gradient-to-r from-purple-50/10 via-purple-100/50 to-purple-40/10 py-4 mb-8 border-y border-purple-500/10 backdrop-blur-sm flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[#250A3F] text-xl md:text-2xl font-black text-center tracking-wide flex items-center gap-2.5",
                style: t7,
                children: [
                    t8,
                    "استعد ضالتك",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 318,
                        columnNumber: 386
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 318,
                columnNumber: 246
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 318,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            once: true,
            margin: "-50px"
        };
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
            number: "1",
            title: "\u0627\u0644\u0625\u0628\u0644\u0627\u063A \u0639\u0646 \u0627\u0644\u0645\u0641\u0642\u0648\u062F",
            desc: "\u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u062A\u0642\u0631\u064A\u0631 \u0645\u0641\u0635\u0644 \u0639\u0646 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u0641\u0642\u0648\u062F ",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileIcon, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 335,
                columnNumber: 359
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
            number: "2",
            title: "\u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0630\u0643\u064A\u0629",
            desc: "\u064A\u0642\u0648\u0645 \u0627\u0644\u0646\u0638\u0627\u0645 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0628\u0645\u0637\u0627\u0628\u0642\u0629 \u0627\u0644\u0645\u0641\u0642\u0648\u062F\u0627\u062A \u0645\u0639 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u0645\u0641\u0642\u0648\u062F\u0627\u062A",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SparkleIcon, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 342,
                columnNumber: 559
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 342,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center relative z-20",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-5xl px-4 md:px-8 mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t10,
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full",
                        children: [
                            t11,
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                number: "3",
                                title: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0644\u0643\u064A\u0629",
                                desc: "\u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u0644\u0643\u064A\u0629 \u0627\u0644\u0639\u0646\u0635\u0631 \u0639\u0628\u0631 \u0623\u0633\u0626\u0644\u0629 \u0630\u0643\u064A\u0629 \u0642\u0628\u0644 \u062A\u0633\u0644\u064A\u0645\u0647 \u0644\u0635\u0627\u062D\u0628\u0647",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoxIcon, {}, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 349,
                                    columnNumber: 751
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 349,
                                columnNumber: 304
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 349,
                        columnNumber: 133
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 349,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    let t15;
    let t16;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            opacity: 0
        };
        t15 = {
            opacity: 1
        };
        t16 = {
            duration: 0.6
        };
        $[14] = t14;
        $[15] = t15;
        $[16] = t16;
    } else {
        t14 = $[14];
        t15 = $[15];
        t16 = $[16];
    }
    let t17;
    let t18;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            fontFamily: "'El Messiri', sans-serif"
        };
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 381,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t17;
        $[18] = t18;
    } else {
        t17 = $[17];
        t18 = $[18];
    }
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t14,
            whileInView: t15,
            transition: t16,
            className: "w-full bg-gradient-to-r from-purple-50/10 via-purple-100/40 to-purple-50/10 py-4 mb-8 border-y border-purple-500/10 backdrop-blur-sm flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[#250A3F] text-xl md:text-2xl font-black text-center tracking-wide flex items-center gap-2.5",
                style: t17,
                children: [
                    t18,
                    "نطاق التغطية",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 390,
                        columnNumber: 393
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 390,
                columnNumber: 250
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 390,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t19;
    } else {
        t19 = $[19];
    }
    let t20;
    let t21;
    let t22;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            scale: 0.98,
            opacity: 0
        };
        t21 = {
            scale: 1,
            opacity: 1
        };
        t22 = {
            once: true,
            margin: "-50px"
        };
        $[20] = t20;
        $[21] = t21;
        $[22] = t22;
    } else {
        t20 = $[20];
        t21 = $[21];
        t22 = $[22];
    }
    let t23;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[23] = t23;
    } else {
        t23 = $[23];
    }
    let t24;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#5E3085] text-xs font-bold mb-4 tracking-wide bg-purple-50 inline-block px-4 py-1.5 rounded-full border border-purple-100",
            style: {
                fontFamily: "'Cairo', sans-serif"
            },
            children: "مكاتب المفقودات المسجلة بالنظام"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 431,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t24;
    } else {
        t24 = $[24];
    }
    let t25;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-xs md:text-sm mb-6 max-w-xl mx-auto leading-relaxed font-semibold px-2",
            style: {
                fontFamily: "'Cairo', sans-serif"
            },
            children: "يمكنك تصفح الخريطة للتعرف على نقاط الاستلام والتسليم المعتمدة لمنصة ضالتك في منطقة مكة المكرمة."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 440,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t25;
    } else {
        t25 = $[25];
    }
    let t26;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center text-center",
            children: [
                t3,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col items-center relative z-20",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-4xl px-4 md:px-8 mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: t20,
                                whileInView: t21,
                                viewport: t22,
                                transition: t23,
                                className: "w-full text-center bg-white p-5 md:p-8 rounded-[24px] border border-purple-100/40 shadow-[0_15px_40px_rgba(94,48,133,0.03)] flex flex-col items-center",
                                children: [
                                    t24,
                                    t25,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-1.5 rounded-[18px] shadow-sm border-2 border-gray-100 overflow-hidden w-full aspect-[4/3] md:aspect-[21/9] relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full overflow-hidden rounded-[14px] relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                src: "https://www.google.com/maps/d/embed?mid=15MW32QGlRg5rr-QMsP9P3d3-t2COdEc&ehbc=2E312F",
                                                className: "absolute w-full border-0",
                                                style: {
                                                    height: "calc(100% + 54px)",
                                                    top: "-54px"
                                                },
                                                allowFullScreen: "",
                                                loading: "lazy",
                                                referrerPolicy: "no-referrer-when-downgrade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 449,
                                                columnNumber: 670
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 449,
                                            columnNumber: 599
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 449,
                                        columnNumber: 455
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 449,
                                columnNumber: 206
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 449,
                            columnNumber: 153
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 449,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 449,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t26;
    } else {
        t26 = $[26];
    }
    return t26;
};
_c1 = SplashScreen;
const FeatureCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    const { number, title, desc, icon } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -6,
            scale: 1.01,
            boxShadow: "0 20px 35px rgba(94,48,133,0.06)",
            borderColor: "rgba(164,130,199,0.3)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== number) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-9 h-9 bg-purple-50 text-[#5E3085] rounded-xl flex items-center justify-center font-bold text-xs shadow-sm shrink-0",
            children: number
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 487,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = number;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== icon) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#5E3085] shrink-0 scale-100 md:scale-110 mr-0.5",
            children: icon
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 495,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = icon;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            fontFamily: "'El Messiri', sans-serif"
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[#1A0B2E] font-bold text-lg text-right pr-0.5 tracking-tight",
            style: t4,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 512,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = title;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t2 || $[10] !== t3 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-3 justify-start",
            children: [
                t2,
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 520,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t2;
        $[10] = t3;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            fontFamily: "'Cairo', sans-serif"
        };
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== desc) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-xs md:text-sm leading-relaxed font-medium text-right group-hover:text-gray-800 transition-colors duration-300",
            style: t7,
            children: desc
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 539,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = desc;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t6 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            whileHover: t1,
            className: "bg-white p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-gray-100/80 text-right w-full transition-all duration-300 cursor-pointer group relative z-10 flex flex-col justify-between",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t6,
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 547,
                columnNumber: 283
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 547,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
};
_c2 = FeatureCard;
const RegisterIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 566,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 566,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "19",
                    y1: "8",
                    x2: "19",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 566,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "22",
                    y1: "11",
                    x2: "16",
                    y2: "11"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 566,
                    columnNumber: 278
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 566,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = RegisterIcon;
const LoginIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 583,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "10 17 15 12 10 7"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 583,
                    columnNumber: 209
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "15",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 583,
                    columnNumber: 247
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 583,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = LoginIcon;
const FileIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 600,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "14 2 14 8 20 8"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 600,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 600,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c5 = FileIcon;
const SparkleIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 617,
                columnNumber: 155
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 617,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c6 = SparkleIcon;
const BoxIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5f072cdbde024b99c42395d89fc9082bc43fbd089325093b5dae6262f41ddd5b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 634,
                    columnNumber: 155
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m7.5 4.21 4.5 2.6 4.5-2.6"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 634,
                    columnNumber: 286
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m3 8 9 5.19 9-5.19"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 634,
                    columnNumber: 324
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 13.19V21.5"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 634,
                    columnNumber: 355
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 634,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c7 = BoxIcon;
function _temp(e) {
    e.currentTarget.src = placeholderLogo;
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "App");
__turbopack_context__.k.register(_c1, "SplashScreen");
__turbopack_context__.k.register(_c2, "FeatureCard");
__turbopack_context__.k.register(_c3, "RegisterIcon");
__turbopack_context__.k.register(_c4, "LoginIcon");
__turbopack_context__.k.register(_c5, "FileIcon");
__turbopack_context__.k.register(_c6, "SparkleIcon");
__turbopack_context__.k.register(_c7, "BoxIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_cf51c7e1.js.map