"use client";
import { useState } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ conversationName, officeName, messages, myId, onSend, onBack }) {
   const [input, setInput] = useState('');

    const handleSend = () => {
        if(input.trim() !== "") {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-[#F8F9FA] h-full overflow-hidden"> 
            {/* الهيدر */}
            <div className="p-4 bg-white border-b-2 border-gray-50 flex items-center shadow-sm z-10">
                <div className="flex items-center gap-3 text-right">
                  <button onClick={onBack} className="p-2 ml-1 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                        
                            <polyline points="12 5 19 12 12 19"></polyline> 
                        </svg>
                    </button>
                    <div className="w-11 h-11 bg-[#5E3085] rounded-2xl flex items-center justify-center text-white font-black shadow-md">
                        {conversationName ? conversationName[0] : "؟"}
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-black text-base text-gray-800 leading-tight">{conversationName}</h4>
                        <span className="text-[11px] text-[#5E3085] font-bold mt-0.5">{officeName}</span>
                    </div>
                </div>
            </div>

           
          <div className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col-reverse space-y-4 space-y-reverse">
                {messages.map((msg) => {
                    const isMe = msg.senderId === myId;
                    const messageTime = msg.timestamp?.toDate 
                        ? msg.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                        : (msg.time || "");

                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                            <div className="flex flex-col max-w-[85%]">
                                <MessageBubble 
                                    text={msg.message || msg.text} 
                                    type={isMe ? 'sent' : 'received'} 
                                    time={messageTime}
                                />
                                {isMe && (
                                    <span className={`text-[10px] mt-1 mr-2 self-end font-black transition-all ${msg.status === 'read' ? 'text-blue-500' : 'text-gray-400'}`}>
                                        {msg.status === 'read' ? '✓✓ مقروء' : '✓ مرسل'}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            
            <div className="p-3 md:p-4 bg-white border-t-2 border-gray-100">
                <div className="flex items-center gap-3 bg-gray-50 rounded-[1.5rem] px-4 py-2 border-2 border-transparent focus-within:border-[#5E3085] transition-all">
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSend()}
                        type="text" 
                        placeholder="اكتب رسالتك..."
                        className="flex-1 bg-transparent border-none outline-none text-sm p-2 text-right font-bold"
                    />
                    <button onClick={handleSend} className="w-10 h-10 bg-[#5E3085] text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="rotate-180">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}