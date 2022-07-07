<template>
  <div>UploadPage</div>
  <div>{{ params.path }}</div>
</template>

<script>
import { toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "UploadPage",
  setup() {
    const Route = useRoute(); //获取到值
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
    return {
      ...toRefs(Route),
    };
  },
};
</script>

<style>
</style>