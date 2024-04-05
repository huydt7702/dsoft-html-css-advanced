<template>
  <div class="courses" :class="isShowSlide ? 'course--bg-gray' : ''">
    <div class="container">
      <div class="content__title-group">
        <h3 class="content__title" :title="title">
          {{ title }}
        </h3>
        <div class="courses__wrap-btn">
          <p class="courses__dropdown-group">
            <span class="courses__dropdown-title">Design</span>
            <i class="ti-angle-down courses__dropdown-icon"></i>
          </p>
          <button class="content__title-group-btn">View all</button>
        </div>
      </div>

      <BaseCourseList />

      <div v-if="isShowSlide" class="courses__wrap-progress">
        <button class="courses__progress-btn js-prev-progress-btn">
          <i class="ti-arrow-left courses__arrow-left"></i>
        </button>
        <div class="courses__progress">
          <div
            class="courses__progress-item js-progress"
            style="width: 33.33333%"
          ></div>
        </div>
        <button class="courses__progress-btn js-next-progress-btn">
          <i class="ti-arrow-right courses__arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCourseList from "@/components/common/BaseCourseList.vue";

export default {
  props: {
    isShowSlide: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseCourseList,
  },
};
</script>
