<template>
  <div id="app">
    {{ titulo }}
    <p><button @click="titulo += '#'">ADD</button></p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: "Data usando Vue JS",
    };
  },
};
</script>

<style>
#app {
  background-color: chocolate;
  color: #ffffff;
}
</style>