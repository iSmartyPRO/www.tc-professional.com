<template>
  <div class="uk-container uk-margin-large-top uk-margin-large-bottom">
    <div>
      <h2 class="uk-text-center uk-text-bold">
        <div v-html="title"></div>
      </h2>
      <div class="uk-text-center uk-text-muted uk-text-small">
        <div v-html="description"></div>
      </div>
      <div class="uk-grid-small uk-child-width-1-3@s uk-flex-center uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
        <div v-for="(item, index) in list" :key="index">
          <div class="uk-card uk-card-default uk-card-body">
            <img src="@/assets/anchor-logo.svg" class="logo-small">
            <h4 class="uk-text-bold">{{item.name}}</h4>
            <button v-if="item.description" class="uk-button uk-button-default" @click="showDescription(item.name, item.description)">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-grid" uk-grid></div>
  </div>
</template>

<script>
import UIkit from 'uikit'

export default {
  props: ["title", "description", "list"],
  methods: {
    showDescription(title, content){
      UIkit.modal.alert(`<h4 class="uk-text-bold">${title}</h4><p>${content}</p>`);
    }
  }
}
</script>

<style>

</style>