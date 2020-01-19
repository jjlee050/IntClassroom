import requests
import json

url = ('https://newsapi.org/v2/top-headlines?'
       'apiKey=09214ed793fe46688592c509009635c3')
response = requests.get(url).json()
articles = response['articles']

news_articles = []

for article in articles:
    title = article['title']
    description = article['description']
    link = article['url']
    news_articles.append([title, description, link])

# Corpus with example sentences
corpus = []
for article in news_articles:
    corpus.append(article[0])
print(corpus)

from sentence_transformers import SentenceTransformer
import scipy.spatial

embedder = SentenceTransformer('bert-base-nli-mean-tokens')
corpus_embeddings = embedder.encode(corpus)

# Query sentences
def sentence_queries(queries):
    query_embeddings = embedder.encode(queries)

    # Find the closest 3 sentences of the corpus for each query sentence based on cosine similarity
    closest_n = 3
    for query, query_embedding in zip(queries, query_embeddings):
        distances = scipy.spatial.distance.cdist([query_embedding], corpus_embeddings, "cosine")[0]

        results = zip(range(len(distances)), distances)
        results = sorted(results, key=lambda x: x[1])

        print("\n\n======================\n\n")
        print("Query:", query)
        print("\nTop 5 most similar sentences in corpus:")

        for idx, distance in results[0:closest_n]:
            return corpus[idx].strip(), "(Score: %.4f)" % (1-distance)

### highest semantic similarity to high anger sentences
"These are the news articles today which your audience might be angry about:"

###highest semantic similarity to surprise and happy sentences
"These are the news articles today which your audience might find interesting:"

print([sentence_queries(anger_sentences),sentence_queries(interest_sentences)])