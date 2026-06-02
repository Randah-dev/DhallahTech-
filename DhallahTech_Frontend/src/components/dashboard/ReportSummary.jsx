
const reportStyles = {
  closed: {
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    icon: 'fas fa-check-circle',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  processing: {
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    icon: 'fas fa-chart-line',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
};

export default function ReportSummary({ reports , title}) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
    {/*  for writing customize title */}
      <h2 className="text-xl font-bold mb-6 text-right text-gray-800">
        {title}
      </h2>
      <div className="space-y-10">
        {reports.map((rep) => {
          const style = reportStyles[rep.status]; // closed أو processing
          return (
            <div key={rep.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span
                  className={`${style.bgColor} ${style.textColor} px-2 py-0.5 rounded-md text-xs font-bold`}
                >
                  {rep.percentage}
                </span>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{rep.label}</p>
                  <p className="text-2xl font-black text-gray-800">{rep.count}</p>
                </div>
              </div>
              <div
                className={`w-12 h-12 ${style.iconBg} rounded-2xl flex items-center justify-center ${style.iconColor}`}
              >
                <i className={`${style.icon} text-xl`}></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}