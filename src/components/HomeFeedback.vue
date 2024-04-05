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
            class="feedback__video-play js-feedback-video"
            src="@/assets/videos/videomtp.mp4"
          ></video>
          <button class="feedback__play-btn js-feedback-play-video-btn">
            <i class="ti-control-play feedback__play-icon"></i>
          </button>
          <button class="feedback__pause-btn js-feedback-pause-video-btn">
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
