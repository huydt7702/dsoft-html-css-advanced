<template>
  <BaseHeader
    isSubHeader
    :isShowSidebar="isShowSidebar"
    @onShowSidebar="handleToggleSidebar"
  />
  <BaseHeader
    :isShowSidebar="isShowSidebar"
    @onShowSidebar="handleToggleSidebar"
  />
  <BaseSidebar
    :isShowSidebar="isShowSidebar"
    @onCloseSidebar="handleToggleSidebar"
  />
  <div class="content">
    <RouterView />
  </div>
  <BaseFooter />
  <div
    v-if="isShowSidebar"
    class="overlay"
    @click="handleToggleSidebar(false)"
  ></div>
</template>

<script>
import { ref } from "vue";

import BaseHeader from "@/components/common/BaseHeader.vue";
import BaseFooter from "@/components/common/BaseFooter.vue";
import BaseSidebar from "@/components/common/BaseSidebar.vue";

export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseSidebar,
  },
  setup() {
    const isShowSidebar = ref(false);

    const handleToggleScrollbar = (showSidebar) => {
      document.body.style.overflow = showSidebar ? "hidden" : "unset";
    };

    const handleToggleSidebar = (showSidebar) => {
      isShowSidebar.value = showSidebar;
      handleToggleScrollbar(showSidebar);
    };

    return { isShowSidebar, handleToggleSidebar };
  },
};
</script>
