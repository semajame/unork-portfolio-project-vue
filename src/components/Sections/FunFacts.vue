<template>
  <section class="fun__facts__container">
    <span class="fun__span">{{ funSpan }}</span>

    <div class="fun__box__container">
      <div
        class="fun__box"
        v-for="items in funContent"
        :key="items.id"
        :style="{ backgroundColor: items.backgroundColor }">
        <span class="fun__number"> {{ items.num }}</span>
        <span class="fun__word"> {{ items.word }} </span>
      </div>
    </div>

    <span class="fun__magic"> {{ funMagic }} </span>

    <div class="fun__input__container">
      <input type="text" class="email" placeholder="Enter your email..." />

      <button class="get__started">{{ getStarted }}</button>
    </div>
    <div class="terms__conditions">
      <label class="checkbox__container">
        <input type="checkbox" />
        <svg viewBox="0 0 64 64" height="2em" width="2em">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            class="path"></path>
        </svg>
      </label>
      <p class="signing">
        {{ signing }}
        <a href="#" class="terms__link"> {{ terms }} </a>
      </p>
    </div>

    <div class="testimonials__container">
      <span class="testimonials__span"> {{ testimonialsSpan }} </span>
      <h2 class="testimonials__header">{{ testimonialsHeader }}</h2>

      <div class="testimonials__box__container">
        <div
          class="testimonials__box"
          v-for="items in testimonailsContent"
          :key="items.id">
          <img
            :src="items.imageLogo"
            loading="lazy"
            width="180"
            alt="Image Logo"
            class="logo-image" />
          <p class="testimonials__paragraph">
            {{ items.paragraph }}
          </p>
          <div class="testimonials__people">
            <img
              :src="items.profileImage"
              alt="Person Icon"
              class="people__pic" />
            <div class="people__container">
              <h3 class="people__name">{{ items.profileName }}</h3>
              <span class="people__company"> {{ items.profileCompany }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      funSpan: "Fun Facts",
      funMagic: "Let's make some magic together",
      getStarted: "Get Started",
      signing: " By signing up you agree to our",
      terms: "Terms & Conditions.",
      funContent: [
        {
          num: "14",
          word: "Hero's member",
          backgroundColor: "#3c5ccf",
        },
        {
          num: "170+",
          word: "Project done",
          backgroundColor: "#fbb348",
        },
        {
          num: "50+",
          word: "Happy Clients",
          backgroundColor: "#3ccf91",
        },
        {
          num: "8",
          word: "Years Experience",
          backgroundColor: "#ff6996",
        },
      ],

      testimonialsSpan: "Testimonials",
      testimonialsHeader: "Clients About Us",
      testimonailsContent: [
        {
          imageLogo:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea95d4f01323d20ac1067a_file%20(26).svg",
          paragraph:
            '   "100% up time, great support and many possibilities to make efficient sales campaigns."',
          profileImage:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdccd50dd28852_user-5.jpeg",
          profileName: "Thomas L.",
          profileCompany: "Colab Founder",
        },
        {
          imageLogo:
            "https://assets.website-files.com/627298b34d84a873409730b9/62948e04394a4ca8365abbd3_file%20(15).svg",
          paragraph:
            '      "If you have any questions you can call the support and have the answer within 5 minutes."',
          profileImage:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc983fd28854_user-1.jpeg",
          profileName: "Emily V.",
          profileCompany: "Vision Founder",
        },
        {
          imageLogo:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62f3cd9f0ae83fe61069ccf4_file%20(28).svg",
          paragraph:
            "Makes my prospecting a lot easier it'easy to book appointments. Thank you StartIt.",
          profileImage:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdccc68bd28853_user-2.jpeg",
          profileName: "John D.",
          profileCompany: "Sitemark Founder",
        },
      ],
    };
  },
};
</script>
