from models.embedding_model import model
from services.similarity import compute_similarity
from services.metadata import compute_metadata
from services.penalty import soft_penalty, contradiction_penalty
from utils.preprocess import preprocess


def prepare_text(item):

    color = item.get('color', '') 
    
    return preprocess(f"{item['itemName']} {color} {item['description']} {item['location']}")


def compute_user_embedding(user):
    text = prepare_text(user)
    return model.encode(text, convert_to_tensor=True), text


def compute_db_embeddings(database):
    for item in database:
        text = prepare_text(item)
        item['clean_text'] = text
        item['embedding'] = model.encode(text, convert_to_tensor=True)
    return database


def clamp_score(score):
    if isinstance(score, complex):
        score = float(score.real)
    else:
        score = float(score)
        
    return max(0.0, min(score, 0.95))


def final_score(user, db, user_emb, user_text):

    # 1. similarity
    sim = compute_similarity(user_emb, db['embedding'])

    # 2. metadata
    meta = compute_metadata(user, db)

    # 3. penalty
    penalty = soft_penalty(sim) * 0.3

    # 4. contradiction (فقط إذا التشابه قوي)
    if sim > 0.6:
        penalty += contradiction_penalty(user_text, db['clean_text'])

    # 5. boost scoring (مهم لتمييز النتائج)
    score = (sim ** 1.05) * 0.95 + meta - penalty

    return clamp_score(score)