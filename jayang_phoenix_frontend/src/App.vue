<template>
  <v-app id="vcrm">
    <v-navigation-drawer class="blue lighten-5" mini-variant-width="70" width="250" light :mini-variant.sync="mini" v-model="drawer" app>
    </v-navigation-drawer>
    <v-footer :inset="true" style="justify-content:center; text-align: center" app>
      <span>&copy; Jayang Phoenix 2021 </span>
    </v-footer>
  </v-app>
</template>


<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class App extends Vue {
  private mini = false;
  public drawer = window.innerWidth > 960;
}

</script>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
