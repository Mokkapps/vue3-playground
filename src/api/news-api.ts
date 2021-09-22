// Official Docs: https://newsapi.org/docs/

export const baseUrl = "https://newsapi.org/v2/";

export enum Endpoints {
  Headlines = "top-headlines",
  Everything = "everything",
}

export enum Country {
  Germany = "de",
  USA = "us",
}

export enum Language {
  German = "de",
  English = "en",
}

export enum SortBy {
  PublishedAt = "publishedAt", // newest articles come first.
  Relevancy = "relevancy", // articles more closely related to q come first.
  Popularity = "popularity", // articles from popular sources and publishers come first.
}
