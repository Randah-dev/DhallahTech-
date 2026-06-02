"use client";
import { loginUser } from "@/services/api";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getMessaging, getToken } from "firebase/messaging";
import { onMessage } from "firebase/messaging";
export default function LoginPage() {
  const [view, setView] = useState("login");
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
   const emailRegex = /^[a-zA-Z0-9](?!.*[\s])(?!.*\.{2,})[a-zA-Z0-9._-]*[a-zA-Z0-9]@[^\s@]+\.[a-zA-Z]{2,}$/;

  const isValid = emailRegex.test(email.trim());
  setIsEmailValid(isValid);
}, [email]);

useEffect(() => {
  /**
 *  نمط التحقق من كلمة المرور 
 * --------------------------------------------------------              
 * * (?=.*[a-z])      : (شرط الحروف الصغيرة) تتأكد من وجود حرف صغير واحد على الأقل.
 * * (?=.*[A-Z])      : (شرط الحروف الكبيرة)  تتأكد من وجود حرف كبير واحد على الأقل.
 * * (?=.*\d)         : (شرط الأرقام)  تتأكد من وجود رقم واحد على الأقل.
 * * (?=.*[@$!%*?&\-_]) :  (شرط الرمز )تتأكد من وجود رمز واحد على الأقل من هذه المجموعة (@ $ ! % * ? & - _).
 
 * * [A-Za-z\d@$!%*?&\-_] : هذه هي "قائمة المسموحات"؛ أي حرف يخرج عن هذه القائمة سيتم رفضه.
 * * {8,20}           : (شرط الطول) يجب أن يكون إجمالي عدد الحروف والأرقام والرموز بين 8 و 20.

 */
  
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,20}$/;
    setIsPasswordValid(passwordRegex.test(password));
  }, [password]);

  if (!mounted) return <div className="min-h-screen bg-[var(--bg-light)]" />;
const isFormValid = isEmailValid && isPasswordValid;
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


  
  const setupOfficerNotification = async (authToken) => {
  try {
    const messaging = getMessaging();
    const permission = await Notification.requestPermission();
    
    if (permission === "granted") {
      
      const currentToken = await getToken(messaging, { vapidKey: "BFHep3G-kTTUV9zvxO64YlpFFjEkwS1VemVCYKBSzglPEuUfPlnN_c88QtIwf1UXuO_NX4NYokJm6s1ibzIRtNE" });
      
      if (currentToken) {
      
        await fetch(`http://localhost:5000/api/auth/update-profile`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${authToken}` 
            },
          body: JSON.stringify({ 
            firstName: "موظف", 
            lastName: "معتمد", 
            email: "officer@test.com", 
            fcmToken: currentToken 
          })
        });
        console.log("FCM Token saved successfully! ✅");

      
        onMessage(messaging, (payload) => {
          console.log("الإشعار وصل للفرونت أند الحين بالملي:", payload);
          alert(`🔔 تحديث من الأدمن:\n${payload.notification.title}\n${payload.notification.body}`);
        });

      }
    }
  } catch (err) {
    console.error("Error setting up notifications on front-end:", err);
  }
};
 
const handleLogin = async () => {
  try {
    const res = await loginUser({
      email,
      password
    });

    
    const loginData = res.data.data; 

    if (loginData && loginData.token) {
      localStorage.setItem("token", loginData.token);
      localStorage.setItem("role", loginData.role);

   if (loginData.id) {
    localStorage.setItem("id", loginData.id);
    console.log("✅ تم حفظ userId بنجاح:", loginData.id);
  }

      if (loginData.officeName) {
        localStorage.setItem("officeName", loginData.officeName);
      }

      console.log("تم تسجيل الدخول وحفظ البيانات بنجاح ✅");

      const role = loginData.role;

      if (role === "CUSTOMER") {
        window.location.href = "/customer/home";
      } 
      else if (role === "OFFICER") {
      
        await setupOfficerNotification(loginData.token);
        window.location.href = "/offecer/dashboard";
      } 
      else if (role === "ADMIN") {
       window.location.href = "/admin/home";
      }

      return; 
    } else {
      throw new Error("لم يتم استلام توكن صالح من السيرفر");
    }

  } catch (err) {
   
    console.error("خطأ تسجيل الدخول:", err.response?.data || err.message);

    alert(
      err.response?.data?.message || 
      "فشل تسجيل الدخول.. تأكد من صحة البيانات"
    );
  }
};

  return (
    <div className="min-h-screen bg-[var(--bg-light)] flex items-center justify-center p-6" dir="rtl">
      <div className="w-full">
        <main className="w-full h-full flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
          {view === "landing" && (
            <div className="text-center max-w-2xl page-content">
              <h1 className="text-4xl font-black text-[var(--primary-purple)] mb-6">منصة ضالتك</h1>
              <p className="text-gray-500 mb-10">نربطك بمفقوداتك بكل سهولة وذكاء.</p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setView("login")}
                  className="bigSubmit"
                >
                  تسجيل الدخول
                </button>

                <Link
                  href="/signup"
                  className="smallBtn border-[var(--primary-purple)] text-[var(--primary-purple)] px-8"
                >
                  إنشاء حساب
                </Link>
              </div>
            </div>
          )}

          {view === "login" && (
           <div className="card w-full max-w-lg overflow-hidden page-content bg-white shadow-xl rounded-3xl">
             <div className="p-10 sm:p-12">
              
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

                <div className="formWrap space-y-4">
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
                  </div>

                  {/* حقل كلمة المرور */}
                 <div className="space-y-2 text-right">
                 <label className="fieldTitle">كلمة المرور</label>
                 <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
                    className={`input ${password.length > 0 && !isPasswordValid ? "border-red-400 bg-red-50" : ""}`}
                 />
                {/* رسالة تنبيه تشرح الشروط */}
                {password.length > 0 && !isPasswordValid && (
                <div className="text-[10px] text-red-500 font-bold leading-tight">
                 يجب أن تكون 8-20 حرفاً وتتضمن (حرف كبير، حرف صغير، رقم، ورمز @ $ ! % * ? & - _ )
                </div>
                )}
             </div>
              {/*mark --------------------------------- */}

                  <button 
                    onClick={handleLogin} 
                    disabled={!isFormValid}
                    className={`bigSubmit w-full transition ${!isFormValid ? "opacity-50 cursor-not-allowed grayscale" : ""}`}
                  >
                    تسجيل الدخول
                  </button>

                  <div className="text-center space-y-2 mt-2">
                    <Link
                      href="/recovery"
                      className="block text-[var(--primary-purple)] text-xs font-bold hover:underline"
                    >
                      هل نسيت كلمة المرور؟
                    </Link>

                    <div className="text-xs text-gray-500">
                      ليس لديك حساب؟{" "}
                      <Link href="/signup" className="text-[var(--primary-purple)] font-bold hover:underline">
                        إنشاء حساب
                      </Link>
                    </div>

                    <Link
                      href="/guest"
                      className="block text-[var(--primary-purple)] text-xs font-bold hover:underline"
                    >
                      الدخول كزائر
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}