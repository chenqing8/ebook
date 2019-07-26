<template>
  <div class="ebook">
    <EbookReader></EbookReader>
  </div>
</template>

<script>
import EbookReader from "../../components/ebook/ebookReader";
export default {
  name: "ebook",
  data() {
    return {};
  },
  components: {
    EbookReader
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.ebook {
}
</style>
