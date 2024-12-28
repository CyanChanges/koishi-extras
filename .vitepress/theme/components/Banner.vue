<script setup>
import { ref } from 'vue'
import Message from 'primevue/message'

const open = ref(true)

/**
 * Call this if the banner is dismissible
 */
function dismiss() {
  open.value = false
}
</script>

<template>
  <div class="banner" v-if="open">
    <Message severity="warn">The document is Work In Progress (WIP). May be incomplete or have missing content.</Message>
  </div>
</template>

<style>
html:not(.banner-dismissed) {
  --vt-banner-height: 2rem;
}
</style>

<style scoped>
.banner {
  --vp-z-index-banner: 50;
  position: fixed;
  z-index: var(--vp-z-index-banner);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vt-banner-height);
  line-height: var(--vt-banner-height);
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background-color: var(--vt-c-green);
  pointer-events: none;
}

.banner-dismissed .banner {
  display: none;
}

a:hover {
  text-decoration: underline;
}

button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
}

.close {
  width: 20px;
  height: 20px;
  fill: #fff;
  transform: rotate(45deg);
}
/*
@media (max-width: 720px) {
  a > span {
    display: none;
  }
} */
</style>