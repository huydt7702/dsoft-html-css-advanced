<template>
  <header class="header" :class="isSubHeader ? 'sub-header' : ''">
    <div class="container">
      <nav class="header__nav">
        <a href="#" class="header__logo-link">
          <img class="header__logo" src="@/assets/images/logo.png" alt="Logo" />
        </a>
        <BaseSearchForm />
        <ul class="header__nav-list">
          <li class="header__nav-item">
            Home
            <i class="ti-angle-down"></i>
          </li>
          <li class="header__nav-item">
            Pages
            <i class="ti-angle-down"></i>
          </li>
          <li class="header__nav-item">
            Courses
            <i class="ti-angle-down"></i>
          </li>
          <li class="header__nav-item">
            <a href="#">Login</a>
          </li>
        </ul>
        <div class="header__group-btn">
          <button class="header__register-btn">Register</button>
          <button class="header__bars-btn js-sidebar-bars-btn">
            <i class="ti-menu"></i>
          </button>
        </div>
      </nav>
    </div>
    <div v-if="!isSubHeader" class="header__group">
      <h2 class="header__heading">Distant learning for further expansion</h2>
      <p class="header__desc">
        Choose from over 100.000 online video courses with new additions
        published every mont.
      </p>
      <button class="header__get-started-btn">Get Started Now for Free</button>
    </div>
    <div v-if="!isSubHeader" class="header__info">
      <div class="header__info-group">
        <div class="header__info-icon">
          <i class="ti-book"></i>
        </div>
        <p class="header__info-title">100k Online Courses</p>
      </div>
      <div class="header__info-group">
        <div class="header__info-icon header__info-icon--active">
          <i class="ti-user"></i>
        </div>
        <p class="header__info-title">Expert Instruction</p>
      </div>
      <div class="header__info-group">
        <div class="header__info-icon">
          <i class="ti-alarm-clock"></i>
        </div>
        <p class="header__info-title">Lifetime Access</p>
      </div>
    </div>
  </header>
</template>

<script>
import BaseSearchForm from "@/components/common/BaseSearchForm.vue";

export default {
  props: {
    isSubHeader: {
      type: Boolean,
    },
  },
  components: {
    BaseSearchForm,
  },
};
</script>
