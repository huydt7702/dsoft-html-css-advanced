<template>
  <div class="row">
    <div
      v-for="category in categories"
      :key="category.id"
      class="col-lg-3 col-md-4 col-sm-6"
    >
      <BaseCategoryItem
        :title="category.title"
        :thumbnail="category.thumbnail"
      />
    </div>
  </div>
</template>

<script>
import CATEGORIES from "@/data/categories";
import BaseCategoryItem from "@/components/common/BaseCategoryItem.vue";

export default {
  data() {
    return {
      categories: CATEGORIES,
    };
  },
  components: {
    BaseCategoryItem,
  },
};
</script>
