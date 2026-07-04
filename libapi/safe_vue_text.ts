// Z6 N2 benign mirror — Vue v-text (escaped) instead of v-html.
export const SafeVueApp = {
  data() { return { q: '' }; },
  template: '<div v-text="q"></div>',
};
