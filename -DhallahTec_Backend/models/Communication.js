class ChatMessage {
    constructor(data) {
        this.senderId = data.senderId;
        this.receiverId = data.receiverId;
        this.message = data.message;
        this.timestamp = new Date();
        this.isRead = false;
        this.attachmentURL = data.attachmentURL || null; 
    }
}
module.exports = ChatMessage;
