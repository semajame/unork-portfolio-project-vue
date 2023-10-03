<template>
  <main class="news__container">
    <h1>
      {{ newsHeader }}
    </h1>

    <p>
      {{ newsHeaderPara }}
    </p>
  </main>
  <Marketing />
  <Footer />
</template>

<script>
import Marketing from "../components/Sections/Marketing.vue";

import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      newsHeader: "Our News",
      newsHeaderPara: "Catch up on all our latest musings and thoughts below.",
    };
  },
  components: {
    Marketing,
    Footer,
  },
};
</script>

<style></style>
