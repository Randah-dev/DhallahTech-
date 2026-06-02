const otps = new Map();
// OTP
const generateOTP = (phone) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  otps.set(phone, { 
    code, 
    expiresAt: Date.now() + 5 * 60 * 1000,
    attempts: 0
  });
  return code;
};

const verifyOTP = (phone, code) => {
  const r = otps.get(phone);
  if (!r) throw new Error('الرمز غير موجود أو منتهي');

  if (r.attempts >= 3) {
    otps.delete(phone);
    throw new Error('تجاوزت الحد المسموح — اطلب رمز جديد');
  }

  if (Date.now() > r.expiresAt) {
    otps.delete(phone);
    throw new Error('انتهت صلاحية الرمز');
  }

  if (r.code !== code) {
    r.attempts++;
    const remaining = 3 - r.attempts;
    throw new Error(`رمز خاطئ — تبقى لك ${remaining} محاولات`);
  }

  otps.delete(phone);
  return true;
};

const resendOTP = (phone) => {
  otps.delete(phone);
  return generateOTP(phone);
};

// ── Response Format ───────────────
const ok    = (res, data, code = 200) => res.status(code).json({ success: true,  data });
const error = (res, msg,  code = 400) => res.status(code).json({ success: false, error: msg });

module.exports = { 
    ok, 
    error, 
    generateOTP, 
    verifyOTP, 
    resendOTP 
};