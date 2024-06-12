// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/recommended',
    'plugin:vuetify/recommended'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/no-legacy-grid': 'error',
    'indent': ['error', 2],
    'vue/return-in-computed-property': ['error', {
      'treatUndefinedAsUnspecified': true
    }]
  }
}
