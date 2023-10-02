<template>
  <main>
    <section class="main__left__container">
      <h1 class="main__header">{{ mainHeader }}</h1>
      <p class="main__paragraph">
        <span class="para__white">{{ paraWhite }}</span>
        {{ mainParagraph }}
      </p>
      <div class="main__company">
        <img
          :src="items.logo"
          loading="lazy"
          :width="items.width"
          :alt="items.logoAlt"
          class="logo-image"
          v-for="items in images"
          :key="items.id" />
      </div>
      <span class="make__blue"> {{ makeBlue }} </span>
    </section>
    <section class="main__right__container">
      <img :src="picture" class="photo" />
    </section>
  </main>
  <Services />
  <U />
  <Crafted />
  <Featured />
  <FunFacts />
  <Contacts />
  <Marketing />
</template>

<script>
import Services from "./Sections/Services.vue";
import U from "./Sections/U.vue";
import Crafted from "./Sections/Crafted.vue";
import Featured from "./Sections/Featured.vue";
import FunFacts from "./Sections/FunFacts.vue";
import Contacts from "./Sections/Contacts.vue";
import Marketing from "./Sections/Marketing.vue";

export default {
  data() {
    return {
      mainHeader: "Create fast websites, in no time.",
      mainParagraph: "It's ton of customization options to customize anything.",
      paraWhite: "Use Unork’s interactive design tools.",
      makeBlue: "*Join over 7,000 satisfied customers.",
      picture:
        "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62eb89715787c63447f58db7_photo-2.jpg",

      images: [
        {
          logo: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea95d4f01323d20ac1067a_file%20(26).svg",
          logoAlt: "Colab Logo",
          width: "140",
        },
        {
          logo: "https://assets.website-files.com/627298b34d84a873409730b9/62948e04394a4ca8365abbd3_file%20(15).svg",
          logoAlt: "Vision Logo",
          width: "150",
        },
        {
          logo: "https://assets.website-files.com/627298b34d84a873409730b9/62948da133518fd4d14fc0da_file%20(13).svg",
          logoAlt: "PinPoint Logo",
          width: "160",
        },
      ],
    };
  },

  components: {
    Services,
    U,
    Crafted,
    Featured,
    FunFacts,
    Contacts,
    Marketing,
  },
};
</script>
