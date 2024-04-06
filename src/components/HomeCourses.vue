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

      <BaseCourseList ref="slideWrapperRef" />

      <div v-if="isShowSlide" class="courses__wrap-progress">
        <button
          class="courses__progress-btn"
          @click="handleNextOrPrevSlider(-1)"
        >
          <i class="ti-arrow-left courses__arrow-left"></i>
        </button>
        <div ref="sliderScrollbar" class="courses__progress">
          <div
            ref="scrollbarThumb"
            class="courses__progress-item"
            style="width: 33.33333%"
            @mousedown="handleThumbDrag"
          ></div>
        </div>
        <button
          class="courses__progress-btn"
          @click="handleNextOrPrevSlider(1)"
        >
          <i class="ti-arrow-right courses__arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
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
  setup() {
    const slideWrapperRef = ref(null);
    const scrollbarThumb = ref(null);
    const sliderScrollbar = ref(null);

    const handleNextOrPrevSlider = (direction) => {
      const slideWrapperElement = slideWrapperRef.value.$el;
      const scrollAmount = slideWrapperElement.clientWidth * direction;
      slideWrapperElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const handleThumbDrag = (e) => {
      const slideWrapperElement = slideWrapperRef.value.$el;
      const maxScrollLeft =
        slideWrapperElement.scrollWidth - slideWrapperElement.clientWidth;

      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.value.offsetLeft;
      const maxThumbPosition =
        sliderScrollbar.value.getBoundingClientRect().width -
        scrollbarThumb.value.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition),
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.value.style.left = `${boundedPosition}px`;
        slideWrapperElement.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    onMounted(() => {
      const slideWrapperElement = slideWrapperRef.value.$el;
      const maxScrollLeft =
        slideWrapperElement.scrollWidth - slideWrapperElement.clientWidth;

      const updateScrollThumbPosition = () => {
        const scrollPosition = slideWrapperElement.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.value.clientWidth -
            scrollbarThumb.value.offsetWidth);
        scrollbarThumb.value.style.left = `${thumbPosition}px`;
      };

      slideWrapperElement.addEventListener("scroll", updateScrollThumbPosition);
    });

    return {
      scrollbarThumb,
      sliderScrollbar,
      slideWrapperRef,
      handleThumbDrag,
      handleNextOrPrevSlider,
    };
  },
};
</script>
