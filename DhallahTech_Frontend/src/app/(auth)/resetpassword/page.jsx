"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { resetPassword } from "@/services/api";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [mounted, setMounted] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
 const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,20}$/;
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  if (!mounted) return <div className="min-h-screen bg-[var(--bg-light)]" />;

 
   const isMatch = isPasswordValid && password.length > 0 && password === confirm;
  const handleResetPassword = async () => {
  if (!isMatch) return;

  try {
    const phone = localStorage.getItem("resetPhone");
    const code = localStorage.getItem("resetCode");

    console.log("phone:", phone);
    console.log("code:", code);
    console.log("newPassword:", password);

    if (!phone || !code) {
      alert("بيانات التحقق غير متوفرة، يرجى إعادة عملية استعادة كلمة المرور.");
      return;
    }

    const res = await resetPassword({
      phone,
      code,
      newPassword: password,
    });

    alert(res.data.data?.message || "تم تغيير كلمة المرور بنجاح");

    localStorage.removeItem("resetPhone");
    localStorage.removeItem("resetCode");
    localStorage.removeItem("resetEmail");

    router.push("/login");
  } catch (err) {
    console.log("Reset password error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "حدث خطأ أثناء تغيير كلمة المرور");
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

            <h2 className="text-center text-2xl font-black text-[var(--primary-purple)] mb-6">
              استعادة كلمة المرور
            </h2>

            {/* كلمة المرور الجديدة */}
            <div className="space-y-2 text-right mb-4">
              <label className="fieldTitle text-xs">كلمة المرور الجديدة</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
              className={`input ${password.length > 0 && !isPasswordValid ? "border-red-400 bg-red-50" : ""}`}
              />
              {password.length > 0 && !isPasswordValid && (
                <div className="text-[10px] text-red-500 font-bold leading-tight">
                  يجب أن تكون 8-20 حرفاً وتتضمن (حرف كبير، حرف صغير، رقم، ورمز @ $ ! % * ? & - _ )
                </div>
              )}
            </div>

            {/* تأكيد كلمة المرور */}
            <div className="space-y-2 text-right mb-4">
              <label className="fieldTitle text-xs">تأكيد كلمة المرور</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder=""
                className={`input ${confirm.length > 0 && !isMatch ? "border-red-400 bg-red-50" : ""}`}
              />
              {confirm.length > 0 && !isMatch && (
                <div className="text-[11px] text-red-500 font-bold">كلمتا المرور غير متطابقتين</div>
              )}
            </div>

            {/* حفظ */}
            <button
                onClick={handleResetPassword}
              disabled={!isMatch}
              className={`bigSubmit w-full transition flex items-center justify-center ${
                !isMatch ? "opacity-50 cursor-not-allowed grayscale" : ""
              }`}
            >
              حفظ كلمة المرور
            </button>

            <p className="text-center text-xs text-gray-500 mt-6">
              <Link href="/login" className="text-[var(--primary-purple)] font-bold hover:underline">
                العودة إلى تسجيل الدخول
              </Link>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}