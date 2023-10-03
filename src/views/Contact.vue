<template>
  <main class="contact__container">
    <h1>
      {{ contactHeader }}
    </h1>

    <p>
      {{ contactPara }}
    </p>
  </main>
  <ContactUs />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import ContactUs from "../components/Sections/ContactUs.vue";
export default {
  data() {
    return {
      contactHeader: "Contact Us",
      contactPara: "Get the price and proposal to your Email!",
    };
  },

  components: {
    Footer,
    ContactUs,
  },
};
</script>

<style scoped>
.footer__container {
  padding-top: 5rem;
}
</style>
