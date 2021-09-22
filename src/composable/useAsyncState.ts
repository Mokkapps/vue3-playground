import { ref } from "vue";

export default function useAsyncState<T>(
  promise: Promise<T> | ((...args: any[]) => Promise<T>)
) {
  const response = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function execute(...args: any[]) {
    error.value = null;

    const _promise = typeof promise === "function" ? promise(...args) : promise;

    loading.value = true;
    try {
      const data = await _promise;
      // @ts-ignore
      response.value = data;
    } catch (e) {
      console.error('Failed to load from promise', e);
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return { response, loading, error, execute };
}
