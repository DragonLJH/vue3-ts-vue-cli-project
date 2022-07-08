<template>
  <div>QueryPage</div>
  <div>{{ params.path }}</div>
  <div>{{ path }}</div>
</template>

<script>
import { toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import { queryObj } from "./config";
import MyAxios from "@/axios/index";
export default {
  name: "QueryPage",
  setup() {
    const Route = useRoute(); //获取到值
    const { url, label, path, title } = Route.query;
    console.log("Route.fullPath", Route.fullPath);
    console.log("Route.hash", Route.hash);
    console.log("Route.matched", Route.matched);
    console.log("Route.meta", Route.meta);
    console.log("Route.name", Route.name);
    console.log("Route.params", Route.params);
    console.log("Route.path", Route.path);
    console.log("Route.query", Route.query);
    console.log("Route.redirectedFrom", Route.redirectedFrom);
    console.log("Route", Route);
    console.log("queryObj", queryObj[Route.params.path]);
    let myAxios = new MyAxios();
    myAxios.request({ url }).then((data) => {
      console.log("data", data);
    });
    return {
      ...toRefs(Route),
    };
  },
};
</script>

<style>
</style>