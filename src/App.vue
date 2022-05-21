<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> ||
      <RouterLink to="/about">Plus+</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
<style>
@import 'https://raw.githubusercontent.com/jonathantneal/system-font-css/gh-pages/system-font.css';

body {
  background: dodgerblue linear-gradient(22deg, aqua, dodgerblue, deeppink)
    fixed;
  color: white;
  font: normal 32px/1.6 system-ui, sans-serif;
  text-shadow: 0 1px 1px hsl(0 0% 0% / 20%);
  margin: 3rem;
}
a {
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}
a:hover {
  font-weight: bold;
  color: aliceblue;
}
.app {
  margin: 1rem auto;
  text-align: center;
}
button {
  font-size: 2rem;
  margin: 0.3rem;
  padding: 0.1rem 0.4rem;
  font-weight: 700;
  color: aliceblue;
  background-color: rgb(20, 20, 241);
  border-radius: 4px;
  transition: all 1s ease-in-out;
  font-weight: 700;
  border: none;
}
button:hover {
  color: rgb(41, 41, 216);
  background-color: aliceblue;
  cursor: pointer;
  transform: scale(1.009);
}
</style>
