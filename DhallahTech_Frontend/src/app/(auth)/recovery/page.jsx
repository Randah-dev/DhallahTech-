"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/services/api";

export default function RecoveryPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9](?!.*[\s])(?!.*\.{2,})[a-zA-Z0-9._-]*[a-zA-Z0-9]@[^\s@]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(email.trim()));
  }, [email]);
  
  if (!mounted) return <div className="min-h-screen bg-[var(--bg-light)]" />;

 
  const handleRecovery = async () => {
  if (!isEmailValid) return;

  try {
    const res = await forgotPassword({ email });
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("resetPhone", res.data.data.phone);

    alert(`رمز التحقق هو: ${res.data.data.otp}`);

    router.push("/verificationCode");
  } catch (err) {
    console.log("Recovery error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "حدث خطأ أثناء إرسال رمز التحقق");
  }
};

  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center p-6" dir="rtl">
      <main className="w-full flex items-center justify-center py-10 page-content">
        <div className="card w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="p-10 sm:p-12">

            {/* اللوقو */}
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

            {/* العنوان */}
            <h2 className="text-center text-2xl font-black text-[var(--primary-purple)] mb-6">
              استعادة كلمة المرور
            </h2>

            {/* البريد */}
            <div className="space-y-2 text-right mb-4">
              <label className="fieldTitle text-sm">
                البريد الإلكتروني
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className={`input ${
                  email.length > 0 && !isEmailValid 
                    ? "border-red-400 bg-red-50" 
                    : ""
                }`}
              />

              {email.length > 0 && !isEmailValid && (
                <div className="text-[11px] text-red-500 font-bold">
                  صيغة البريد غير صحيحة
                </div>
              )}
            </div>

            {/* زر الإرسال */}
            <button
              onClick={handleRecovery}
              disabled={!isEmailValid}
              className={`bigSubmit w-full transition ${
                !isEmailValid ? "opacity-50 cursor-not-allowed grayscale" : ""
              }`}
            >
              إرسال رمز التحقق
            </button>

            {/* العودة */}
            <p className="text-center text-xs text-gray-500 mt-6">
              <Link
                href="/login"
                className="text-[var(--primary-purple)] font-bold hover:underline"
              >
                العودة إلى تسجيل الدخول
              </Link>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}