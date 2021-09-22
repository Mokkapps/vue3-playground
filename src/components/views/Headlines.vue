<template>
  <p class="text-white text-xl" v-if="loading">Loading ...</p>
  <p v-if="error">{{ error.message }}</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" >
    <Article v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Article from "@/components/Article.vue";
import { Endpoints } from "@/api/news-api";
import useNewsApi from "@/composable/useNewsApi";

export default defineComponent({
  name: "Headlines",
  components: { Article },
  setup() {
    const { error, loading, response, execute } = useNewsApi({
      endpoint: Endpoints.Headlines,
    });

    onMounted(execute);

    return {
      error,
      loading,
      articles: response,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
