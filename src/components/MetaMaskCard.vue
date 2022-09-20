<script setup lang="ts">
import { onMounted } from "vue";
import { useConnector } from "../connectors/metaMask";

defineProps<{ msg: string }>();

const [connector, { chainId, accounts, account }, store] = useConnector();

onMounted(() => {
  // @ts-ignore
  void connector.connectEagerly().catch(() => {
    console.debug("Failed to connect eagerly to metamask");
  });
});
</script>

<template>
  <div class="card">
    <div>chainId: {{ chainId }}</div>
    <div>accounts: {{ accounts }}</div>
    <div>account: {{ account }}</div>

    <button type="button" @click="connector.activate">activate</button>

    <p>{{ msg }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
