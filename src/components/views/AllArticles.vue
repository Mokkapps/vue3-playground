<template>
  <p class="text-white text-xl" v-if="loading">Loading ...</p>
  <p v-if="error">{{ error.message }}</p>
  <div class="grid grid-cols-3 gap-4" >
    <Article class="mb-8" v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script lang="ts">
import {
  capitalize,
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import Article from "@/components/Article.vue";
import useNewsApi from "@/composable/useNewsApi";
import { Endpoints } from "@/api/news-api";

export default defineComponent({
  name: "AllArticles",
  components: { Article },
  setup() {
    const route = useRoute();
    const loading = ref(false);
    const error = ref(null);
    const articles = ref([]);

    function fetchArticles(query: string) {
      const {
        loading: articlesLoading,
        error: articlesError,
        response,
        execute,
      } = useNewsApi({
        endpoint: Endpoints.Everything,
        query,
      });
      execute().then(() => {
        // @ts-ignore-next-line
        articles.value = response.value;
        loading.value = articlesLoading.value;
        error.value = articlesError.value;
      });
    }

    onMounted(() => {
      fetchArticles(route.params.q as string);
    });

    watch(
      () => route.params.q,
      (newQuery?: string | string[]) => {
        if (!newQuery) {
          return;
        }
        fetchArticles(newQuery as string);
      }
    );

    const capitalizedQuery = computed(() =>
      capitalize(route.params.q as string)
    );

    return {
      capitalizedQuery,
      error,
      loading,
      articles,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
