<template>
  <HomeCategories />
  <HomeCourses title="Get choice of your course" />
  <HomeFeedback />
  <HomePlatForm />
  <HomeCourses isShowSlide title="The world's largest selection of courses" />
  <HomeOnlineCoaching />
</template>

<script>
import HomeCategories from "@/components/HomeCategories.vue";
import HomeCourses from "@/components/HomeCourses.vue";
import HomeFeedback from "@/components/HomeFeedback.vue";
import HomePlatForm from "@/components/HomePlatForm.vue";
import HomeOnlineCoaching from "@/components/HomeOnlineCoaching.vue";

export default {
  components: {
    HomeCategories,
    HomeCourses,
    HomeFeedback,
    HomePlatForm,
    HomeOnlineCoaching,
  },
};
</script>
