import re

def preprocess(text):
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub("[إأآ]", "ا", text)
    text = re.sub("ة", "ه", text)
    text = re.sub("ى", "ي", text)
    return text.lower()