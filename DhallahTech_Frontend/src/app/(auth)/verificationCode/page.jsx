"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyUser, verifyGuest , resendCode} from "@/services/api";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";


export default function VerificationCodePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [showResend, setShowResend] = useState(false);
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const role = searchParams.get("role");

  const isGuest = mode === "guest";
  const isSignup = mode === "signup";
  const isRecovery = !isGuest && !isSignup;

  useEffect(() => setMounted(true), []);
  
  if (!mounted) return <div className="min-h-screen bg-[var(--bg-light)]" />;

  const isComplete = code.every((d) => d !== "");

 
  let nextHref = "/login";
  if (isGuest) {
    nextHref = "/guest/createreport";
  } else if (isRecovery) {
    nextHref = "/resetpassword";
  } else if (isSignup) {
    if (role === "مشرف") nextHref = "/admin";
    else if (role === "موظف") nextHref = "/offecer/dashboard";
    else nextHref = "/customer/home";
  }

  const focusInput = (i) => {
    const el = inputsRef.current[i];
    if (el) el.focus();
  };

  const handleChange = (e, index) => {
    const digit = e.target.value.replace(/\D/g, "").slice(0, 1);
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    if (digit && index < newCode.length - 1) focusInput(index + 1);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (code[index]) {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        return;
      }
      if (index > 0) {
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
        focusInput(index - 1);
      }
    }
  };
const handleVerify = async () => {
  if (!isComplete) return;

  try {
    const otp = code.join("");

    let res;

   if (isGuest) {
  res = await verifyGuest({
    phone: localStorage.getItem("guestPhone"),
    code: otp,
  });
  

  const token = res.data?.data?.token;
  const guestId = res.data?.data?.guestId || res.data?.data?.id;

  if (token) {
    localStorage.setItem("token", token);
  }

  localStorage.setItem("role", "GUEST");
  localStorage.setItem("guestId", guestId || "");
} 
else if (isSignup) {
  res = await verifyUser({
    phone: localStorage.getItem("signupPhone"),
    code: otp,
  });
}

else if (isRecovery) {
      res = await verifyUser({
        phone: localStorage.getItem("resetPhone"),
        code: otp,
      });
       localStorage.setItem("resetCode", otp);
    }

    alert("تم التحقق بنجاح ✅");
   if (isSignup) {
      router.push("/login"); 
    } else {
      router.push(nextHref);
    }
 {/*mark --------------------------------- */}

  } catch (err) {
  console.log("خطأ التحقق:", err.response?.data);

  const errorMsg =
    err.response?.data?.error ||
    err.response?.data?.message ||
    "رمز التحقق غير صحيح";

  if (
    errorMsg.includes("تبقى لك 0 محاولات") ||
    errorMsg.includes("تجاوزت الحد المسموح") ||
    errorMsg.includes("الرمز غير موجود أو منتهي") ||
    errorMsg.includes("انتهت صلاحية الرمز")
  ) {
    setShowResend(true);
  }

  alert(errorMsg);
}
};
const handleResendCode = async () => {
  try {
    const phone = isGuest
      ? localStorage.getItem("guestPhone")
      : isSignup
      ? localStorage.getItem("signupPhone")
      : localStorage.getItem("resetPhone");

    const res = await resendCode({ phone });

    alert(`رمز جديد: ${res.data.data.otp}`);
    setShowResend(false);
    setCode(["", "", "", "", "", ""]);
  } catch (err) {
    alert(
      err.response?.data?.error ||
      err.response?.data?.message ||
      "تعذر إعادة إرسال الرمز"
    );
  }
};
  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center p-6" dir="rtl">
      <main className="w-full flex items-center justify-center py-10 page-content">
        <div className="card w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="p-10 sm:p-12 text-center">
            
           
            <div className="w-full h-32 mb-8 flex items-center justify-center">
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x100/ffffff/5E3085?text=Logo";
                }}
              />
            </div>

            <h2 className="text-[var(--primary-purple)] text-2xl font-black mb-2">
              {isSignup ? "التحقق من رقم الهاتف" : isGuest ? "الدخول كزائر" : "استعادة كلمة المرور"}
            </h2>
            <p className="text-gray-500 text-sm mb-8">أدخل رمز التحقق المرسل إليك</p>

         
            <div className="flex flex-wrap justify-center gap-2 max-w-full px-2 mb-8" dir="ltr">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border-2 border-[#EEE] rounded-xl outline-none focus:border-[var(--primary-purple)] bg-white text-lg font-black transition-all"
                />
              ))}
            </div>

            {/* زر التحقق */}
            <button
             type="button"
             onClick={handleVerify}
             disabled={!isComplete}
             className={`bigSubmit w-full flex items-center justify-center ${
             !isComplete ? "opacity-50 cursor-not-allowed grayscale" : ""
             }`}
             >
          {isSignup ? "تحقق وإنشاء الحساب" : isGuest ? "تحقق" : "تأكيد الرمز"}
        </button>
          
          {showResend && (
  <button
    type="button"
    onClick={handleResendCode}
    className="mt-3 text-[var(--primary-purple)] font-bold hover:underline"
  >
    إعادة إرسال الرمز
  </button>
)}
            {/* روابط إضافية */}
            <div className="flex items-center justify-center gap-3 text-xs mt-6">
               <Link href={isSignup ? "/login" : nextHref} className="text-gray-400 hover:text-gray-600">
                  تخطي التحقق (للتجربة)
              </Link>
              <span className="text-gray-300">|</span>
              <Link href={isRecovery ? "/login" : "/signup"} className="text-[var(--primary-purple)] font-bold hover:underline">
                العودة
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}