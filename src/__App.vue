<template>
  <v-app>
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      app
    />
    <v-navigation-drawer app />
    <v-main>
      <v-container fluid>
        컨텐츠 영역
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
      { title: 'grid-system', icon: 'mdi-image', to: '/grid-system'},
      { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page'}
    ],
    right: null,
  }),
};
</script>
