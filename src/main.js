import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './quasar'
import {
  microModules
} from './store/index.js'
Vue.use(Vuex)
import actions from '@/utils/actions'
let instance = null;
let mainStoreModules = {},
  allStoreModules = microModules;

// 动态添加publicPath
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap(props) {}

// 挂载应用
export async function mount(props) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  console.log('hf', '挂载fdevapp应用 ing', props);
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.store}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      store: props.store
    });
  // 获取主应用的vuex modules
  if (props.mainModules) {
    mainStoreModules = props.mainModules
    allStoreModules = {
      ...mainStoreModules,
      ...microModules
    }
  }
  // 获取主应用传过来的组件
  if (props.components) {
    Vue.use(props.components)
  }
  if (props.utils) {
    Object.keys(props.utils).forEach(fn => {
      Vue.prototype[`$${fn}`] = fn;
    })
  }
  render(props)
}

// 没有父应用  独自开启运行子应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


function render(props) {
  const store = new Vuex.Store({
    modules: allStoreModules
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
export async function unmount(props) {
  instance.$destroy();
  console.log('hf', '销毁fdevrqr 应用');
}