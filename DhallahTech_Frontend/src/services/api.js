import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // رابط سيرفر النود
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const addItem = (itemData) => API.post('/items/add', itemData);
export const addGuestItem = (itemData) => API.post('/items/guest/add', itemData);
export const registerUser = (data) => API.post('/auth/register', data);
export const verifyUser = (data) => API.post('/auth/verify', data);
export const resendCode = (data) => API.post('/auth/resend-code', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const guestAccess = (data) => API.post('/auth/guest', data); 
export const verifyGuest = (data) => API.post('/auth/guest/verify', data);
export const forgotPassword = (data) => API.post('/auth/forgot-password', data); 
export const resetPassword = (data) => API.post('/auth/reset-password', data); 
export const getUserMatches = (itemId) => API.get('/matches', { params: { itemId } });
export const getMyReports = () => API.get('/items/my-reports'); 
export const getProfile = () => API.get('/auth/profile'); 
export const updateProfile = (data) => API.put('/auth/profile', data); 
export const deleteProfile = () => API.delete('/auth/profile'); 
export const submitComplaint = (data) => API.post('/complaints/submit', data);
export const getMyComplaints = () => API.get('/complaints/my');
export const updateComplaint = (complaintID, data) => API.put(`/complaints/update/${complaintID}`, data);
export const deleteComplaint = (complaintID) => API.delete(`/complaints/delete/${complaintID}`); 
export const registerOffice = (data) => API.post('/officer/register', data);
export const getMatchDetails = (matchId) =>  API.get(`/matches/${matchId}`);
export const refreshMatches = (itemId) =>  API.post(`/matches/refresh/${itemId}`);
export const markAsReceived = (matchId) => API.put(`/matches/received/${matchId}`);

// --- Admin Functions ---
// جلب جميع طلبات المكاتب
export const getAllOfficeRequests = () => API.get('/admin/offices');

// قبول أو رفض طلب مكتب
export const reviewOfficerRequest = (data) => API.put('/admin/review-officer', data);

// جلب جميع الشكاوى
export const getAllComplaints = () => API.get('/admin/complaints');

// الرد على شكوى معينة
export const respondToComplaint = (id, data) => API.put(`/admin/complaint/respond/${id}`, data);

// تحديث حالة الشكوى
export const updateComplaintStatus = (id, data) => API.put(`/admin/complaint/status/${id}`, data);
// --- Complaints Functions (User/Officer) ---

// جلب تفاصيل مكتب معين بواسطة الـ ID
export const getOfficeDetails = (id) => API.get(`/admin/office/${id}`);
export const getDashboardStats = () => API.get('/office/dashboard-stats');
export const getOfficerOffice = () => API.get('/office/my-office');
export const updateProfileFcm = (data) => API.put('/auth/profile', data);

export const analyzeImage = (formData) => axios.post('http://localhost:4000/analyze', formData, { headers: { 'Content-Type': 'multipart/form-data' } }); 
export const verifyMatchAnswer = async (matchId, userAnswer) => {
    return await axios.post(`${API_URL}/matches/verify-answer`, { matchId, userAnswer }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
};

export const getCustomerNotifications = (limit = 5) => API.get(`/customer/my-notifications?limit=${limit}`);

export const getOfficerNotifications = (limit = 5) => API.get(`/officer/my-notifications?limit=${limit}`);

export const markNotificationAsRead = (notifId) => API.put(`/customer/notifications/${notifId}/read`);
// --- Communication Functions ---
export const sendMessageApi = (data) => API.post('/communication/send', data);
export default API;