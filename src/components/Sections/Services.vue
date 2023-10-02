<template>
  <section class="services__container">
    <span class="our__services"> {{ ourServices }} </span>
    <h2 class="services__header">{{ servicesHeader }}</h2>

    <div class="services__content">
      <div class="services__box" v-for="items in servicesItems" :key="items.id">
        <div
          class="services__circle"
          :style="{ backgroundColor: items.backgroundColor }">
          <img
            :src="items.images"
            loading="lazy"
            width="45"
            alt="Services Images" />
        </div>

        <p class="services__paragraph">
          <span class="para__white">{{ items.paraWhite }}</span>
          {{ items.paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      ourServices: "Our Services",
      servicesHeader: "We help startup's build their websites",
      servicesItems: [
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f23055b2506e3766b33082_icons8-sign-up-256%20(3).png",
          paraWhite: "Beautifully Designed.",
          paragraph:
            "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers.",
          backgroundColor: "#3c5ccf",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f230f6b2506eb401b33302_icons8-smartphone-tablet-256%20(1).png",
          paraWhite: "Fully Responsive.",
          paragraph:
            "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers.",
          backgroundColor: "#fbb348",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f2313740a2c300453b8c46_icons8-user-male-256.png",
          paraWhite: "Friendly Support.",
          paragraph:
            "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers.",
          backgroundColor: " #3ccf91",
        },
      ],
    };
  },
};
</script>
