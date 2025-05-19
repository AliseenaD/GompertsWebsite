import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

# Define author id and url
author_id = 'VFNcOgoAAAAJ'
API_KEY = os.getenv('API_KEY')

url = f"https://serpapi.com/search.json?engine=google_scholar_author&author_id={author_id}&sort=pubdate&api_key={API_KEY}"

# Send the request and fetch the data
try:
    response = requests.get(url)
    response.raise_for_status()  
    data = response.json()

    # Ensure data is present and successful
    if data['search_metadata']['status'] != 'Success':
        print('Unsuccessful API call')
        assert False

    articles = data.get('articles', [])

    # Format the papers according to json structure needed
    formatted_papers = []
    for article in articles:
        # Check steve in authors
        authors_list = article.get('authors', '').split(', ') if article.get('authors') else []
        if 'S Gomperts' not in authors_list and 'SN Gomperts' not in authors_list:
            continue

        # Structure the data and add to formatted list
        structured_pub = {
            "title": article.get('title', ''),
            "authors": authors_list,
            "journal": article.get('publication', ''),
            "date": article.get('year', ''),
            "doi": article.get('doi', ''),
            "link": article.get('link', '')
        }
        formatted_papers.append(structured_pub)

    # Create output data structure and save to the json file
    output_file = "allPublications.json"
    output_data = {
        "publications": formatted_papers
    }
    with open(output_file, mode='w', encoding="utf-8") as file:
        json.dump(output_data, file, indent=4, ensure_ascii=False)


except requests.exceptions.RequestException as e:
    print(f"Error fetching Google Scholar data: {e}")
