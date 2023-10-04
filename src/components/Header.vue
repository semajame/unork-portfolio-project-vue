<template>
  <header>
    <nav>
      <section class="left__header">
        <router-link to="/">
          <img :src="unorkLogo" alt="Logo" class="unork__logo" />
        </router-link>

        <span class="vertical__line"></span>

        <nav>
          <ul :class="{ active: ul }">
            <li>
              <router-link to="/" class="router__link"> Home </router-link>
              <router-link :to="{ name: 'about' }" class="router__link"
                >About</router-link
              >
              <router-link :to="{ name: 'news' }" class="router__link"
                >News</router-link
              >
              <router-link :to="{ name: 'contact' }" class="router__link"
                >Contact</router-link
              >
            
            </li>
          </ul>
        </nav>
      </section>

      <section class="right__header">
        <button class="hamburger__icon" @click="menu">
          <img
            :src="hamburgerIcon"
            loading="lazy"
            width="30"
            alt="Hamburger Icon"
          />
        </button>

        <button
          type="button"
          class="search__button btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            src="https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9e03dbd70f95d8a9c0e2_search-outline.svg"
            alt="Search Icon"
            class="search__icon"
          />
          Search
        </button>

        <a href="#" class="buy__unork"> {{ buyUnork }}</a>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  // name: 'NavigationMenu',

  data() {
    return {
      activePage: 0,
      ul: false,
      unorkLogo:
        "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62e93c3aea2fab791deb32f8_logo.png",
      buyUnork: "Buy Unork",
      hamburgerIcon:
        "https://assets.website-files.com/62e8f5c9dbfdccaf94d287ac/62ea9a21af559238cc12a830_menu_FILL0_wght400_GRAD0_opsz48%20(2).svg",
    };
  },

  methods: {
    menu() {
      this.ul = !this.ul;
      console.log("click");
    },
  },
};
</script>
