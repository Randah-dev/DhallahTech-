export default function MessageBubble({ text, type, time }) {
    const isSent = type === 'sent';
    return (
        <div className={`flex flex-col ${isSent ? 'items-end' : 'items-start'} space-y-1`}>
            <div className={`px-4 py-2.5 rounded-[1.25rem] text-sm font-semibold shadow-sm border
                ${isSent 
                    ? 'bg-[#5E3085] text-white rounded-tr-none border-[#4a2669]' 
                    : 'bg-white text-gray-700 rounded-tl-none border-gray-200'}`}>
                {text}
            </div>
           
            {time && <span className="text-[10px] text-gray-400 font-bold px-2">{time}</span>}
        </div>
    );
}