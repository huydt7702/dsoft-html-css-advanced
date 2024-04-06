<template>
  <aside
    class="sidebar"
    :style="{ transform: isShowSidebar ? 'translateX(0)' : 'translateX(100%)' }"
  >
    <div class="sidebar__header">
      <a href="#" class="sidebar__logo-link">
        <img class="sidebar__logo" src="@/assets/images/logo.png" alt="Logo" />
      </a>
      <button class="sidebar__close-btn" @click="handleCloseSidebar">
        <i class="ti-close"></i>
      </button>
    </div>
    <ul class="sidebar__list">
      <li class="sidebar__item">Home</li>
      <li class="sidebar__item">Pages</li>
      <li class="sidebar__item">Courses</li>
      <li class="sidebar__item">Login</li>
      <li class="sidebar__item">Register</li>
      <li class="sidebar__item">Get Started Now for Free</li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    isShowSidebar: {
      type: Boolean,
    },
  },
  setup(_, { emit }) {
    const handleCloseSidebar = () => {
      emit("onCloseSidebar", false);
    };

    return { handleCloseSidebar };
  },
};
</script>
