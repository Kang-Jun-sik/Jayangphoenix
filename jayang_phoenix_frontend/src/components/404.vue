<template>
  <div class="home center">
    <p style="color:red">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      msg: "Sorry, the page you're looking for doesn't exist."
    };
  }
};
</script>
