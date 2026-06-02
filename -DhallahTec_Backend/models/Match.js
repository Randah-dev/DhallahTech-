
class Match {
    constructor(data) {
        this.lostItemId = data.lostItemId;
        this.foundItemId = data.foundItemId;
        this.matchScore = data.matchScore || 0;
        this.status = data.status || 'Pending'; 
        this.matchedAt = new Date();
    }
}
module.exports = Match;
