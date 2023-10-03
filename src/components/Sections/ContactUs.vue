<template>
  <section class="contacts__container">
    <div class="contacts__left">
      <span class="contacts__span"> {{ contactsSpan }} </span>
      <h2 class="contacts__header">{{ contactsHeader }}</h2>
      <a href="#" class="contacts__unork"> {{ contactsUnork }} </a>
    </div>

    <div class="contacts__right">
      <form action="">
        <div class="name__container">
          <div class="first__name__container">
            <label for=""> {{ firstName }} </label>
            <input type="text" class="first__name" />
          </div>
          <div class="last__name__container">
            <label for=""> {{ lastName }} </label>
            <input type="text" class="last__name" />
          </div>
        </div>
        <div class="email__container">
          <label for=""> {{ email }} </label>
          <input type="text" class="contact__email" />
        </div>
        <div class="phone__container">
          <label for=""> {{ phone }} </label>
          <input type="text" class="phone" />
        </div>
        <div class="message__container">
          <label for=""> {{ message }} </label>
          <textarea
            type="text"
            class="message"
            placeholder="How can we help?"
            maxlength="4000">
          </textarea>
        </div>
        <button class="send__message">{{ sendMessage }}</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      contactsSpan: "Contact Us",
      contactsHeader: "Get in touch with our friendly team.",
      contactsUnork: "unork@template.com",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      sendMessage: "Send message",
    };
  },
};
</script>
