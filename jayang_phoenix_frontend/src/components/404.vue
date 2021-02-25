<template>
  <div className="home center">
    <v-card className="mx-auto" color=" " dark max-width="400">
      <v-card-title>
        <v-icon large left>
          mdi-information
        </v-icon>
        <span className="title font-weight-light">ERROR</span>
      </v-card-title>

      <v-card-text className="headline font-weight-bold">
        <p style="color:red">{{ msg }}</p>
      </v-card-text>

      <v-card-actions>
        <v-list-item className="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img className="elevation-6" src="@/assets/avatar0.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <router-link to="/dashboard">
              <v-icon className="mr-1" link="dashboard" router>mdi-home</v-icon>
            </router-link>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
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
