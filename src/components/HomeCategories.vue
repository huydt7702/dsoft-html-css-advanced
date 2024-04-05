<template>
  <div class="categories">
    <div class="container">
      <div class="content__title-group">
        <h3 class="content__title" title="Top categories">Top categories</h3>
        <button class="content__title-group-btn">See all Categories</button>
      </div>
      <BaseCategoryList />
    </div>
  </div>
</template>

<script>
import BaseCategoryList from "@/components/common/BaseCategoryList.vue";

export default {
  components: {
    BaseCategoryList,
  },
};
</script>
