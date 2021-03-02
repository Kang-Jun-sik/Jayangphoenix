<template>

  <v-app id="vcrm">
    <v-navigation-drawer class="blue lighten-5" mini-variant-width="70" width="250" light :mini-variant.sync="mini"
                         v-model="drawer" app>
      <v-list class="pa-0">
        <v-list-item tag="div">
          <v-list-item-action>
            <v-img max-width="2.5em" class="avatar" src="@/assets/avatar0.png"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>user</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action style="max-width:1em">
            <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition">
              <template v-slot:activator="{on}">
                <v-btn icon small light slot="activator" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <!--
                <v-list-item v-for="item in userMenus" :key="item.title" value="true" @click="handleUserActions(item)" router>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                -->
              </v-list>
            </v-menu>
          </v-list-item-action>
          <v-list-item-action style="max-width:1em">
            <v-btn icon small @click.native.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list></v-list>
    </v-navigation-drawer>
    <v-footer :inset="true" style="justify-content:center; text-align: center" app>
      <span>&copy; Jayang Phoenix 2021 </span>
    </v-footer>
    <router-view></router-view>
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
