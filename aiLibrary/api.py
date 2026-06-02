from fastapi import FastAPI
from pydantic import BaseModel
from services.scoring import compute_user_embedding, final_score, compute_db_embeddings


app = FastAPI()

# (Schema)
class SearchRequest(BaseModel):
    user_report: dict    
    database_items: list  

#  (Endpoint)
@app.post("/match")
async def match_logic(data: SearchRequest):
  
    user_report = data.user_report
    raw_db_items = data.database_items
    
    db_items = [
        item for item in raw_db_items 
        if item.get('itemName') and len(str(item.get('itemName')).strip()) >= 3
        and item.get('description') and len(str(item.get('description')).strip()) >= 3
    ]
    if not db_items:
        return {"matches": []}

    
    database_with_embeddings = compute_db_embeddings(db_items)
    user_emb, user_text = compute_user_embedding(user_report)
    
    results = []
    for item in database_with_embeddings:
        db_item_name = item.get('itemName', '')
        if not db_item_name or len(str(db_item_name).strip()) < 3:
            continue #
        score = final_score(user_report, item, user_emb, user_text)
        results.append({
            "id": item.get('id'),
            "itemName": item['itemName'],
            "score": round(score * 100, 2),
            "label": "Strong Match" if score > 0.8 else "Possible Match" if score > 0.5 else "Weak Match"
        })
    
#send results
    sorted_results = sorted(results, key=lambda x: x['score'], reverse=True)
    filtered_results = [m for m in sorted_results if m['score'] >= 60]
    return {"matches": filtered_results}