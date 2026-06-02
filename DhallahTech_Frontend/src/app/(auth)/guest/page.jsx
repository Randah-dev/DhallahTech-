"use client";
import { guestAccess } from "@/services/api";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GuestPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="min-h-screen bg-[var(--bg-light)]" />;

  const isPhoneValid = phone.length === 9;

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const digitsOnly = raw.replace(/\D/g, "");
    const trimmed = digitsOnly.slice(0, 9);
    setPhone(trimmed);
  };
const handleGuestContinue = async () => {
  try {
    const res = await guestAccess({ phone });

    localStorage.setItem("guestPhone", phone);
    localStorage.setItem("guestOtp", res.data.data.otp);

    alert(`رمز التحقق هو: ${res.data.data.otp}`);

    router.push("/verificationCode?mode=guest");

  } catch (err) {
    console.log("خطأ دخول الزائر:", err.response?.data);

    alert(
      err.response?.data?.message ||
      JSON.stringify(err.response?.data) ||
      "حدث خطأ"
    );
  }
};

  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center p-6" dir="rtl">
      <main className="w-full flex items-center justify-center py-10 page-content">
        <div className="card w-full max-w-lg overflow-hidden rounded-3xl">
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

            <p className="text-center text-sm text-gray-500 mb-6 leading-relaxed">
              يمكنك استخدام خاصية الدخول كزائر للوصول إلى خدماتنا <br /> دون الحاجة إلى تسجيل الدخول
            </p>

           <div className="space-y-2 text-right">
                <label className="text-[#2F2F2F] text-xs font-bold">رقم الجوال</label>
                  <div className="flex gap-2 flex-row-reverse items-center w-full">
                  <select className="h-11 px-2 bg-[#F2F2F2] rounded-xl border border-transparent text-sm outline-none focus:bg-white focus:border-[#5E3085] w-20 text-center">
                    <option value="+966">+966</option>
                  </select>
                  <input
                    value={phone}
                    onChange={handlePhoneChange}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="5xxxxxxxx"
                    className="w-full min-w-0 h-11 px-4 bg-[#F2F2F2] border border-transparent rounded-xl outline-none focus:bg-white focus:border-[#5E3085] transition-all text-sm"
                  />
                </div>
                {isPhoneValid && <div className="text-[11px] text-[#2EAD5C] font-bold mt-1">رقم صحيح ✓</div>}
                <div className="text-[11px] text-gray-400 mt-1">{phone.length}/9</div>
              </div>

            {/* زر متابعة */}
            <button
              onClick={handleGuestContinue}
              disabled={!isPhoneValid}
              className={`bigSubmit w-full transition flex items-center justify-center ${
                !isPhoneValid ? "opacity-50 cursor-not-allowed grayscale" : ""
              }`}
            >
              متابعة
            </button>

            {/* رجوع */}
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