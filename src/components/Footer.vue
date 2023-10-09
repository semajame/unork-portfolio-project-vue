<template>
  <footer class="footer__container">
    <div class="left__footer">
      <router-link to="/" class="router__link">
        <img :src="footerLogo" loading="lazy" width="90" alt="Footer Logo" />
      </router-link>

      <p class="footer__paragraph">
        {{ footerPara }}
      </p>

      <nav>
        <ul class="footer__ul">
          <li>
            <router-link to="/" class="router__link"> Home </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }" class="router__link"
              >About</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'news' }" class="router__link"
              >News</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="right__footer">
      <div class="socials__container">
        <a
          :href="items.url"
          v-for="items in socialsContent"
          :key="items.id"
          target="_blank"
        >
          <img
            :src="items.images"
            :aria-label="items.ariaLabel"
            :alt="items.alt"
            class="social-icon"
          />
        </a>
      </div>

      <span class="footer__number"> {{ contactsNumber }} </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      footerLogo:
        "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e93c3aea2fab791deb32f8_logo.png",
      footerPara:
        "Use Unork’s interactive design tools. It's ton of options to customize anything.",

      socialsContent: [
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685e7d35cd0b4_linkedin.png",
          ariaLabel: "LinkedIn",
          alt: "LinkedIn Icon",
          url: "https://ph.indeed.com/?r=us",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b36853d535cd0b2_instagram.png",
          ariaLabel: "Instagram",
          alt: "Instagram Icon",
          url: "https://www.instagram.com/",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685060f5cd0b6_facebook.png",
          ariaLabel: "Twitter",
          alt: "Twitter Icon",
          url: "https://www.twitter.com/",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9d614b3685c5c25cd0b8_dribbble.png",
          alt: "Dribble Icon",
          ariaLabel: "Dribble",
          url: "https://www.dribble.com/",
        },
      ],

      contactsNumber: "1800 832 993",
    };
  },
};
</script>
