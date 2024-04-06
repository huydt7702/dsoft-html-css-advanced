<template>
  <div class="row courses__slider-wrapper">
    <div
      v-for="course in courses"
      :key="course.id"
      class="col-lg-4 col-md-6 col-sm-6"
    >
      <BaseCourseItem :course="course" />
    </div>
  </div>
</template>

<script>
import COURSES from "@/data/courses";
import BaseCourseItem from "@/components/common/BaseCourseItem.vue";

export default {
  data() {
    return {
      courses: COURSES,
    };
  },
  components: {
    BaseCourseItem,
  },
};
</script>
