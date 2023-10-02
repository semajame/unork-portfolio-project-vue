<template>
  <section class="marketing__container">
    <div class="marketing__box__container">
      <div
        class="marketing__box"
        v-for="items in marketingContent"
        :key="items.id">
        <img
          :alt="items.alt"
          loading="eager"
          width="666.5"
          :src="items.images"
          class="photo" />
        <div class="marketing__content">
          <div class="marketing__date__container">
            <span
              class="marketing__span"
              :style="{ backgroundColor: items.backgroundColor }"
              >{{ items.span }}
            </span>
            <span class="marketing__date"> {{ items.date }} </span>
          </div>
          <h2 class="marketing__header">
            {{ items.header }}
          </h2>
          <a href="#" class="read__more"> {{ items.readMore }} </a>
        </div>
      </div>
    </div>

    <div class="get__started__container">
      <h2 class="started__unork">{{ startedUnork }}</h2>
      <span class="make__sure">{{ makeSure }} </span>
      <div class="get__started__button">
        <button class="u__view started__button">{{ view }}</button>
        <span class="started__number">
          {{ callUs }} <span class="para__white number"> {{ number }} </span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      marketingContent: [
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cc1be7a1c5e344e5fc2f_blog-2.jpg",
          span: "Marketing",
          date: "February 3, 2021",
          header: " Curating a workplace that inspires all of us",
          readMore: "Read more",
          alt: "Chair",
          backgroundColor: "#3ccf91",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cc2df9b93ff8c9c4271c_blog-3.jpg",
          span: " Design ",
          date: "February 25, 2021",
          header: "Designers who changed the web with Webflow",
          readMore: "Read more",
          alt: "Comfortable Room",
          backgroundColor: "#5032c1",
        },
        {
          images:
            "https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62f4cadab5f151707c191512_blog-1.jpg",
          span: " Code ",
          date: "March 9, 2021",
          header: "Talking between studio departments",
          readMore: "Read more",
          alt: "Strawberry Juice",
          backgroundColor: "#ff6996",
        },
      ],

      startedUnork: "Get started with Unork today",
      makeSure: " Make sure your business puts people first.",
      view: "View on Designer",
      callUs: " Or call us:",
      number: "1800 832 993",
    };
  },
};
</script>
