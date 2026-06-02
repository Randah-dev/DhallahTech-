"use client";
import { registerUser } from "@/services/api";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [accountType, setAccountType] = useState("عميل");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

 

 {/*mark --------------------------------- */}
 const emailRegex = /^[a-zA-Z0-9](?!.*[\s])(?!.*\.{2,})[a-zA-Z0-9._-]*[a-zA-Z0-9]@[^\s@]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email.trim());
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,20}$/;
  const isPasswordValid = passwordRegex.test(password);
 {/*mark --------------------------------- */}
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="min-h-screen bg-[#F0EBF5]" />;

  const splashLogoPath = "/logo.jpeg"; 
  const isPhoneValid = phone.length === 9;

  const Field = ({ label, placeholder, type = "text", value, onChange }) => (
    <div className="space-y-2 text-right">
      <label className="fieldTitle">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );

  const RoleCard = ({ value, title, icon }) => {
    const active = accountType === value;

    return (
      <button
        type="button"
        onClick={() => setAccountType(value)}
        className={`w-full rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-all duration-200
          ${
            active
              ? "border-[var(--primary-purple)] bg-white shadow-[0_10px_18px_rgba(122,61,184,0.14)]"
              : "border-[#E9E9E9] bg-white hover:border-[var(--primary-purple)] hover:shadow-[0_10px_18px_rgba(122,61,184,0.08)]"
          }
        `}
        style={{
          transform: active ? "translateY(-2px) scale(1.02)" : "translateY(0px) scale(1)",
        }}
      >
        <div className={`${active ? "text-[var(--primary-purple)]" : "text-[#5E3085]"}`}>{icon}</div>

        <div className="text-sm font-bold text-[#2F2F2F] text-center leading-tight">{title}</div>

        <div
          className={`mt-1 h-1.5 w-8 rounded-full transition-all duration-200 ${
            active ? "bg-[var(--primary-purple)] opacity-100" : "bg-transparent opacity-0"
          }`}
        />
      </button>
    );
  };

  const UserIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const digitsOnly = raw.replace(/\D/g, "");
    const trimmed = digitsOnly.slice(0, 9);
    setPhone(trimmed);
  };

 const handleRegister = async () => {

  console.log("بيانات التسجيل:", {
    firstName,
    lastName,
    email,
    phone,
    role: accountType,
  });

  try {
    const res = await registerUser({
      firstName,
      lastName,
      email,
      password,
      phone,
      role: accountType === "موظف" ? "OFFICER" : "CUSTOMER"
    });

    alert(`رمز التحقق هو: ${res.data.data.otp}`);

    localStorage.setItem("signupPhone", phone);
    localStorage.setItem("signupOtp", res.data.data.otp);

    router.push(`/verificationCode?mode=signup&role=${accountType}`);

  } catch (err) {
    console.log("خطأ", err.response?.data);

    alert(
      err.response?.data?.message ||
      JSON.stringify(err.response?.data) ||
      "حدث خطأ"
    );
  }
};

{/*mark --------------------------------- */}
 const canContinue = isPhoneValid && isEmailValid && isPasswordValid && firstName.trim() !== "" && lastName.trim() !== "";
 {/*mark --------------------------------- */}
  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center p-6" dir="rtl">
      <main className="w-full max-w-7xl mx-auto flex items-center justify-center py-10 px-6">
      <div className="card w-full max-w-lg overflow-hidden rounded-3xl">
          <div className="p-10 sm:p-12">
            
           
            <div className="w-full h-32 mb-8 flex items-center justify-center">
              <img
                src={splashLogoPath}
                alt="logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x100/ffffff/5E3085?text=Logo";
                }}
              />
            </div>

            <div className="formWrap">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
                 <div className="space-y-2 text-right">
                 <label className="fieldTitle">الاسم الأول</label>
                 <input
                 type="text"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                 className="input"
                 />
                </div>
                
                <div className="space-y-2 text-right">
                 <label className="fieldTitle">اسم العائلة</label>
                 <input
                 type="text"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 className="input"
                />
               </div>
               </div>

              <div className="space-y-2 text-right">
                <label className="fieldTitle">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className={`input ${email.length > 0 && !isEmailValid ? "border-red-400 bg-red-50" : ""}`}
                />
                {email.length > 0 && !isEmailValid && <div className="text-[11px] text-red-500 font-bold">صيغة البريد غير صحيحة</div>}
                {isEmailValid && email.length > 0 && <div className="text-[11px] text-[#2EAD5C] font-bold">بريد صحيح ✓</div>}
              </div>

              <div className="space-y-2 text-right">
                <label className="text-[#2F2F2F] text-xs font-bold">رقم الجوال</label>
                 <div className="flex gap-2 flex-row-reverse items-center w-full">
                  <select className="h-11 px-2 bg-[#F2F2F2] rounded-xl border border-transparent text-sm outline-none focus:bg-white focus:border-[#5E3085] w-[76px] shrink-0 text-center">
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

              <div className="space-y-2 text-right">
              <label className="fieldTitle">كلمة المرور</label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                     className={`input ${password.length > 0 && !isPasswordValid ? "border-red-400 bg-red-50" : ""}`}
  />
  
  {password.length > 0 && !isPasswordValid && (
    <div className="text-[10px] text-red-500 font-bold leading-tight">
      يجب أن تكون 8-20 حرفاً وتتضمن (حرف كبير، حرف صغير، رقم، ورمز @ $ ! % * ? & - _ )
    </div>
  )}
            </div>

              <div className="space-y-2">
                <label className="fieldTitle">اختر نوع الحساب</label>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <RoleCard value="موظف" title="موظف المفقودات" icon={<BriefcaseIcon />} />
                  <RoleCard value="عميل" title="عميل" icon={<UserIcon />} />
                </div>
              </div>

              <button
                onClick={handleRegister}
                disabled={!canContinue}
                className={`bigSubmit w-full ${!canContinue ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                متابعة
              </button>

              <p className="text-center text-xs text-gray-500 mt-2">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-[var(--primary-purple)] font-bold hover:underline">
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}