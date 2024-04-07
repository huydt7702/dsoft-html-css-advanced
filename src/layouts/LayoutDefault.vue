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
  <button ref="goToTopBtnRef" class="btnGoToTop" @click="handleGoToTop">
    <i class="ti-arrow-up"></i>
  </button>
  <div
    v-if="isShowSidebar"
    class="overlay"
    @click="handleToggleSidebar(false)"
  ></div>
</template>

<script>
import { onMounted, ref } from "vue";

import BaseHeader from "@/components/common/BaseHeader.vue";
import BaseFooter from "@/components/common/BaseFooter.vue";
import BaseSidebar from "@/components/common/BaseSidebar.vue";
import { SCROLL_THRESHOLD } from "@/constants";

export default {
  components: {
    BaseHeader,
    BaseFooter,
    BaseSidebar,
  },
  setup() {
    const isShowSidebar = ref(false);
    const goToTopBtnRef = ref(null);

    const handleToggleScrollbar = (showSidebar) => {
      document.body.style.overflow = showSidebar ? "hidden" : "unset";
    };

    const handleToggleSidebar = (showSidebar) => {
      isShowSidebar.value = showSidebar;
      handleToggleScrollbar(showSidebar);
    };

    const handleGoToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    function handleShowBtnGoToTop() {
      if (window.scrollY >= SCROLL_THRESHOLD) {
        goToTopBtnRef.value.style.opacity = "1";
        goToTopBtnRef.value.style.pointerEvents = "unset";
      } else {
        goToTopBtnRef.value.style.opacity = "0";
        goToTopBtnRef.value.style.pointerEvents = "none";
      }
    }

    onMounted(() => {
      document.addEventListener("scroll", handleShowBtnGoToTop);
    });

    return {
      isShowSidebar,
      goToTopBtnRef,
      handleToggleSidebar,
      handleGoToTop,
      handleShowBtnGoToTop,
    };
  },
};
</script>
