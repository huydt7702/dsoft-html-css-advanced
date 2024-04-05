<template>
  <div class="categories__item">
    <img
      class="categories__img"
      :src="require(`@/assets/images/${thumbnail}`)"
      :alt="title"
    />
    <h3 class="categories__title" :title="title">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
