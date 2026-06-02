from services.scoring import compute_user_embedding, compute_db_embeddings, final_score


database = [
    {
        "itemName": "هاتف محمول",
        "category": "Electronics",
        "color": "أبيض",  
        "description": "جوال ابل نظيف وحالته ممتازة",
        "location": "المواقف الغربية",
        "type": "Found"
    },
    {
         "itemName": "ايفون",
         "category": "Electronics",
         "color": "فضي", 
         "description": "جوال ضايع لونه فاتح نظيف",
         "location": "المواقف",
        "type": "Found"
    },
    {
        "itemName": "جوال آيفون",
        "category": "Electronics",
        "color": "أسود", 
        "description": "ايفون 13 الشاشة مكسورة تماماً ولا يعمل",
        "location": "المطعم الجامعي",
        "type": "Found"
    },
    {
        "itemName": "سماعات لاسلكية",
        "category": "Electronics",
        "color": "أبيض", 
        "description": "سماعات ايربودز برو",
        "location": "المكتبة",
        "type": "Found"
    },
    {
        "itemName": "محفظة جلد",
        "category": "Personal Items",
        "color": "بني",
        "description": "بوك رجالي فيه بطاقات صراف",
        "location": "المواقف",
        "type": "Found"
    },
    {
        "itemName": "ساعة حائط",
        "category": "Home",
        "color": "أسود",
        "description": "ساعة سوداء دائرية كبيرة",
        "location": "مبنى الإدارة",
        "type": "Found"
    },
    {
        "itemName": "هاتف ذكي",
        "category": "Electronics",
        "color": "ذهبي", 
        "description": "موبايل من شركة Apple لونه فاتح وشغال",
        "location": "الباركينج",
        "type": "Found"
    }
]


user_report = {
 "itemName": "ايفون",
    "category": "Electronics",
    "color": "أبيض", # اللون الأساسي للبحث
    "description": "جوال ابل ضايع لونه فاتح ونظيف",
    "location": "المواقف",
    "type": "Lost"
}

# PREPARE DATA
database = compute_db_embeddings(database)
user_emb, user_text = compute_user_embedding(user_report)


# MATCHING
results = []

for item in database:
    score = final_score(user_report, item, user_emb, user_text)

    confidence = score * 100  # تحويل لنسبة عرض فقط

 
    if confidence > 80:
        label = "Strong Match"
    elif confidence > 50:
        label = "Possible Match"
    else:
        label = "Weak Match"

    results.append({
        "item": item['itemName'],
        "color": item.get('color', 'N/A'),
        "score": round(confidence, 2),
        "label": label
    })


# SORT RESULTS
results = sorted(results, key=lambda x: x['score'], reverse=True)

# OUTPUT
for r in results:
        print(r)