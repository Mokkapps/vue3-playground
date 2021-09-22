<template>
  <div
    class="flex flex-col items-center justify-center bg-white rounded-md p-4"
  >
    <img
      v-if="article.urlToImage"
      :src="article.urlToImage"
      :alt="article.title"
      class="mb-4"
    />
    <a class="mb-4 text-2xl" :href="article.url" target="_blank">{{ article.title }}</a>
    <p class="text-sm mb-4">{{ article.description }}</p>
    <span class="italic mb-2 text-xs">
      {{ article.source.name }}
      {{ author }}, {{ formattedDate }}
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Article } from "@/store";

export default defineComponent({
  name: "Article",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup(props) {
    const formattedDate = computed(() =>
      new Date(props.article.publishedAt).toLocaleString()
    );

    const author = computed(() => {
      const article = props.article;
      const author = article.author;
      const sourceName = article.source.name;
      return author && author !== sourceName ? `(von ${article.author})` : "";
    });

    return { formattedDate, author };
  },
});
</script>

<style scoped></style>
