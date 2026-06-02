"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";

export default function DeliveryRequestPage() {
  const router = useRouter();
  const { t } = useLang();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!address.trim() || !phone.trim()) {
      setError(t.requiredError || "الرجاء تعبئة الحقول المطلوبة.");
      return;
    }

    setError("");
    alert(t.deliveryRequested || "تم إرسال طلب التوصيل ✅");

    router.push("/customer/home");
  }

  return (
    <div>
      <h1 className="pageTitle">{t.requestDelivery || "طلب توصيل"}</h1>
      <p className="pageSubTitle">{t.deliverySub || "أدخل بيانات التوصيل لاستلام العنصر"}</p>
      <hr className="hrLine" />

      <form className="formWrap" onSubmit={submit}>
        <div className="card">
          <div className="fieldTitle">{t.address || "العنوان"}</div>
          <input
            className="input"
            placeholder={t.addressPh || "المدينة - الحي - الشارع"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="fieldTitle" style={{ marginTop: 14 }}>
            {t.phone || "رقم الجوال"}
          </div>
          <input
            className="input"
            placeholder={t.phonePh || "05xxxxxxxx"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="fieldTitle" style={{ marginTop: 14 }}>
            {t.notes || "ملاحظات"}
          </div>
          <textarea
            className="textarea"
            placeholder={t.notesPh || "مثال: وقت مناسب للتسليم"}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          {error ? <div className="errorText">{error}</div> : null}
        </div>

        <button className="bigSubmit" type="submit">
          🚚 {t.confirmDelivery || "تأكيد طلب التوصيل"}
        </button>

        <button className="smallBtn" type="button" onClick={() => router.back()}>
          {t.back || "رجوع"}
        </button>
      </form>
    </div>
  );
}
