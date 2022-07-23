const { createApp } = Vue;

const app = {
    data() {
        return {
          message: "Hello Vue!",
          page: "about",
          selected1: "white",
          selected2: "white",
          selected3: "white",
        };
      },
    methods: {
        switchPage(destination){
            if (destination==="about"){
                this.selected1="rgba(126, 126, 126, 0.701)"
            } else if (destination==="projects"){
                this.selected2="rgba(126, 126, 126, 0.701)"
            } else if (destination==="contact"){
                this.selected3="rgba(126, 126, 126, 0.701)"
            } else if (destination==="left"){
                switch(this.page){
                    case "about":
                        return;
                    case "projects":
                        this.page = "about";
                        this.selected1="rgba(126, 126, 126, 0.701)"
                        return;
                    case "contact":
                        this.page = "projects"
                        this.selected2="rgba(126, 126, 126, 0.701)"
                        return;
                }
            } else if (destination==="right"){
                switch(this.page){
                    case "about":
                        this.page = "projects"
                        this.selected2="rgba(126, 126, 126, 0.701)"
                        return;
                    case "projects":
                        this.page = "contact";
                        this.selected1="rgba(126, 126, 126, 0.701)"
                        return;
                    case "contact":
                        return;
                }
            }
            this.page = destination;
        }
    }
}

createApp(app).mount("#app");
