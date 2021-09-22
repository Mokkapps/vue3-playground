<template>
  <div id="nav">
    <router-link class="uppercase" to="/top-headlines"
      >Top Headlines</router-link
    >
    <span class="text-white"> | </span>
    <router-link class="uppercase" to="/all/bitcoin"
      >Bitcoin Articles</router-link
    >
    <span class="text-white"> | </span>
    <router-link class="uppercase" to="/all/gaming"
      >Gaming Articles</router-link
    >
  </div>
  <main class="px-8">
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-underline: #42b983;
}
</style>
