"use client";
import ChatEngine from '@/components/chat/ChatEngine';
import { sendMessageApi } from '@/services/api';

export default function OfficerChatPage() {
    return (
        <ChatEngine 
            showSearch={false} 
            onSendMessage={async (text, receiverId, item) => {
                await sendMessageApi({ 
                    receiverId: receiverId, 
                    message: text, 
                    item: item 
                });
            }}
        />
    );
}