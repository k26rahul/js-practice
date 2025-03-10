<script>
export default {
  data() {
    return {
      salary: 10000,
    };
  },
};
</script>

<template>
  <h1>my salary is {{ salary }}</h1>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view></router-view>
</template>
