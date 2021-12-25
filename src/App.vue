<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
}
</script>

<style>
body{
  margin: 0 0 0 0;
}
button{
  background: none;
  border: none;
}

.app{
  height: 100vh;
}
img {
  width: 6em;
  border-radius: 50%;
}
a{
  text-decoration: none;
  color: black;
  cursor: default;
}
@media (max-width: 321px){
  img {
    width: 5em;
    border-radius: 50%;
  }
}
@media (max-width: 376px){
  img {
    width: 5em;
    border-radius: 50%;
  }
}
@media (max-width: 426px){
  img {
    width: 5em;
    border-radius: 50%;
  }
}
</style>

