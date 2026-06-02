from sentence_transformers import util

def compute_similarity(user_emb, db_emb):
    return float(util.cos_sim(user_emb, db_emb)[0])