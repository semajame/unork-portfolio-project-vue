<template>
  <section class="crafted__container">
    <div class="crafted__left">
      <img :src="image" loading="lazy" alt="iPad" class="ipad" />
    </div>
    <div class="crafted__right">
      <span class="make__blue"> {{ makeBlue }} </span>
      <h2 class="crafted__header">{{ header }}</h2>
      <p class="crafted__paragraph">
        {{ paragraph }}
        <span class="para__white"> {{ paraWhite }} </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      image:
        "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f237c50b52a68497002314_ipad.jpg",
      makeBlue: "Crafted with love",
      header: "Unork scales as your business grows",
      paragraph: "We are passionate about creating",
      paraWhite: "high quality templates on Webflow.",
    };
  },
};
</script>
