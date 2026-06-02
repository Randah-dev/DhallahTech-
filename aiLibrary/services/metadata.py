from utils.preprocess import preprocess

def compute_metadata(user, db):
    score = 0

    if user['category'] == db['category']:
        score += 0.35  

    if user['location'] in db['location']:
        score += 0.15  

    user_color = preprocess(user.get('color', ''))
    db_color = preprocess(db.get('color', ''))

    if user_color and db_color and user_color == db_color:
        score += 0.20   


    return score