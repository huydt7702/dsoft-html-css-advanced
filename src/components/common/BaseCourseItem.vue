<template>
  <div class="courses__item">
    <div class="courses__item-top">
      <img
        class="courses__img"
        :src="require(`@/assets/images/${course.thumbnail}`)"
        :alt="course.title"
      />
      <div class="courses__reaction">
        <div class="courses__reaction-item">
          <i
            class="ti-star courses__reaction-icon courses__reaction-icon--star"
          ></i>
          <span class="courses__reaction-title"
            >{{ course.rating }} ({{ course.ratingCount }})</span
          >
        </div>
        <div class="courses__reaction-item">
          <i
            class="ti-eye courses__reaction-icon courses__reaction-icon--eye"
          ></i>
          <span class="courses__reaction-title">{{ course.viewCount }}</span>
        </div>
        <div class="courses__reaction-item">
          <i
            class="ti-arrow-circle-right courses__reaction-icon courses__reaction-icon--play"
          ></i>
          <span class="courses__reaction-title">{{ course.lessonCount }}</span>
        </div>
      </div>
    </div>
    <div class="courses__item-bottom">
      <p class="courses__title" :title="course.title">
        {{ course.title }}
      </p>
      <div class="courses__footer">
        <div class="courses__footer-user">
          <img
            class="courses__footer-avatar"
            :title="course.author"
            :src="require(`@/assets/images/${course.avatar}`)"
            :alt="course.author"
          />
          <p class="courses__footer-name" :title="course.author">
            {{ course.author }}
          </p>
        </div>
        <div class="courses__footer-price">
          <p class="courses__footer-old-price">${{ course.oldPrice }}</p>
          <p class="courses__footer-new-price">${{ course.newPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
