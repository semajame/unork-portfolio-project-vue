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
  <Footer />
</template>

<script>
import Services from "../components/Sections/Services.vue";

import U from "../components/Sections/U.vue";
import Footer from "../components/Footer.vue";

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
    };
  },

  components: {
    Services,
    U,
    Footer,
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15rem 5rem;
}

.about h1 {
  color: var(--white-color);
  font-size: 5rem;
}

.right__about {
  max-width: 500px;
  font-size: 1.5rem;
}

.para__white {
  color: var(--white-color);
  font-size: 1.5rem;
}

p {
  font-size: 1.5rem;
  line-height: 30px;
  color: var(--font-color);
}

.left__about,
.right__about {
  width: 50%;
}

.about__section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem 6rem 4rem;
}

.about__section .photo {
  float: right;
  width: 80%;
}

.left__second,
.right__second {
  width: 50%;
}

.left__second p {
  max-width: 550px;
}
</style>
