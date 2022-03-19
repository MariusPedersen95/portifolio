<template>
  <transition name="bounce" appear>
    <header :class="show ? 'active' : ''">
      <div class="header-logo">
        <nuxt-link to="/">Marius Pedersen</nuxt-link>
      </div>
      <div class="header-right-nav">
        <div class="nav">
          <a class="nav-link" href="">Linkedin</a>
          <a class="nav-link" href="">Github</a>
          <span class="nav-link">Contact</span>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true
  },
  // created() {
  //   const header = document.getElementById('#header')
  //   css(header, { transform: 'translate(0px)' })
  // },
}
</script>

<style>
header {
  transform: translateY(-70%);
  left: 0px;
  top: 0px;
  overflow-y: hidden;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 26px;
  z-index: 8;
}

.active {
  transform: translate(0px);
}

.header-right-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.nav {
  position: absolute;
  display: flex;
  right: 0px;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 21px;
  font-size: 20px;
  font-weight: 300;
}
.header-container {
  display: flex;
  /* justify-content: flex-end; */
  /* justify-content: space-evenly; */
  right: 0px;
}

.bounce-enter-active {
  animation: bounce-in 2s ease;
}

/* .bounce2 {
  animation: bounce2 2s ease infinite;
} */
@keyframes bounce-in {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-70%);
  }
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-7%);
  }
  90% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(-3%);
  }
  97% {
    transform: translateY(0%);
  }
  99% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
