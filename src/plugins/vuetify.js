import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 360,
    },
    mobileBreakpoint: 'xs'
  },
  theme: {
    themes: {
      light: {
        primary: colors.red,
        secondary: '#9C2780'
      }
    }
  }
});
