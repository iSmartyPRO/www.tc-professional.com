<template>
  <Nav :menus="menus" @menuName="handleMenuName"/>
  <div class="uk-container pageHeight uk-margin-large-top" v-if="currentPage !== 'Home'">
    <router-view/>
  </div>
  <router-view v-else/>
  <Footer></Footer>
</template>

<script>
import UIkit from 'uikit'
import UIkitss from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons'
import 'font-awesome/css/font-awesome.css'
import Footer from "./views/Footer.vue"

UIkit.use(Icons)

import Nav from "./components/Nav.vue"
import menuJSON from "./data/menus.json"

export default {
  name: 'App',
  components: { Nav, Footer },
  data() {
    return {
      menus: menuJSON,
      currentPage: this.$route.name ? this.$route.name : 'Home'
    }
  },
  methods: {
    handleMenuName(name){
      this.currentPage = name
    }
  }

}
</script>

<style>
  .pageHeight {
    min-height: 500px;
  }

</style>