"use client";
import { useEffect, useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import API from "@/services/api";
import { getMatchDetails, markAsReceived } from "@/services/api";

const LOCK_MINUTES = 3; 
const MAX_FAILS = 5;

export default function MatchConfirmationPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const { lang } = useLang();

  const matchId = sp.get("matchId") || "0";
  const [matchDetails, setMatchDetails] = useState(null);
  const [loading, setLoading] = useState(true);

 const foundItemId = matchDetails?.foundItem?.id || matchDetails?.match?.foundItemId || matchId;
  const questionFromDB = matchDetails?.foundItem?.verificationQuestion;
  const correctAnswerFromDB = matchDetails?.foundItem?.correctAnswer;
  
  const isVerifiable = !!questionFromDB && questionFromDB !== "null" && questionFromDB !== undefined;
  const storageKey = `match_attempts_${matchId}`;
  const lockKey = `match_lock_${matchId}`;

  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [error, setError] = useState("");
  const [fails, setFails] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0); 

useEffect(() => {
const fetchMatchDetails = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/matches/${matchId}`);
        if (res.data && res.data.success) {
          setMatchDetails(res.data.data);
        }
      } catch (err) {
        console.log("خطأ في جلب تفاصيل المطابقة:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (matchId && matchId !== "0") {
      fetchMatchDetails();
    }
  }, [matchId]);

 
  useEffect(() => {
    try {
      const f = parseInt(localStorage.getItem(storageKey) || "0", 10);
      setFails(Number.isFinite(f) ? f : 0);

      const lock = localStorage.getItem(lockKey);
      if (lock) {
        const ts = parseInt(lock, 10);
        if (ts > Date.now()) setLockedUntil(ts);
      }
    } catch {}
  }, [storageKey, lockKey]);


  useEffect(() => {
    let interval;
    if (lockedUntil && lockedUntil > Date.now()) {
      interval = setInterval(() => {
        const remaining = Math.round((lockedUntil - Date.now()) / 1000);
        if (remaining <= 0) {
          setLockedUntil(null);
          setFails(0);
          localStorage.removeItem(lockKey);
          localStorage.setItem(storageKey, "0");
          setError(""); 
          clearInterval(interval);
        } else {
          setTimeLeft(remaining);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  },  [lockedUntil, lockKey, storageKey]);

 const isLocked = useMemo(() => {
    return lockedUntil && lockedUntil > Date.now();
}, [lockedUntil]);

  function recordFail(nextFails) {
    setFails(nextFails);
    localStorage.setItem(storageKey, String(nextFails));

    if (nextFails >= MAX_FAILS) {
      const until = Date.now() + LOCK_MINUTES * 60 * 1000; 
      setLockedUntil(until);
      localStorage.setItem(lockKey, String(until));
    }
  }
  
  async function handleVerify() {
    setError("");

    if (isLocked) return;

    if (!answer.trim()) {
        setError(lang === "ar" ? "يرجى كتابة الإجابة أولاً." : "Please type your answer.");
        return;
    }
    
    try {
        setStatus("verifying"); 

        const res = await API.post("/matches/verify-answer", {
        matchId: matchId,
        userAnswer: answer
      });

      if (res.data.success) {
        setStatus("success");
        localStorage.setItem(storageKey, "0");
        localStorage.removeItem(lockKey);
      }
    } catch (err) {
      const nextFails = fails + 1;
      recordFail(nextFails);
      setStatus("rejected");
      
      const serverMsg = err.response?.data?.message;
      setError(serverMsg || (lang === "ar" ? "الإجابة غير صحيحة." : "Incorrect answer."));
    }
  } 

if (loading) {
  return <div className="p-4">جاري تحميل بيانات المطابقة...</div>;
}

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="p-4">
      <h1 className="pageTitle">{lang === "ar" ? "التحقق من الملكية" : "Ownership Verification"}</h1>
      <p className="pageSubTitle">
        {isVerifiable 
          ? (lang === "ar" ? "أجب على السؤال لتأكيد أنك صاحب العنصر." : "Answer the question to confirm ownership.")
          : (lang === "ar" ? "هذا البلاغ لا يتطلب سؤال تحقق مباشر." : "This report doesn't require a direct question.")}
      </p>
      <hr className="hrLine" />

      <div className="card">
        {!isVerifiable ? (
          <div className="space-y-4">
            <div className="fieldTitle">{lang === "ar" ? "طريقة التحقق" : "Verification Method"}</div>
            <div className="hintText">
              {lang === "ar" ? "يرجى التواصل مع مكتب المفقودات لتأكيد الاستلام." : "Please contact the office to confirm pickup."}
            </div>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
            <button
                className="smallBtn"
                onClick={() =>
                router.push(`/customer/pickup-info?matchId=${matchId}&foundItemId=${foundItemId || ""}`)
              }
              >
              {lang === "ar" ? "معلومات الإستلام " : "Pickup Information"}
               </button>
              <button className="ghostBtn" onClick={() => router.push("/customer/matches")}>
                {lang === "ar" ? "رجوع" : "Back"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="fieldTitle">{lang === "ar" ? "سؤال التحقق" : "Verification Question"}</div>
            <div className="p-4 bg-[#F3EBF9] rounded-2xl text-[#5E3085] font-bold my-2">
              {questionFromDB}
            </div>

            {isLocked && (
              <div className="p-3 bg-red-50 text-red-600 rounded-xl text-center font-bold text-sm border border-red-100">
                ⚠️ {lang === "ar" 
                   ? `المحاولات محظورة. يرجى الانتظار ${timeLeft} ثانية.` 
                   : `Locked. Please wait ${timeLeft} seconds.`}
              </div>
            )}

            <div style={{ marginTop: 12 }}>
              <input
                className="input"
                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd' }}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={lang === "ar" ? "اكتب إجابتك هنا..." : "Type your answer here..."}
                disabled={isLocked || status === "success"}
              />
            </div>

            {error && <div className="errorText" style={{ color: 'red', fontSize: '12px', marginTop: '8px', fontWeight: 'bold' }}>{error}</div>}

            <div className="hintText" style={{ marginTop: 10, fontSize: '12px', color: '#666' }}>
              {lang === "ar" ? "المحاولات" : "Attempts"}: {fails}/{MAX_FAILS}
            </div>

           {status === "success" ? (
  <div className="animate-bounce" style={{ marginTop: 20 }}>
    <div className="p-4 bg-green-100 text-green-700 rounded-2xl text-center font-bold mb-4">
      ✅ {lang === "ar" ? "تم التحقق بنجاح!" : "Verified Successfully!"}
    </div>
    <button
      className="smallBtn w-full"
      onClick={() => {
       
        router.push(`/customer/pickup-info?matchId=${matchId}`);
      }}
    >
      {lang === "ar" ? " معلومات الاستلام" : "Go to Pickup Info"}
    </button>
  </div>

            ) : (
              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 }}>
                <button className="smallBtn" onClick={handleVerify} disabled={isLocked || status === "verifying"}style={{ opacity: (isLocked || status === "verifying") ? 0.6 : 1, cursor: (isLocked || status === "verifying") ? "not-allowed" : "pointer" }}
    >
      {status === "verifying" 
        ? (lang === "ar" ? "جاري التحقق..." : "Verifying...") 
        : (lang === "ar" ? "تأكيد الإجابة" : "Verify Answer")}
    </button> 
      <button className="ghostBtn" onClick={() => router.push("/customer/matches")}disabled={status === "verifying"} // منع الإلغاء أيضاً أثناء إرسال الطلب للاستقرار
    >
      {lang === "ar" ? "إلغاء" : "Cancel"}
    </button>
              </div>
            )} 
          </div>
        )}
      </div>
    </div>
  );
}