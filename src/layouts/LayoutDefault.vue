<template>
  <BaseHeader />
  <BaseSidebar />
  <div class="content">
    <RouterView />
  </div>
  <BaseFooter />
</template>

<script>
import BaseHeader from "@/components/common/BaseHeader.vue";
import BaseFooter from "@/components/common/BaseFooter.vue";
import BaseSidebar from "@/components/common/BaseSidebar.vue";

export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseSidebar,
  },
};
</script>
