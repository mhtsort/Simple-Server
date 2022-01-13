const app = Vue.createApp({
  data() {
    return {
      name: "Tsortanidis",
      age: 40,
      imgsrc: "https://picsum.photos/200",
    };
  },
  methods: {
    getRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
