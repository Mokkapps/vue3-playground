import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { baseUrl, Country, Endpoints, Language, SortBy } from "@/api/news-api";
import useAsyncState from "@/composable/useAsyncState";
import { Article } from "@/store";

export default function useNewsApi({
  endpoint,
  language = Language.German,
  country = Country.Germany,
  query,
  sortBy = SortBy.Popularity,
}: {
  endpoint: Endpoints;
  language?: Language;
  country?: Country;
  query?: string;
  sortBy?: SortBy;
}) {
  const url = new URL(`${baseUrl}${endpoint}`);

  if (endpoint === Endpoints.Headlines) {
    url.searchParams.append("country", country);
  } else {
    url.searchParams.append("language", language);
  }
  query && url.searchParams.append("q", query);
  url.searchParams.append("sortBy", sortBy);
  url.searchParams.append("apiKey", process.env.VUE_APP_NEWS_API_KEY);

  const { error, loading, response, execute } = useAsyncState(() =>
    axios.get(url.href).then((res) =>
      res.data.articles.map((article: Article) => {
        return { ...article, id: uuidv4() };
      })
    )
  );

  return { response, loading, error, execute };
}
