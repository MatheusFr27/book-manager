import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: require("@/components/Home").default,
    },
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/information",
      name: "InformationPage",
      component: require("@/components/InformationPage").default,
    },
    {
      path: "/book",
      name: "BookPage",
      component: require("@/components/BookPage").default,
    },
    {
      path: "/configuration",
      name: "ConfigurationPage",
      component: require("@/components/ConfigurationPage").default,
    },
  ],
});
