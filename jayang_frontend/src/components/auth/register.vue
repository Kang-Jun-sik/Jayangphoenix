<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="registerUser"
        >
          <input
              type="text"
              id="name"
              class="form-control mb-5"
              placeholder="Name"
              v-model="register.name"
              required
          />
          <input
              type="email"
              id="email"
              class="form-control mb-5"
              placeholder="Email"
              v-model="register.email"
              required
          />
          <!-- Password -->
          <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="register.password"
          />
          <input
              type="password"
              id="password_confirm"
              class="form-control mb-5"
              placeholder="Password Checking"
              v-model="register.password_confirm"
          />
          <p>
            Already have an account??
            <router-link to="/">click here</router-link>
            <!-- Sign in button -->
          </p>
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        password_confirm:"",
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        if(this.register.password !== this.register.password_confirm){
          swal("Error", "Password Checking error", "error");
          return;
        }
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>
