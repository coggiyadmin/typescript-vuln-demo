// XSS variant: Vue v-html directive renders raw HTML (framework sink).
export const app = {
  data() { return { q: new URLSearchParams(location.search).get('q') }; },
  template: '<div v-html="q"></div>', // SINK CWE-79 (Vue v-html)
};
