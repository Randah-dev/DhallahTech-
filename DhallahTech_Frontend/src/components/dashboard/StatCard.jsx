export default function StatCard({ icon, count, text, color , textColor}) {
    return (
        <div className="stat-card p-6 text-center shadow-sm">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                <i className={`${icon} text-2xl`}></i>
            </div>
            <span className={`text-4xl ${textColor} font-black`}>{count}</span>
            <p className="text-[11px] font-bold text-gray-700 mt-2">{text}</p>
        </div>
    );
}