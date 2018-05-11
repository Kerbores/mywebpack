import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import ElTreeGrid from "element-tree-grid";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import store from "./vuex/store";
import Vuex from "vuex";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import routes from "./router";
import "font-awesome/css/font-awesome.min.css";
import "./assets/style.less";
import 'kindeditor/kindeditor-all-min.js'
import 'kindeditor/themes/default/default.css'

import VueKindEditor from 'vue-kindeditor';

import api from "./common/api";
import http from "./common/http";
import rules from "./common/rules";
import utils from "./common/utils";

import AMap from 'vue-amap';
import VCharts from 'v-charts'

Vue.component(ElTreeGrid.name, ElTreeGrid);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(AMap);
Vue.use(VueKindEditor)
Vue.use(VCharts)
AMap.initAMapApiLoader({
    key: "ae7db9d3bfa41d83f2414eade8e613f9",
    plugin: [
        "AMap.Autocomplete",
        "AMap.Geocoder",
        "AMap.PlaceSearch",
        "AMap.Scale",
        "AMap.OverView",
        "AMap.ToolBar",
        "AMap.MapType",
        "AMap.PolyEditor",
        "AMap.CircleEditor",
        "AMap.Geolocation"
    ]
});

Vue.prototype.$http = http;
Vue.prototype.$rules = rules;
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;
// NProgress.configure({ showSpinner: false });

const router = new VueRouter({
    // mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.path === "/") {
        store.commit("remove");
    }
    next();
});

router.afterEach(transition => {
    NProgress.done();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
