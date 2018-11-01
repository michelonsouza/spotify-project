<template>
  <div class="pt-3">
    <b-row class="m-0">
      <app-page-title :title="pageTitle" />
    </b-row>
    <b-row class="m-0">
      <app-search 
        :type="type" 
        @searched="emit" 
        @search="clean" />
    </b-row>
    <b-row class="m-0">
      <b-container class="text-center">
        <transition-group 
          name="fade" 
          mode="out-in">
          <app-loading-icon 
            v-if="loading" 
            key="loading-icon" />
          <p 
            v-if="!loading && notFound && !artist" 
            key="not-found" 
            class="text-center text-white h4">Não encontramos nenhum resultado para <b-badge variant="primary">{{ searchText.toUpperCase() }}</b-badge>
          </p>
          <p 
            v-if="!loading && found && !artist" 
            key="found" 
            class="text-center text-white h4">Lista de resultados para <b-badge variant="primary">{{ searchText.toUpperCase() }}</b-badge>
          </p>
        </transition-group>
      </b-container>
    </b-row>
  </div>
</template>

<script>
import * as types from "@/store/types";
import PageTitle from "@/components/PageTitle.vue";
import Search from "@/components/Search.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

export default {
  name: "PageHeader",
  components: {
    appPageTitle: PageTitle,
    appSearch: Search,
    appLoadingIcon: LoadingIcon
  },
  props: {
    type: {
      type: String,
      required: true
    },
    pageTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      notFound: false,
      found: false,
      searchText: ""
    };
  },
  computed: {
    artist() {
      return this.$store.getters[types.GETTER_ARTIST];
    }
  },
  methods: {
    clean() {
      this.$emit("clean");
    },
    emit(result) {
      this.found = false;
      this.notFound = false;
      this.loading = true;
      this.searchText = result.text;

      if (result.status) {
        setTimeout(() => {
          this.loading = false;
          this.found = true;
          this.$emit("searched", true);
        }, 1000);
      } else {
        setTimeout(() => {
          this.loading = false;
          this.notFound = true;
          this.$emit("searched", true);
        }, 1000);
      }
    }
  }
};
</script>
