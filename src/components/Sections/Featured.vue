<template>
    <section class="featured__container">
      <span class="featured__span"> {{ featuredSpan }} </span>
      <h2 class="featured__header">{{ featuredHeader }}</h2>
      <div class="featured__box__container">
        <div
          class="featured__box__content"
          v-for="items in content"
          :key="items.id">
          <img
            :alt="items.alt"
            loading="eager"
            :src="items.image"
            class="work-photo" />
          <div class="featured__box__info">
            <h3 class="featured__box__header">{{ items.header }}</h3>
            <span
              class="featured__box__span"
              :style="{ backgroundColor: items.backgroundColor }">
              {{ items.span }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'App',
  
    data() {
      return {
        featuredSpan: 'Featured Work',
        featuredHeader: 'We turn ideas into reality',
        content: [
          {
            image:
              'https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc7383d289a3_work-3.jpg',
            header: 'Black Apple Watch',
            span: 'LOGO, USER INTERFACE',
            alt: 'Laptop',
            backgroundColor: '#fbb348',
          },
          {
            image:
              'https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc0399d289a4_work-4.jpg',
            header: 'Ivor Application',
            span: 'USER INTERFACE',
            alt: 'Person',
            backgroundColor: '#ff6996',
          },
          {
            image:
              'https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcc0642d289a6_work-6.jpg',
            header: 'Flying to the moon',
            span: 'USER EXPERIENCES',
            alt: 'Edge',
            backgroundColor: '#5032c1',
          },
          {
            image:
              'https://assets.website-files.com/62e8f5c9dbfdcc62e8d287db/62e8f5cadbfdcca6a9d289a5_work-5.jpg',
            header: 'Dharma Webfront',
            span: 'BRANDING WEB DESIGN',
            alt: 'Laptop',
            backgroundColor: '#3ccf91',
          },
        ],
      };
    },
  };
  </script>
  