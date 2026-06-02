"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//import { useLang } from "../i18n/LanguageProvider";
import { getUserMatches } from "@/services/api";

export default function MatchesPage() {
  const lang = "ar";
  const router = useRouter();
  const [matches, setMatches] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const loadMatches = async () => {
      try {
        setLoading(true);
        const localAiMatches = sessionStorage.getItem('aiMatches');

if (localAiMatches) {
          const parsedMatches =JSON.parse(localAiMatches);
              console.log("البيانات الخام من session:", parsedMatches);
    
    const matchesArray =
        parsedMatches?.data?.matches ||
        parsedMatches?.matches ||
        (Array.isArray(parsedMatches) ? parsedMatches : []);

    const cleanMatches = matchesArray.map(m => ({
        ...m,
        score: m.score || m.matchScore || 0,
        matchScore: m.matchScore || m.score || 0
    }));

console.log(" المطابقات بعد التنظيف:", cleanMatches);

const sortedSessionMatches = cleanMatches.sort((a, b) => b.score - a.score);
setMatches(sortedSessionMatches);
setLoading(false);
          sessionStorage.removeItem('aiMatches'); 
          return; 
        } 
      

        console.log("لم يتم العثور على سيكشن فريش، جاري السحب الآمن من السيرفر...");
        const response = await getUserMatches();
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
        
       const sortedServerMatches = finalArray.map(m => ({
  ...m,
  score: m.score || m.matchScore || 0,
  matchScore: m.matchScore || m.score || 0
})).sort((a, b) => b.score - a.score);

setMatches(sortedServerMatches);

      } catch (error) {
        console.error("Error loading matches:", error);
        alert("حدث خطأ أثناء جلب المطابقات");
        setMatches([]);
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, []);

  if (!mounted) return null;

if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>

      <p className="text-gray-500 font-bold">
        جاري البحث عن مطابقات ذكية...
      </p>
    </div>
  );
}

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="p-4">
      <h1 className="pageTitle">
        {lang === "ar" ? "العناصر المتطابقة ذكيًا" : "AI Smart Matches"}
      </h1>
      <p className="pageSubTitle">
        {matches.length > 0 
          ? (lang === "ar" ? "إليك أفضل النتائج التي عثر عليها نظامنا" : "Here are the best matches found by our system")
          : (lang === "ar" ? "لا توجد تطابقات حالية" : "No matches found yet")}
      </p>
      <hr className="hrLine" />

      <div className="card">
        {matches.length === 0 ? (
          <div className="hintText">
            {lang === "ar" ? "لم يتم العثور على بلاغات مطابقة بعد. قم برفع بلاغ لعرض النتائج المحتملة" : "No matching reports were found yet. Submit a report to view potential matches."}
          </div>
        ) : (
          <div className="reportList">
           {matches
  .filter(m => m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName)
  .map((m, index) => (
    <div 
      className="reportRow flex items-center justify-between gap-4 p-4 mb-3 bg-white rounded-2xl border border-gray-100 shadow-sm" 
      key={`${m.id || m._id || 'match'}-${index}`} 
      dir="rtl"
    >
                  
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {(() => {
                      const score = Math.round(m.matchScore || m.score || 0);
                      let colorStyle = "";
                      
                      if (score >= 90) {
                        colorStyle = "bg-[#D1FAE5] text-[#065F46]"; 
                      } else if (score >= 75) {
                        colorStyle = "bg-[#DBEAFE] text-[#1E40AF]";
                      } else {
                        colorStyle = "bg-[#FEF3C7] text-[#92400E]";
                      }

                      return (
                        <span className={`text-[12px] px-3 py-1 rounded-full font-black shadow-sm flex-shrink-0 ${colorStyle}`}>
                          {score}%
                        </span>
                      );
                    })()}

                    <div className="text-right min-w-0">
                      <div className="reportTitle text-gray-800 font-bold text-base truncate">
                       {m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName || "عنصر مطابق"}

                      </div>
                      <div className="reportDate text-xs text-gray-400 font-medium" style={{ marginTop: '2px' }}>
                        {(m.matchScore || m.score || 0) >= 80
                          ? (lang === "ar" ? "تطابق ذكي مؤكد" : "Confirmed Smart Match")
                          : (lang === "ar" ? "تطابق محتمل" : "Potential Match")}
                      </div>
                    </div>

                  </div>

               
                  <div className="rowActions flex-shrink-0">
                    <button
                      className="smallBtn"
                      type="button"
                      onClick={() => 
                      router.push(`/guest/match-confirmation?matchId=${m.id || m._id || m.matchId}&itemName=${m.itemName || m.foundItemName || m.lostItemName || m.lostItem?.itemName || m.foundItem?.itemName || "عنصر مطابق"}&score=${m.matchScore || m.score || 0}`)
                    }
                    >
                      {lang === "ar" ? "تأكيد" : "Confirm"}
                    </button>
                  </div>

                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}