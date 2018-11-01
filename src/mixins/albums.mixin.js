export default {
  computed: {
    participants() {
      if (this.album.artists.lenght > 1) {
        let artists = "";
        this.artists.forEach((artist, index) => {
          artists += artist.name;
          if (index < this.artists.length) {
            artists += ", ";
          }
        });
        return artists;
      } else {
        return this.album.artists[0].name;
      }
    },
    availability() {
      const available_markets = this.album.available_markets.filter(
        market => market === "BR"
      );
      if (available_markets.length === 0) {
        return "Não Disponível";
      }
      return "Disponível";
    },
    tracks() {
      return this.album.tracks.items;
    },
    artists(track) {
      const artists = track.artists;
      if (artists.lenght > 1) {
        return artists.reduce((a, b) => {
          a.name + (", " + b.name);
        });
      } else {
        return artists[0].name;
      }
    },
    releaseDate() {
      const date = this.album.release_date
        .split("-")
        .reverse()
        .join("/");
      return date;
    }
  }
};
