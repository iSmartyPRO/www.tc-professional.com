<template>
  <div
    class="uk-position-relative uk-visible-toggle uk-light"
    tabindex="-1"
    uk-slideshow="animation: push; ratio: 9:3"
  >
    <ul class="uk-slideshow-items">
      <li v-for="slide in slides" :key="slide.img">
        <img :src="'/slides/' + slide.img" alt="" uk-cover />
        <div class="uk-overlay-primary uk-position-cover"></div>
        <div class="uk-position-center uk-position-small uk-text-center">
          <h2 uk-slideshow-parallax="y: -100,0,0; opacity: 1,1,0">
            {{ slide.title }}
          </h2>
          <p uk-slideshow-parallax="y: 100,0,0; opacity: 1,1,0">
            {{ slide.subtext }}
          </p>
        </div>
      </li>
    </ul>
    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-previous
      uk-slideshow-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover"
      href="#"
      uk-slidenav-next
      uk-slideshow-item="next"
    ></a>
  </div>
</template>

<script>
export default {
  props: ['slides']
}
</script>

<style>

</style>