export default function RecentActivity({ activities, title }) {
  return (
    <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
      {/*  for writing customize title */}
      <h2 className="text-xl font-bold mb-6 text-right text-gray-800">
        {title}
      </h2>
      <div className="space-y-4">
        {activities.map((act) => (
          <div
            key={act.id}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="text-right">
              <p className="font-bold text-gray-800 text-lg">{act.title}</p>
              <p className="text-xs text-gray-400">{act.location}</p>
            </div>
            <span className="text-xs text-gray-300">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}