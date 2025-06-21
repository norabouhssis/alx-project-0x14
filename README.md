## API Overview

The MoviesDatabase API provides access to a wide range of movie and TV series information. It allows developers to search for titles, retrieve details about movies, series, cast and crew, genres, and more. It's ideal for apps that need entertainment metadata such as film ratings, descriptions, and release information.

## Version

**Version:** 1.0.0 (as listed on RapidAPI)

## Available Endpoints

- `GET /movies/search`: Search for movies or series by title.
- `GET /movies/get-details`: Retrieve full details for a specific movie or series using its ID.
- `GET /movies/get-by-imdb-id`: Fetch movie details by IMDb ID.
- `GET /actors/get-details`: Get actor or cast member details.
- `GET /genres/list`: List available genres.
- `GET /movies/get-top-rated`: Get top-rated movies or series.
- `GET /movies/get-popular`: Get a list of popular titles.

## Request and Response Format

All requests are made via `GET` and require query parameters like `title`, `imdb_id`, or `id`.

**Example Request:**

```sql
GET https://moviesdatabase.p.rapidapi.com/movies/search?title=Inception
```

**Sample Response:**

```json
{
  "results": [
    {
      "id": "tt1375666",
      "title": "Inception",
      "year": "2010",
      "image": "https://...",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology..."
    }
  ]
}
```

## Authentication

You must sign up to [RapidAPI](https://rapidapi.com/SAdrian/api/moviesdatabase) and subscribe to the MoviesDatabase API. Authentication is handled using the following headers:

- `X-RapidAPI-Key`: Your API key from RapidAPI  
- `X-RapidAPI-Host`: `moviesdatabase.p.rapidapi.com`

**Example:**

```bash
GET /movies/search?title=Inception
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

## Error Handling

Common errors and how to address them:

- **401 Unauthorized** – API key is missing or invalid.
- **403 Forbidden** – You have exceeded your API quota.
- **404 Not Found** – The resource doesn't exist.
- **429 Too Many Requests** – Rate limit exceeded. Use retries with backoff.

**Typical error response:**

```json
{
  "message": "Quota exceeded"
}
```

## Usage Limits and Best Practices

**Rate Limits**  
Rate limits depend on your subscription tier with RapidAPI. The free tier enforces strict limits, so plan accordingly if your application expects higher traffic.

**Best Practices**
- **Cache**: Store frequently accessed or static data locally to reduce API calls.
- **Pagination**: Always handle paginated responses when dealing with large result sets.
- **Use Specific Endpoints**: Query by IMDb ID or other precise identifiers to improve accuracy and efficiency.
- **Retry Strategy**: Implement retry logic with exponential backoff to gracefully handle 429 (Too Many Requests) errors.