<template>
  <b v-if="!favorite" :class="color" class="h6 pointer mb-0" title="Adicionar aos Favoritos" @click="add">{{ text }}<i class="far fa-star" /></b>
  <b v-else :class="color" class="h6 pointer mb-0" title="Remover dos Favoritos" @click="remove">Remover dos Favoritos: <i class="fas fa-star text-warning text-primary" /></b>
</template>

<script>
export default {
  name: "FavoriteButton",
  props: {
    object: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: "Adicionar aos Favoritos: "
    },
    color: {
      type: String,
      required: false,
      default: "text-white"
    }
  },
  data() {
    return {
      favorite: false
    };
  },
  beforeMount() {
    this.favorite = this.searchItem();
  },
  methods: {
    add() {
      if (
        !localStorage.getItem([this.type]) ||
        JSON.parse(localStorage.getItem([this.type])).length === 0
      ) {
        const items = [];
        items.push(this.object);
        localStorage.setItem([this.type], JSON.stringify(items));
      } else {
        const items = JSON.parse(localStorage.getItem([this.type]));
        items.push(this.object);
        localStorage.setItem([this.type], JSON.stringify(items));
      }
      this.favorite = true;
    },
    remove() {
      const items = JSON.parse(localStorage.getItem([this.type]));

      items.splice(this.object, 1);

      if (items.length === 0) {
        localStorage.removeItem([this.type]);
      } else {
        localStorage.setItem([this.type], JSON.stringify(items));
      }

      this.favorite = false;
    },
    searchItem() {
      if (localStorage.getItem([this.type])) {
        const items = JSON.parse(localStorage.getItem([this.type]));
        const item = items.filter(el => el.id === this.object.id);

        if (item.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
  i {
    font-size: 1.3rem;
  }
}
</style>
