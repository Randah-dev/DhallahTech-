"use client";

import { useEffect, useMemo, useState } from "react";
import {
  submitComplaint,
  getMyComplaints,
  updateComplaint,
  deleteComplaint,
} from "@/services/api";

export default function TechIssuesPage() {
  const [complaints, setComplaints] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewComplaint, setViewComplaint] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    loadComplaints();
  }, []);

  const isEditing = useMemo(() => editingId !== null, [editingId]);

async function loadComplaints() {
  try {
    setLoading(true);
    const res = await getMyComplaints();
    console.log("رد جلب الشكاوى كامل:", res.data);

    const list = res.data?.complaints || res.data?.data?.complaints || [];
    console.log("قائمة الشكاوى:", list);

    setComplaints(list);
  } catch (err) {
    console.log("خطأ في جلب الشكاوى:", err.response?.data || err.message);
    alert(err.response?.data?.message || "خطأ في جلب الشكاوى");
  }finally {
  setLoading(false);
}
}

  function resetForm() {
    setEditingId(null);
    setTitle("");
    setDesc("");
    setError("");
  }

  function validate() {
    if (!title.trim() || !desc.trim()) {
      return "فضلاً عبّي الحقول المطلوبة.";
    }
    return "";
  }

async function handleSubmit(e) {
  e.preventDefault();

  const msg = validate();
  if (msg) {
    setError(msg);
    return;
  }

  setError("");

  try {
    if (isEditing) {
      const res = await updateComplaint(editingId, {
        title: title.trim(),
        details: desc.trim(),
      });

      console.log("رد تعديل الشكوى:", res.data);
      alert("تم حفظ التعديل ✅");
    } else {
      const res = await submitComplaint({
        title: title.trim(),
        details: desc.trim(),
      });

      console.log("رد إرسال الشكوى:", res.data);
      alert("تم إرسال الشكوى ✅");
    }

    resetForm();
    await loadComplaints();
  } catch (err) {
    console.log("خطأ حفظ الشكوى:", err.response?.data || err.message);
    alert(err.response?.data?.message || "حدث خطأ أثناء حفظ الشكوى");
  }
}

  function startEdit(c) {
    setEditingId(c.complaintID);
    setTitle(c.title || "");
    setDesc(c.details || "");
    setError("");
  }

  function openView(c) {
    setViewComplaint(c);
  }

  function askDelete(id) {
    setConfirmDeleteId(id);
  }

  function cancelDelete() {
    setConfirmDeleteId(null);
  }

  async function confirmDelete() {
    try {
      await deleteComplaint(confirmDeleteId);

      setConfirmDeleteId(null);
      alert("تم الحذف ✅");

      if (editingId === confirmDeleteId) resetForm();

      await loadComplaints();
    } catch (err) {
      alert(err.response?.data?.message || "حدث خطأ أثناء حذف الشكوى");
    }
  }


function formatDate(dateValue) {
  try {
    if (!dateValue) return "";

    if (dateValue._seconds) {
      return new Date(dateValue._seconds * 1000).toLocaleString("ar-SA");
    }

    if (dateValue.seconds) {
      return new Date(dateValue.seconds * 1000).toLocaleString("ar-SA");
    }

    return new Date(dateValue).toLocaleString("ar-SA");
  } catch {
    return "";
  }
}
if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>

      <p className="text-gray-500 font-bold">
        جاري تحميل الشكاوى...
      </p>
    </div>
  );
}
  return (
    <div>
      <h1 className="pageTitle">الشكاوى التقنية</h1>

      <p className="pageSubTitle">
        أنشئ شكوى، اعرض التفاصيل، عدّلها أو احذفها.
      </p>

      <hr className="hrLine" />

      <form className="formWrap" onSubmit={handleSubmit} dir="rtl">
  <div className="card">
    <div
      className="labelRow"
      style={{ justifyContent: "flex-start", textAlign: "right" }}
    >
      <span>عنوان الشكوى</span>
      <span className="requiredStar">*</span>
    </div>

    <input
      className="input"
      placeholder="مثال: مشكلة في تسجيل الدخول"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <div
      style={{
        marginTop: 14,
        justifyContent: "flex-start",
        textAlign: "right",
      }}
      className="labelRow"
    >
      <span>وصف المشكلة</span>
      <span className="requiredStar">*</span>
    </div>

    <textarea
      className="textarea"
      placeholder="اكتب تفاصيل المشكلة: متى ظهرت؟ ماذا حدث؟"
      value={desc}
      onChange={(e) => setDesc(e.target.value)}
    />

    {error ? <div className="errorText">{error}</div> : null}
  </div>

  <button className="bigSubmit" type="submit">
    {isEditing ? "💾 حفظ التعديل" : " إرسال الشكوى"}
  </button>

  {isEditing ? (
    <button className="smallBtn" type="button" onClick={resetForm}>
      ↩️ إلغاء التعديل
    </button>
  ) : null}
</form>
      <h2 className="sectionTitle">إدارة الشكاوى</h2>

      <div className="reportList">
        {complaints.map((c) => (
          <div className="reportRow" key={c.complaintID}>
            <div className="rowActions">
              <button
                className="smallBtn"
                type="button"
                onClick={() => openView(c)}
              >
                🔎 عرض
              </button>

              <button
                className="smallBtn"
                type="button"
                onClick={() => startEdit(c)}
              >
                ✏️ تعديل
              </button>

              <button
                className="smallBtn dangerSmall"
                type="button"
                onClick={() => askDelete(c.complaintID)}
              >
                🗑️ حذف
              </button>
            </div>

            <div className="reportInfo">
              <div className="reportTitle">{c.title}</div>
              <div className="reportDate">
                {c.status} • {formatDate(c.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {viewComplaint ? (
        <div className="modalOverlay" onClick={() => setViewComplaint(null)}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>
            <h3 className="modalTitle">تفاصيل الشكوى</h3>

            <div style={{ marginTop: 10 }}>
              <div className="fieldTitle">العنوان</div>
              <div>{viewComplaint.title}</div>
            </div>


            <div style={{ marginTop: 10 }}>
              <div className="fieldTitle">الوصف</div>
              <div style={{ whiteSpace: "pre-wrap" }}>
                {viewComplaint.details}
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div className="fieldTitle">تاريخ الإرسال</div>
              <div>{formatDate(viewComplaint.createdAt)}</div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="fieldTitle">حالة الشكوى</div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold inline-block ${
                viewComplaint.status === "تم الحل" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-amber-100 text-amber-700"
              }`}>
                {viewComplaint.status || "قيد الانتظار"}
              </span>
            </div>
            {viewComplaint.adminResponse ? (
              <div style={{ 
                marginTop: 14, 
                padding: "12px 14px", 
                backgroundColor: "#F9F5FC", 
                borderRadius: "12px", 
                borderRight: "4px solid #5E3085",
                textAlign: "right"
              }}>
                <div className="fieldTitle" style={{ color: "#5E3085", fontWeight: "bold", marginBottom: 4 }}>
                  💬 رد الإدارة
                </div>
                <div style={{ whiteSpace: "pre-wrap", color: "#3A1C56", fontSize: "14px", leadingRelaxed: "1.5" }}>
                  {viewComplaint.adminResponse}
                </div>
              </div>
            ) : (
              <div style={{ marginTop: 14, color: "#9CA3AF", fontSize: "12px", fontStyle: "italic" }}>
                ⏳ الشكوى قيد المراجعة حالياً، سيظهر رد المسؤول هنا فور حلها.
              </div>
            )}

            <div className="modalActions" style={{ marginTop: 16 }}>
              <button
                className="ghostBtn"
                type="button"
                onClick={() => setViewComplaint(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      ) : null}
      

      {confirmDeleteId ? (
        <div className="modalOverlay">
          <div className="modalBox">
            <h3 className="modalTitle">تأكيد الحذف</h3>

            <p className="modalText">
              هل أنت متأكد؟ لا يمكن التراجع بعد الحذف.
            </p>

            <div className="modalActions">
              <button className="ghostBtn" onClick={cancelDelete} type="button">
                إلغاء
              </button>

              <button
                className="dangerBtn"
                onClick={confirmDelete}
                type="button"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}