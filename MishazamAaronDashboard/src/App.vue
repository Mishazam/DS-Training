<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">About</router-link>
    </nav> -->
    <router-view />
    <!-- <button @click="sendMessage('Helloworld!')">SNED</button>   -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     connection: null
  //   }
  // },
  // methods: {
  //   sendMessage(message) {
  //     console.log(message)
  //     console.log(this.connection);
  //     this.connection.send(message);
  //   },
  // },
  // created() {
  //   console.log("Starting connectin with WebSocket server...");
  //   this.connection = new WebSocket("wss://echo.websocket.org");
  //   this.connection.onopen = function(event){
  //     console.log(event);
  //     console.log("Connection Success");
  //   }
  //   this.connection.onmessage = function(event){
  //     console.log(event);
  //   }
  // },
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #app {
    overflow-x: auto;
    height: 110vh !important;
  }

}

/* #app {
  overflow-x: hidden;
  padding-bottom: 10px;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
