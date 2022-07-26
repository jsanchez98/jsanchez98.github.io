const { createApp } = Vue;

class Button {
  constructor(number) {
    if (number === 1) {
      this.active = true;
      this.inactive = false;
    } else {
      this.active = false;
      this.inactive = true;
    }
  }

  On() {
    this.active = true;
    this.inactive = false;
  }

  Off() {
    this.active = false;
    this.inactive = true;
  }
}

const app = {
  data() {
    return {
      message: "Hello Vue!",
      page: "about",
      buttonStates: [new Button(1), new Button(2), new Button(3)],
    };
  },
  methods: {
    switchButtons(index) {
      for (const i in this.buttonStates) {
        if (i == index) {
          this.buttonStates[i].On();
        } else {
          this.buttonStates[i].Off();
        }
      }
    },
    switchPage(destination) {
      if (destination === "about") {
        this.switchButtons(0);
      } else if (destination === "projects") {
        this.switchButtons(1);
      } else if (destination === "contact") {
        this.switchButtons(2);
      } else if (destination === "left") {
        switch (this.page) {
          case "about":
            return;
          case "projects":
            this.page = "about";
            this.switchButtons(0);
            return;
          case "contact":
            this.page = "projects";
            this.switchButtons(1);
            return;
        }
      } else if (destination === "right") {
        switch (this.page) {
          case "about":
            this.page = "projects";
            this.switchButtons(1);
            return;
          case "projects":
            this.page = "contact";
            this.switchButtons(2);
            return;
          case "contact":
            return;
        }
      }
      this.page = destination;
    },
  },
};

createApp(app).mount("#app");
