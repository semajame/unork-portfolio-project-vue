<template>
  <main class="about">
    <div class="left__about">
      <h1>
        {{ aboutHeader }}
      </h1>
    </div>
    <div class="right__about">
      <p>
        <span class="para__white">
          {{ aboutHeaderWhite }}
        </span>
        {{ aboutHeaderPara }}
      </p>
    </div>
  </main>
  <section class="about__section">
    <div class="left__second">
      <p>
        {{ sectionPara }}

        <span class="para__white">{{ sectionWhite }} </span>
      </p>
      <br />
      <p>
        {{ secondsectionPara }}
      </p>
      <br />
      <p>
        {{ secondsectionParaTwo }}
      </p>
    </div>
    <div class="right__second">
      <img
        src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9643758eea6947097943_photo-5.jpg"
        loading="eager"
        alt="Woman Photo"
        class="photo"
      />
    </div>
  </section>
  <Services />
  <U />

  <section class="heroes__section">
    <div class="heroes__header">
      <span class="team">{{ heroesTeam }}</span>
      <h2>{{ heroesHeader }}</h2>
    </div>

    <div class="heroes__box">
      <div class="heroes" v-for="items in heroesProfile">
        <img :src="items.profile" alt="Person Icon" />

        <h4 class="heroes__name">
          {{ items.name }}
        </h4>
        <span class="heroes__title">
          {{ items.title }}
        </span>
        <div class="socials__container">
          <a href="#" v-for="links in socials">
            <img :src="links.link" :alt="links.alt" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <FunFacts />
  <Footer />
</template>

<script>
import Services from "../components/Sections/Services.vue";

import U from "../components/Sections/U.vue";
import Footer from "../components/Footer.vue";
import FunFacts from "../components/Sections/FunFacts.vue";

export default {
  data() {
    return {
      aboutHeader: "About Unork",
      aboutHeaderPara: " problem solvers, and passionate collaborators.",
      aboutHeaderWhite: "We are a team of great designers,",
      sectionWhite:
        "That's not by accident - visibility and trust are the superpowers of exceptional design.",
      sectionPara:
        "Think of the world's most iconic and successful brands. They are easily recognizable, findable, and impactful. ",
      secondsectionPara:
        "We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.",

      secondsectionParaTwo:
        "Intuition and strategy integrate the research methodology that we also apply to traditional media.",
      heroesHeader: "Meet our Heroes",
      heroesTeam: "Team",
      heroesProfile: [
        {
          profile:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc62c4d2884f_team-1.jpeg",
          name: "John D.",
          title: "Co Founder",
        },
        {
          profile:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc3a59d28846_team-2.jpg",
          name: "Maria L.",
          title: "Designer",
        },
        {
          profile:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e8f5cadbfdcc283bd2884c_team-3.jpg",
          name: "Arty D.",
          title: "Developer",
        },
      ],

      socials: [
        {
          link: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685e7d35cd0b4_linkedin.png",
          alt: "LinkedIn Icon",
        },
        {
          link: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b36853d535cd0b2_instagram.png",
          alt: "Instagram Icon",
        },
        {
          link: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685060f5cd0b6_facebook.png",
          alt: "Facebook Icon",
        },
        {
          link: "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685c5c25cd0b8_dribbble.png",
          alt: "Dribble Icon",
        },
      ],
    };
  },

  components: {
    Services,
    U,
    Footer,
    FunFacts,
  },
};
</script>
