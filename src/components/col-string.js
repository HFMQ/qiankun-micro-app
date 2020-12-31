import Vue from "vue";

Vue.component("col-string", {
  props: {
    name: {
      type: String,
      default: () => ""
    }
  },
  render: function(createElement) {
    return createElement("h" + this.name, [createElement("a", this.name)]);
  }
});

/* export default Vue.extend('col-string', {
  props: {
    name: {
      type: String,
      default: () => ''
    }
  },
  render (h) {
    return h('h2', 'bban')
    /* return h('template', {
      v-slot: `body-cell-${this.name}`
    },[
      h('q-td',{},slot(this, 'default'))
    ])
  }
}) */
