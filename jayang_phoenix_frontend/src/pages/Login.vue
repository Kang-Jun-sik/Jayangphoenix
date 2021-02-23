<template>
  <div class="login">
    <h1>This is an Login page</h1>
  </div>
</template>
<script lang="ts">

import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private email = "admin@test.com";
  private pass = "password";
  private error = false;
  private text = "";

  public gotoDashboard() {
    this.$router.push("/");
  }
}
</script>

<style lang="scss" scoped>

</style>
