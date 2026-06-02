export default function ChatList({ conversations, onOpen, currentId }) {
    
   
    const sortedConversations = Object.entries(conversations).sort(([idA, convA], [idB, convB]) => {
        const lastMsgA = convA.messages[convA.messages.length - 1];
        const lastMsgB = convB.messages[convB.messages.length - 1];

    
        const timeA = lastMsgA?.timestamp?.toDate 
            ? lastMsgA.timestamp.toDate().getTime() 
            : (lastMsgA?.timestamp || 0);

        const timeB = lastMsgB?.timestamp?.toDate 
            ? lastMsgB.timestamp.toDate().getTime() 
            : (lastMsgB?.timestamp || 0);

        return timeB - timeA;
    });

    return (
        <div id="contactsList" className="flex-1 overflow-y-auto bg-gray-50 p-3 space-y-3 custom-scrollbar">
            {sortedConversations.map(([id, conv]) => {
             
                const lastMsgObj = conv.messages[conv.messages.length - 1];
                const lastMsgText = lastMsgObj?.message || lastMsgObj?.text || "لا توجد رسائل";
                
           
                const lastTime = lastMsgObj?.timestamp?.toDate 
                    ? lastMsgObj.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                    : (lastMsgObj?.time || "");
                
                const isActive = id === currentId;
                return (
                    <div key={id} onClick={() => onOpen(id)}
                        className={`p-4 cursor-pointer rounded-2xl transition-all duration-300 flex justify-between items-start border-2
                        ${isActive 
                            ? 'bg-white border-[#5E3085] shadow-lg scale-[1.02] z-10' 
                            : 'bg-white border-transparent hover:border-purple-100 shadow-sm'}`}>
                        
                        <div className="flex flex-col flex-1 overflow-hidden ml-2 text-right">
                            <span className={`font-black text-sm mb-1 ${isActive ? 'text-[#5E3085]' : 'text-gray-800'}`}>
                                {conv.name}
                            </span>
                            
                            <p className={`text-xs truncate w-full ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                                {lastMsgText}
                            </p>
                            {conv.item && (
                                <span className="text-[9px] bg-purple-50 text-[#5E3085] px-2 py-0.5 rounded-full mt-2 w-fit font-bold border border-purple-100">
                                    {conv.item}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col items-end gap-2">
    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">{lastTime}</span>
    
   
    {(() => {
        const unreadCount = conv.messages.filter(
            msg => msg.status !== 'read' && msg.senderId === id
        ).length;

        if (unreadCount > 0 && !isActive) {
            return (
                <span className="bg-[#5E3085] text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                    {unreadCount}
                </span>
            );
        }
        return isActive ? <div className="w-2 h-2 bg-[#5E3085] rounded-full animate-pulse"></div> : null;
    })()}
</div>
                    </div>
                );
            })}
        </div>
    );
}