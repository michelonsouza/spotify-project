export default {
  computed: {
    cardTitle() {
      if (this.type && this.type !== "tracks") {
        return { title: `Clique para ver ${this.name}` };
      } else {
        return {};
      }
    },
    imgUrl() {
      if (this.type && this.type !== "tracks") {
        return this.object.images[1]
          ? this.object.images[1].url
          : require("../assets/no-image.jpg");
      } else {
        return this.object.album.images[1]
          ? this.object.album.images[1].url
          : require("../assets/no-image.jpg");
      }
    },
    name() {
      if (this.type === "albums") {
        if (this.object.name.split(",").length > 1) {
          return "Vários artistas";
        }
      }
      return this.object.name;
    },
    participants() {
      if (this.object.artists.length > 1) {
        return this.object.artists.map(a => a.name).join(", ");
      } else {
        return this.object.artists[0].name;
      }
    }
  },
  methods: {
    timeCalc(time) {
      const duration = new Date(time);
      const seconds =
        duration.getSeconds() > 9
          ? duration.getSeconds()
          : `0${duration.getSeconds()}`;
      return `${duration.getMinutes()}:${seconds}`;
    }
  }
};
