module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/customer/i18n/translations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    ar: {
        home: "الصفحة الرئيسية",
        createReport: "إنشاء بلاغ",
        techIssues: "الشكاوى التقنية",
        chats: "المحادثات",
        delivery: "التوصيل",
        settings: "الإعدادات",
        logout: "تسجيل الخروج",
        homeTitle: "الصفحة الرئيسية",
        createReportTitle: "إنشاء بلاغ مفقودات",
        createReportSub: "املأ المعلومات التالية للبحث عن عنصرك المفقود",
        lostDesc: "وصف العنصر المفقود",
        manual: "كتابة يدوية",
        imageGen: "توليد من صورة",
        detailedDesc: "الوصف التفصيلي",
        descPlaceholder: "صف العنصر المفقود بالتفصيل (اللون، الحجم، العلامات المميزة..)",
        lostPlace: "مكان الفقدان",
        placePlaceholder: "مثال: مول الرياض",
        lostDate: "تاريخ الفقدان",
        datePlaceholder: "yyyy-mm-dd",
        requiredError: "فضلاً عبّي كل الحقول المطلوبة قبل الإرسال.",
        // Create report actions
        submitReport: "إرسال البلاغ",
        searchMatches: "البحث عن تطابقات",
        manageReports: "إدارة البلاغات",
        edit: "تعديل",
        delete: "حذف",
        cancelEdit: "إلغاء التعديل",
        saveChanges: "حفظ التعديل",
        submitted: "تم إرسال البلاغ بنجاح",
        savedOk: "تم الحفظ بنجاح",
        deletedOk: "تم الحذف بنجاح",
        confirmDeleteTitle: "تأكيد الحذف",
        confirmDeleteText: "هل أنت متأكد؟ لا يمكن التراجع بعد الحذف.",
        cancel: "إلغاء",
        // Settings
        settingsTitle: "الإعدادات",
        settingsSub: "اختر أحد الخيارات التالية",
        accountInfo: "معلومات الحساب",
        changeLanguage: "اللغة",
        language: "اللغة",
        arabic: "عربي",
        english: "English",
        back: "رجوع",
        name: "الاسم",
        email: "البريد الإلكتروني",
        deleteAccount: "حذف الحساب",
        loggedOut: "تم تسجيل الخروج",
        // 
        verifyTitle: "التحقق من الملكية",
        verifySub: "أجب عن سؤال التحقق لتأكيد التطابق.",
        verifyQuestion: "سؤال التحقق",
        verifyHint: "مثال: اكتب الرقم الموجود داخل المحفظة / لون العلامة المميزة...",
        verifyPlaceholder: "اكتب الإجابة هنا",
        confirmMatch: "تأكيد التطابق",
        verifyFailed: "فشل التحقق. الإجابة غير صحيحة.",
        attempts: "عدد المحاولات",
        locked24h: "تم حظر المحاولات لمدة 24 ساعة.",
        pickupTitle: "معلومات الاستلام",
        pickupSub: "تم تأكيد الملكية بنجاح. اختر الخطوة التالية.",
        officeLocation: "موقع مكتب المفقودات",
        officeLocationText: "جامعة أم القرى - مبنى الخدمات - الدور الأرضي (مثال).",
        contactOffice: "التواصل مع مكتب المفقودات",
        requestDelivery: "طلب توصيل",
        newReport: "بلاغ جديد",
        // tech-issues
        techIssuesTitle: "الشكاوى التقنية",
        techIssuesSub: "أنشئ شكوى، اعرض التفاصيل، عدّلها أو احذفها.",
        complaintTitle: "عنوان الشكوى",
        complaintCategory: "التصنيف",
        complaintDesc: "وصف المشكلة",
        submitComplaint: "إرسال الشكوى",
        view: "عرض",
        complaintDetails: "تفاصيل الشكوى",
        close: "إغلاق"
    },
    en: {
        home: "Home",
        createReport: "Create Report",
        techIssues: "Technical Issues",
        chats: "Chats",
        delivery: "Delivery",
        settings: "Settings",
        logout: "Logout",
        homeTitle: "Home",
        createReportTitle: "Create Lost Report",
        createReportSub: "Fill the details below to search for your lost item",
        lostDesc: "Lost item description",
        manual: "Manual writing",
        imageGen: "Generate from image",
        detailedDesc: "Detailed description",
        descPlaceholder: "Describe the lost item (color, size, unique marks..)",
        lostPlace: "Lost place",
        placePlaceholder: "Example: Riyadh Mall",
        lostDate: "Lost date",
        datePlaceholder: "yyyy-mm-dd",
        requiredError: "Please fill all required fields before submitting.",
        // Create report actions
        submitReport: "Submit report",
        searchMatches: "Search for matches",
        manageReports: "Manage reports",
        edit: "Edit",
        delete: "Delete",
        cancelEdit: "Cancel edit",
        saveChanges: "Save changes",
        submitted: "Report submitted successfully",
        savedOk: "Saved successfully",
        deletedOk: "Deleted successfully",
        confirmDeleteTitle: "Confirm delete",
        confirmDeleteText: "Are you sure? This action can't be undone.",
        cancel: "Cancel",
        // Settings
        settingsTitle: "Settings",
        settingsSub: "Choose an option below",
        accountInfo: "Account Information",
        changeLanguage: "Language",
        language: "Language",
        arabic: "Arabic",
        english: "English",
        back: "Back",
        name: "Name",
        email: "Email",
        deleteAccount: "Delete account",
        loggedOut: "Logged out",
        //
        verifyTitle: "Ownership Verification",
        verifySub: "Answer the verification question to confirm the match.",
        verifyQuestion: "Verification Question",
        verifyHint: "Example: wallet code / unique mark color...",
        verifyPlaceholder: "Type your answer",
        confirmMatch: "Confirm Match",
        verifyFailed: "Verification failed. Incorrect answer.",
        attempts: "Attempts",
        locked24h: "Verification is locked for 24 hours.",
        pickupTitle: "Pickup Information",
        pickupSub: "Ownership confirmed successfully. Choose the next step.",
        officeLocation: "Lost & Found Office Location",
        officeLocationText: "UQU - Services Building - Ground floor (example).",
        contactOffice: "Contact Lost & Found Office",
        requestDelivery: "Request Delivery",
        newReport: "New Report",
        // tech-issues
        techIssuesTitle: "Technical Issues",
        techIssuesSub: "Create a complaint, view details, edit or delete it.",
        complaintTitle: "Complaint title",
        complaintCategory: "Category",
        complaintDesc: "Issue description",
        submitComplaint: "Submit complaint",
        view: "View",
        complaintDetails: "Complaint details",
        close: "Close"
    }
};
}),
"[project]/src/app/customer/i18n/LanguageProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$translations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/customer/i18n/translations.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const LangContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider({ children }) {
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ar");
    // load saved lang once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem("lang");
            if (saved === "ar" || saved === "en") setLang(saved);
        } catch  {}
    }, []);
    // apply dir + lang + helper classes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        document.body.classList.remove("rtl", "ltr");
        document.body.classList.add(dir);
        try {
            localStorage.setItem("lang", lang);
        } catch  {}
    }, [
        lang
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$translations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customer$2f$i18n$2f$translations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].ar, [
        lang
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            lang,
            setLang,
            t
        }), [
        lang,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LangContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/customer/i18n/LanguageProvider.jsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
function useLang() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LangContext);
    if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
    return ctx;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__952e80be._.js.map