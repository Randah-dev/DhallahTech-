"use client";
import { useState, useEffect, useMemo } from 'react';
import { db } from "@/firebase/config";
import { collection, query, where, onSnapshot, orderBy, doc, writeBatch } from "firebase/firestore";
import { sendMessageApi } from '@/services/api'; 
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

export default function ChatEngine({ externalSelectedChat, onSendMessage }) {
    const [allMessages, setAllMessages] = useState([]);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [selectedOffice, setSelectedOffice] = useState(null);
    const [myId, setMyId] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const [offices, setOffices] = useState([]);

    useEffect(() => {
        setIsMounted(true);
        const finalId = localStorage.getItem('id') || localStorage.getItem('userId');
        if (finalId) setMyId(finalId);
    }, []);

    useEffect(() => {
        if (externalSelectedChat) {
            setCurrentChatId(externalSelectedChat.officerId);
            setSelectedOffice(externalSelectedChat);
        }
    }, [externalSelectedChat]);

useEffect(() => {
    if (!isMounted) return;
    const unsubscribe = onSnapshot(collection(db, "offices"), (snapshot) => {
        const officesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOffices(officesList);
    });
    return () => unsubscribe();
}, [isMounted]);
  
    useEffect(() => {
        if (!isMounted || !myId) return;
        const q = query(
            collection(db, "chats"),
            where("participants", "array-contains", myId),
            orderBy("timestamp", "asc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAllMessages(msgs);
        });
        return () => unsubscribe();
    }, [isMounted, myId]);

   
    useEffect(() => {
        const markAsRead = async () => {
            if (!currentChatId || !myId || allMessages.length === 0) return;

            const unreadMessages = allMessages.filter(
                (msg) => msg.senderId === currentChatId && msg.receiverId === myId && msg.status !== 'read'
            );

            if (unreadMessages.length > 0) {
                try {
                    const batch = writeBatch(db);
                    unreadMessages.forEach((msg) => {
                        const msgRef = doc(db, "chats", msg.id);
                        batch.update(msgRef, { status: 'read' });
                    });
                    await batch.commit();
                } catch (err) {
                    console.error("Error marking messages as read:", err);
                }
            }
        };
        markAsRead();
    }, [currentChatId, allMessages, myId]);

    const conversations = useMemo(() => {
    return allMessages.reduce((acc, msg) => {
        const otherId = msg.senderId === myId ? msg.receiverId : msg.senderId;
        
        if (!acc[otherId]) {
           
            let displayName = msg.senderId === myId ? msg.receiverName : msg.senderName;
            
            const matchingOffice = offices.find(office => office.officerId === otherId);
            
         
            if (matchingOffice && matchingOffice.officeName) {
                displayName = matchingOffice.officeName;
            }

            acc[otherId] = { 
                name: displayName, 
                messages: [],
                officeName: matchingOffice ? matchingOffice.officeName : null
            };
        }
        acc[otherId].messages.push(msg);
        return acc;
    }, {});
}, [allMessages, myId, offices]);

    const handleSendMessage = async (text) => {
        if (!text.trim() || !currentChatId) return;
        const cleanedText = text.trim();
        const wordsArray = cleanedText.split(/\s+/).filter(Boolean);
        const wordCount = wordsArray.length;
        
        if (wordCount > 200) {
            alert(`عذراً، لا يمكن أن تتجاوز الرسالة 200 كلمة. (رسالتك الحالية تحتوي على ${wordCount} كلمة)`);
            return; 
        }
        try {
            if (onSendMessage) {
                await onSendMessage(text, currentChatId, selectedOffice?.officeName || null);
            } else {
            await sendMessageApi({
                receiverId: currentChatId,
                message: text,
                officeId: selectedOffice?.id || null,
            });
        }
        } catch (e) {
            console.error(e);
            alert("فشل الإرسال");
        }
    };

    if (!isMounted || !myId) return null;

    return (
      <div className="flex gap-4 h-[85vh] md:h-[75vh] bg-gray-50 rounded-3xl overflow-hidden p-2" dir="rtl">
        <div className={`w-full lg:w-1/3 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm 
            ${currentChatId ? 'hidden lg:flex' : 'flex'}`}>
            <div className="p-5 border-b font-black text-[#5E3085] text-xl">المحادثات</div>
            <div className="flex-1 overflow-y-auto">
                     <ChatList 
                        conversations={conversations} 
                        onOpen={(id) => setCurrentChatId(id)} 
                        currentId={currentChatId} 
                    />
                </div>
            </div>

            <div className={`w-full lg:w-2/3 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm 
            ${currentChatId ? 'flex' : 'hidden lg:flex'}`}>
            {currentChatId ? (
                   <ChatWindow 
                        conversationName={conversations[currentChatId]?.name || "محادثة"}
                       messages={[...allMessages.filter(m => m.participants?.includes(currentChatId) && m.participants?.includes(myId))].reverse()}
                        myId={myId}
                        onSend={handleSendMessage}
                        onBack={() => setCurrentChatId(null)}
                    />
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-300">
                        <div className="p-6 bg-purple-50 rounded-full mb-4 text-4xl">💬</div>
                        <p className="font-bold">اختر محادثة للبدء</p>
                    </div>
                )}
            </div>
        </div>
    );
}