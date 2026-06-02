
class Item {
    constructor(data) {
        this.itemName = data.itemName;
        this.category = data.category;
        this.color = data.color;  
        this.description = data.description;
        this.location = data.location;
        this.date = data.date;
        this.type = data.type; // 'Lost' or 'Found'
        this.status = data.status || 'Pending'; // Pending, Matched, Returned
        this.imageUrl = data.imageUrl || "";
        this.ownerId = data.ownerId;
        this.verificationQuestion = data.verificationQuestion || null;
        this.correctAnswer = data.correctAnswer || null;
        this.createdAt = new Date();
    }
}
module.exports = Item;
