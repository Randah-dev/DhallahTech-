
class OfficerRequest {
    constructor(data) {
        this.userId = data.userId;      
        this.email = data.email;         
        this.officeId = data.officeId;  
        this.status = 'Pending';         
        this.createdAt = new Date();   
    }
}

module.exports.OfficerRequest = OfficerRequest;

