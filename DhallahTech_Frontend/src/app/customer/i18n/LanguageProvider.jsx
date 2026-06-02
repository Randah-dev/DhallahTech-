"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext(null);

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  // load saved lang once
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ar" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  // apply dir + lang + helper classes
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    document.body.classList.remove("rtl", "ltr");
    document.body.classList.add(dir);

    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = useMemo(() => translations[lang] || translations.ar, [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
