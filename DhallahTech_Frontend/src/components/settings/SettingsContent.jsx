"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProfile, updateProfile, deleteProfile } from "@/services/api";

export default function SettingsPage() {

  const router = useRouter();
  const [view, setView] = useState("menu");
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
  const loadProfile = async () => {
    try {
      const res = await getProfile();

      const user = res.data.data;

      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.email || "");

    } catch (err) {
      console.log(
        "خطأ في جلب البيانات:",
        err.response?.data || err.message
      );
    }
  };

  loadProfile();
}, []);

  function handleLogout() {
    alert("تم تسجيل الخروج");
    router.push("/login");
  }

 // async function saveAccountInfo() {
 const saveAccountInfo = async () => {
    
  try {

    await updateProfile({
      firstName,
      lastName,
      email
    });

    setIsEditing(false);

    alert("تم الحفظ بنجاح");

  } catch (err) {

    alert(
      err.response?.data?.message ||
      "حدث خطأ أثناء الحفظ"
    );
  }
};
  async function deleteAccount() {
  try {

    await deleteProfile();

    localStorage.clear();

    setShowDeleteConfirm(false);

    alert("تم حذف الحساب نهائيًا");

    router.push("/");

  } catch (err) {

    alert(
      err.response?.data?.message ||
      "حدث خطأ أثناء حذف الحساب"
    );
  }
}


  return (
    
    <div dir="rtl" className="w-full">
      <h1 className="pageTitle text-right">الإعدادات</h1>
      <p className="pageSubTitle text-right">اختر أحد الخيارات التالية</p>
      <hr className="hrLine" />

      <div className="card p-6 bg-white shadow-sm rounded-xl">
        
        {/* ====== MENU  ====== */}
        {view === "menu" && (
          <div className="optionList flex flex-col gap-2">
            <button className="optionBtn flex justify-between items-center w-full p-4 hover:bg-gray-50 rounded-lg" onClick={() => setView("account")}>
              <span>معلومات الحساب</span>
              <span className="opacity-50">‹</span>
            </button>

            <button className="optionBtn flex justify-between items-center w-full p-4 text-red-500 hover:bg-red-50 rounded-lg" onClick={handleLogout}>
              <span>تسجيل الخروج</span>
              <span>↗</span>
            </button>
          </div>
        )}

        {/* ====== ACCOUNT INFO ====== */}
        {view === "account" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold">معلومات الحساب</h2>
               <button className="smallBtn px-4 py-1 border rounded-md" onClick={() => setView("menu")}>
                ← رجوع
              </button>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">الإسم الأول</label>
              <input className="input border w-full p-2 rounded" value={firstName} disabled={!isEditing} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label className="block font-medium">اسم العائلة</label>
              <input className="input border w-full p-2 rounded" value={lastName} disabled={!isEditing} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">البريد الإلكتروني</label>
             <input className="input border w-full p-2 rounded bg-gray-50 opacity-70" value={email} disabled={true} />
                </div>

            <div className="flex gap-3 pt-4">
              {!isEditing ? (
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg" onClick={() => setIsEditing(true)}>
                 ✏️ تعديل
                </button>
              ) : (
                <>
                  <button className="border px-6 py-2 rounded-lg" onClick={() => setIsEditing(false)}>إلغاء</button>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg" onClick={saveAccountInfo}>💾 حفظ</button>
                </>
              )}
              <button className="text-red-600 border border-red-600 px-4 py-2 rounded-lg mr-auto" onClick={() => setShowDeleteConfirm(true)}>
                🗑️ حذف
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ====== Delete Confirm Modal  ====== */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">تأكيد الحذف</h3>
            <p className="text-gray-600 mb-6">هل أنت متأكد؟ لا يمكن التراجع عن هذا القرار.</p>
            <div className="flex gap-3">
              <button className="flex-1 py-2 border rounded-lg" onClick={() => setShowDeleteConfirm(false)}>إلغاء</button>
              <button className="flex-1 py-2 bg-red-600 text-white rounded-lg" onClick={deleteAccount}>حذف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}