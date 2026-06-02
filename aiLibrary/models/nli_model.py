from transformers import pipeline

nli_pipeline = pipeline(
    "text-classification",
    model="joeddav/xlm-roberta-large-xnli"
)