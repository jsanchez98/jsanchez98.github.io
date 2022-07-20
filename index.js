const { createApp } = Vue;

const app = {
    data() {
        return {
          message: "Hello Vue!",
        };
      },
}

createApp(app).mount("#app");
