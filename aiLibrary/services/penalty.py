def soft_penalty(sim):
    if sim < 0.3:
        return 0.03
    return 0

def contradiction_penalty(user_text, db_text):
    try:
        from models.nli_model import nli_pipeline
        
     
        result = nli_pipeline({"text": user_text, "text_pair": db_text})

      
        if isinstance(result, list) and len(result) > 0:
            top_result = result[0]
      
            if top_result.get('label') == "contradiction" and top_result.get('score', 0) > 0.6:
                return 0.25
        
        # في حال كان الرد بتنسيق مختلف (قاموس مباشرة)
        elif isinstance(result, dict):
            if result.get('label') == "contradiction" and result.get('score', 0) > 0.6:
                return 0.25
                
    except Exception as e:
        print(f"⚠️ تنبيه: فشل فحص التناقض (NLI)، سيتم تجاهل العقوبة. الخطأ: {e}")
        
    return 0