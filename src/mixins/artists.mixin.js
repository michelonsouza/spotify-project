export default {
  computed: {
    genres() {
      return this.artist.genres;
    },
    popularity() {
      const pop = this.artist.popularity;
      if (pop > 80) {
        return "Top";
      } else if (pop > 59 && pop < 80) {
        return "Legal";
      } else if (pop > 29 && pop < 60) {
        return "Bom";
      } else {
        return "Desconhecido";
      }
    }
  }
};
