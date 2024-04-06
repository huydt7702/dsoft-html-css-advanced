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
            ref="videoRef"
            @click="handleToggleVideo"
          ></video>
          <button
            ref="playVideoBtnRef"
            class="feedback__play-btn"
            @click="handleToggleVideo"
          >
            <i class="ti-control-pause feedback__play-icon"></i>
          </button>
          <button
            ref="pauseVideoBtnRef"
            class="feedback__pause-btn"
            @click="handleToggleVideo"
          >
            <i class="ti-control-play feedback__pause-icon"></i>
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
import { MILLISECONDS_PER_SECOND } from "@/constants";

export default {
  setup() {
    const videoRef = ref(null);
    const isPlayVideo = ref(false);
    const playVideoBtnRef = ref(null);
    const pauseVideoBtnRef = ref(null);

    const toggleVideoDisplay = (playBtnDisplay, pauseBtnDisplay) => {
      if (playVideoBtnRef.value && pauseVideoBtnRef.value) {
        playVideoBtnRef.value.style.display = playBtnDisplay;
        pauseVideoBtnRef.value.style.display = pauseBtnDisplay;
      }
    };

    const hiddenPlayVideoButton = () => {
      if (!playVideoBtnRef.value) return;
      setTimeout(() => {
        playVideoBtnRef.value.style.display = "none";
      }, MILLISECONDS_PER_SECOND);
    };

    const handleToggleVideo = () => {
      const video = videoRef.value;
      if (!video) return;

      if (isPlayVideo.value) {
        video.pause();
        toggleVideoDisplay("none", "flex");
      } else {
        video.play();
        toggleVideoDisplay("flex", "none");
        hiddenPlayVideoButton();
      }

      isPlayVideo.value = !isPlayVideo.value;
    };

    return {
      videoRef,
      playVideoBtnRef,
      pauseVideoBtnRef,
      handleToggleVideo,
    };
  },
};
</script>
