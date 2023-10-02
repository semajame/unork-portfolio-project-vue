<template>
  <section class="u__container">
    <div class="u__letter">{{ uLetter }}</div>
    <div class="u__content">
      <span class="carefully__crafted"> {{ carefully }} </span>
      <p class="u__paragraph">{{ uParagraph }}</p>

      <a class="u__view">{{ uView }}</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      uLetter: "U",
      carefully: "carefully crafted template",
      uParagraph:
        " “If you think good design is expensive, you should look at the cost of bad design.”",
      uView: "View on Designer",
    };
  },
};
</script>
