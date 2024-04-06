<template>
  <div class="feedback">
    <div class="container">
      <div class="content__title-group">
        <h3 class="content__title" title="What our students have to say">
          What our students have to say
        </h3>
        <div class="feedback__group-btn">
          <button class="feedback__arrow-left">
            <i class="ti-arrow-left"></i>
          </button>
          <button class="feedback__arrow-right">
            <i class="ti-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="feedback__content">
        <div class="feedback__video">
          <video
            class="feedback__video-play"
            src="@/assets/videos/videomtp.mp4"
            ref="videoEl"
            @click="handleToggleVideo"
          ></video>
          <button
            v-if="!isPlayVideo"
            class="feedback__play-btn"
            @click="handleToggleVideo"
          >
            <i class="ti-control-play feedback__play-icon"></i>
          </button>
          <button
            v-if="isPlayVideo"
            class="feedback__pause-btn"
            @click="handleToggleVideo"
          >
            <i class="ti-control-pause feedback__pause-icon"></i>
          </button>
        </div>
        <div class="feedback__desc">
          <p class="feedback__detail">
            Skillfy is a life saver. I don't have the time money for a college
            education. My goal is to become a freelance web designer and thanks
            to Skillfy
          </p>
          <p class="feedback__author">Riaz Surti | Hearthy Foods</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const videoEl = ref(null);
    const isPlayVideo = ref(false);

    const handleToggleVideo = () => {
      if (isPlayVideo.value) {
        videoEl.value.pause();
        isPlayVideo.value = false;
      } else {
        videoEl.value.play();
        isPlayVideo.value = true;
      }
    };

    return {
      videoEl,
      isPlayVideo,
      handleToggleVideo,
    };
  },
};
</script>
